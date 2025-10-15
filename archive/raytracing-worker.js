// Web Worker for acoustic ray tracing simulation
// This runs on a separate thread to keep the UI responsive

// Import Three.js and BVH using ES modules in worker context
// Note: We'll receive the geometry data from main thread instead of importing Three.js

// Import seedrandom for reproducible random numbers
importScripts('https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js');

// Worker-local variables for reuse (avoid garbage collection)
let roomGeometry = null;
let emitterRadius = 0.5;
let emitterPosition = { x: 0, y: 0, z: 0 };

// Simplified vector math functions (since we can't import Three.js easily in worker)
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    
    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }
    
    normalize() {
        const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (length !== 0) {
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }
        return this;
    }
    
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    
    reflect(normal) {
        // r = d - 2 * (d · n) * n
        const dotProduct = this.dot(normal);
        this.x -= 2 * dotProduct * normal.x;
        this.y -= 2 * dotProduct * normal.y;
        this.z -= 2 * dotProduct * normal.z;
        return this;
    }
    
    randomDirection() {
        // Generate random direction on unit sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        this.x = Math.sin(phi) * Math.cos(theta);
        this.y = Math.sin(phi) * Math.sin(theta);
        this.z = Math.cos(phi);
        return this;
    }
    
    distanceTo(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        const dz = this.z - v.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

// Simplified ray-triangle intersection
function rayTriangleIntersect(rayOrigin, rayDirection, v0, v1, v2) {
    const edge1 = new Vector3().copy(v1).add(new Vector3().copy(v0).multiplyScalar(-1));
    const edge2 = new Vector3().copy(v2).add(new Vector3().copy(v0).multiplyScalar(-1));
    
    // Cross product for normal
    const h = new Vector3(
        rayDirection.y * edge2.z - rayDirection.z * edge2.y,
        rayDirection.z * edge2.x - rayDirection.x * edge2.z,
        rayDirection.x * edge2.y - rayDirection.y * edge2.x
    );
    
    const a = edge1.dot(h);
    if (a > -0.00001 && a < 0.00001) return null; // Ray parallel to triangle
    
    const f = 1.0 / a;
    const s = new Vector3().copy(rayOrigin).add(new Vector3().copy(v0).multiplyScalar(-1));
    const u = f * s.dot(h);
    
    if (u < 0.0 || u > 1.0) return null;
    
    const q = new Vector3(
        s.y * edge1.z - s.z * edge1.y,
        s.z * edge1.x - s.x * edge1.z,
        s.x * edge1.y - s.y * edge1.x
    );
    
    const v = f * rayDirection.dot(q);
    if (v < 0.0 || u + v > 1.0) return null;
    
    const t = f * edge2.dot(q);
    if (t > 0.00001) {
        const point = new Vector3().copy(rayOrigin).add(new Vector3().copy(rayDirection).multiplyScalar(t));
        const normal = new Vector3(
            edge1.y * edge2.z - edge1.z * edge2.y,
            edge1.z * edge2.x - edge1.x * edge2.z,
            edge1.x * edge2.y - edge1.y * edge2.x
        ).normalize();
        
        return {
            distance: t,
            point: point,
            normal: normal
        };
    }
    return null;
}

// Simplified sphere intersection
function raySphereIntersect(rayOrigin, rayDirection, sphereCenter, sphereRadius) {
    const oc = new Vector3().copy(rayOrigin).add(new Vector3().copy(sphereCenter).multiplyScalar(-1));
    const a = rayDirection.dot(rayDirection);
    const b = 2.0 * oc.dot(rayDirection);
    const c = oc.dot(oc) - sphereRadius * sphereRadius;
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) return null;
    
    const t = (-b - Math.sqrt(discriminant)) / (2.0 * a);
    if (t > 0.001) {
        const point = new Vector3().copy(rayOrigin).add(new Vector3().copy(rayDirection).multiplyScalar(t));
        const normal = new Vector3().copy(point).add(new Vector3().copy(sphereCenter).multiplyScalar(-1)).normalize();
        return {
            distance: t,
            point: point,
            normal: normal
        };
    }
    return null;
}

// Ray casting function
function raycast(rayOrigin, rayDirection, geometry) {
    let closestIntersection = null;
    let minDistance = Infinity;
    
    // Check triangles
    if (geometry && geometry.positions && geometry.indices) {
        for (let i = 0; i < geometry.indices.length; i += 3) {
            const i1 = geometry.indices[i] * 3;
            const i2 = geometry.indices[i + 1] * 3;
            const i3 = geometry.indices[i + 2] * 3;
            
            const v0 = new Vector3(geometry.positions[i1], geometry.positions[i1 + 1], geometry.positions[i1 + 2]);
            const v1 = new Vector3(geometry.positions[i2], geometry.positions[i2 + 1], geometry.positions[i2 + 2]);
            const v2 = new Vector3(geometry.positions[i3], geometry.positions[i3 + 1], geometry.positions[i3 + 2]);
            
            const intersection = rayTriangleIntersect(rayOrigin, rayDirection, v0, v1, v2);
            if (intersection && intersection.distance < minDistance) {
                minDistance = intersection.distance;
                closestIntersection = intersection;
            }
        }
    }
    
    return closestIntersection;
}

// Main simulation function
function runSimulation(params) {
    const {
        numRays,
        maxBounces,
        wallAbsorption,
        diffuseThreshold,
        randomizePhase,
        seed,
        speedOfSound,
        batchSize = 500
    } = params;
    
    // Set seed for reproducible results
    Math.seedrandom(seed || null);
    
    const reflectionCoefficient = 1.0 - wallAbsorption;
    const arrivals = [];
    let processedRays = 0;
    
    // Reusable vectors
    const rayOrigin = new Vector3();
    const rayDirection = new Vector3();
    const tempVec = new Vector3();
    
    // Process rays in batches
    function processBatch() {
        const endRay = Math.min(processedRays + batchSize, numRays);
        const batchArrivals = [];
        
        for (let i = processedRays; i < endRay; i++) {
            // Reset ray starting position and direction
            rayOrigin.set(0, 0, 0);
            rayDirection.randomDirection();
            
            let totalDistance = 0;
            let amplitude = 1.0;
            let bounceCount = 0;
            
            // Trace ray through scene
            for (let j = 0; j < maxBounces; j++) {
                // Check intersection with room geometry
                const roomIntersection = raycast(rayOrigin, rayDirection, roomGeometry);
                
                // Check intersection with emitter sphere
                const receiverIntersection = raySphereIntersect(
                    rayOrigin, 
                    rayDirection, 
                    new Vector3(emitterPosition.x, emitterPosition.y, emitterPosition.z), 
                    emitterRadius
                );
                
                // Check if ray hits receiver first
                if (receiverIntersection && 
                    (!roomIntersection || receiverIntersection.distance < roomIntersection.distance)) {
                    
                    if (receiverIntersection.distance > 0.001) {
                        totalDistance += receiverIntersection.distance;
                        
                        let finalAmplitude = amplitude;
                        if (randomizePhase && bounceCount > diffuseThreshold) {
                            finalAmplitude *= (Math.random() < 0.5 ? 1 : -1);
                        }
                        
                        batchArrivals.push({
                            time: totalDistance / speedOfSound,
                            amplitude: finalAmplitude
                        });
                        break;
                    }
                }
                
                // Handle room collision
                if (roomIntersection) {
                    bounceCount++;
                    totalDistance += roomIntersection.distance;
                    amplitude *= reflectionCoefficient;
                    
                    // Update ray position and direction
                    rayOrigin.copy(roomIntersection.point);
                    rayDirection.reflect(roomIntersection.normal);
                    
                    // Move slightly away from surface
                    tempVec.copy(rayDirection).multiplyScalar(0.001);
                    rayOrigin.add(tempVec);
                } else {
                    // Ray escaped without hitting anything
                    break;
                }
            }
        }
        
        // Add batch results to main array
        arrivals.push(...batchArrivals);
        processedRays = endRay;
        
        // Send progress update
        self.postMessage({
            type: 'progress',
            progress: processedRays / numRays,
            processedRays: processedRays,
            totalRays: numRays
        });
        
        // Continue processing or finish
        if (processedRays < numRays) {
            // Schedule next batch (non-blocking)
            setTimeout(processBatch, 0);
        } else {
            // Send final results
            self.postMessage({
                type: 'complete',
                arrivals: arrivals,
                totalArrivals: arrivals.length
            });
        }
    }
    
    // Start processing
    processBatch();
}

// Handle messages from main thread
self.onmessage = function(e) {
    const { type, data } = e.data;
    
    switch (type) {
        case 'init':
            self.postMessage({ type: 'ready' });
            break;
            
        case 'setGeometry':
            roomGeometry = data.roomGeometry;
            emitterRadius = data.emitterRadius;
            emitterPosition = data.emitterPosition;
            self.postMessage({ type: 'geometrySet' });
            break;
            
        case 'simulate':
            runSimulation(data);
            break;
            
        case 'terminate':
            self.close();
            break;
            
        default:
            console.warn('Unknown message type:', type);
    }
};

// Handle errors
self.onerror = function(error) {
    self.postMessage({
        type: 'error',
        error: error.message
    });
};
