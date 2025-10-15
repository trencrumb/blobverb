// Web Worker for acoustic ray tracing simulation with BVH support
// Based on three-mesh-bvh worker implementations

// Note: We need to use importmap in the main HTML to properly import modules in worker
// Since workers don't inherit the importmap, we'll use a different approach

// Import seedrandom for reproducible random numbers
importScripts('https://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js');

// We'll recreate the geometry and BVH directly from the transferred data
let roomGeometry = null;
let emitterRadius = 0.5;
let emitterPosition = { x: 0, y: 0, z: 0 };

// Simplified but fast BVH-like spatial structure
class SimpleBVH {
    constructor(positions, indices) {
        this.positions = positions;
        this.indices = indices;
        this.triangles = [];
        
        // Pre-compute triangle data for faster intersection
        for (let i = 0; i < indices.length; i += 3) {
            const i1 = indices[i] * 3;
            const i2 = indices[i + 1] * 3;
            const i3 = indices[i + 2] * 3;
            
            const v0 = [positions[i1], positions[i1 + 1], positions[i1 + 2]];
            const v1 = [positions[i2], positions[i2 + 1], positions[i2 + 2]];
            const v2 = [positions[i3], positions[i3 + 1], positions[i3 + 2]];
            
            // Pre-compute triangle normal and bounds
            const edge1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
            const edge2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
            
            // Cross product for normal
            const normal = [
                edge1[1] * edge2[2] - edge1[2] * edge2[1],
                edge1[2] * edge2[0] - edge1[0] * edge2[2],
                edge1[0] * edge2[1] - edge1[1] * edge2[0]
            ];
            
            // Normalize
            const length = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2]);
            if (length > 0) {
                normal[0] /= length;
                normal[1] /= length;
                normal[2] /= length;
            }
            
            this.triangles.push({
                v0, v1, v2, normal,
                minX: Math.min(v0[0], v1[0], v2[0]),
                maxX: Math.max(v0[0], v1[0], v2[0]),
                minY: Math.min(v0[1], v1[1], v2[1]),
                maxY: Math.max(v0[1], v1[1], v2[1]),
                minZ: Math.min(v0[2], v1[2], v2[2]),
                maxZ: Math.max(v0[2], v1[2], v2[2])
            });
        }
    }
    
    raycast(rayOrigin, rayDirection) {
        let closestIntersection = null;
        let minDistance = Infinity;
        
        for (const triangle of this.triangles) {
            // Quick bounding box check first
            const t1 = (triangle.minX - rayOrigin[0]) / rayDirection[0];
            const t2 = (triangle.maxX - rayOrigin[0]) / rayDirection[0];
            const t3 = (triangle.minY - rayOrigin[1]) / rayDirection[1];
            const t4 = (triangle.maxY - rayOrigin[1]) / rayDirection[1];
            const t5 = (triangle.minZ - rayOrigin[2]) / rayDirection[2];
            const t6 = (triangle.maxZ - rayOrigin[2]) / rayDirection[2];
            
            const tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
            const tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
            
            if (tmax < 0 || tmin > tmax) continue; // No intersection with bounding box
            
            // Detailed triangle intersection
            const intersection = this.rayTriangleIntersect(rayOrigin, rayDirection, triangle);
            if (intersection && intersection.distance < minDistance && intersection.distance > 0.001) {
                minDistance = intersection.distance;
                closestIntersection = intersection;
            }
        }
        
        return closestIntersection;
    }
    
    rayTriangleIntersect(rayOrigin, rayDirection, triangle) {
        const { v0, v1, v2, normal } = triangle;
        
        // Calculate edge vectors
        const edge1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
        const edge2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
        
        // Cross product: rayDirection × edge2
        const h = [
            rayDirection[1] * edge2[2] - rayDirection[2] * edge2[1],
            rayDirection[2] * edge2[0] - rayDirection[0] * edge2[2],
            rayDirection[0] * edge2[1] - rayDirection[1] * edge2[0]
        ];
        
        // Dot product: edge1 · h
        const a = edge1[0] * h[0] + edge1[1] * h[1] + edge1[2] * h[2];
        if (a > -0.00001 && a < 0.00001) return null; // Ray parallel to triangle
        
        const f = 1.0 / a;
        const s = [rayOrigin[0] - v0[0], rayOrigin[1] - v0[1], rayOrigin[2] - v0[2]];
        const u = f * (s[0] * h[0] + s[1] * h[1] + s[2] * h[2]);
        
        if (u < 0.0 || u > 1.0) return null;
        
        // Cross product: s × edge1
        const q = [
            s[1] * edge1[2] - s[2] * edge1[1],
            s[2] * edge1[0] - s[0] * edge1[2],
            s[0] * edge1[1] - s[1] * edge1[0]
        ];
        
        const v = f * (rayDirection[0] * q[0] + rayDirection[1] * q[1] + rayDirection[2] * q[2]);
        if (v < 0.0 || u + v > 1.0) return null;
        
        const t = f * (edge2[0] * q[0] + edge2[1] * q[1] + edge2[2] * q[2]);
        if (t > 0.00001) {
            return {
                distance: t,
                point: [
                    rayOrigin[0] + rayDirection[0] * t,
                    rayOrigin[1] + rayDirection[1] * t,
                    rayOrigin[2] + rayDirection[2] * t
                ],
                normal: normal
            };
        }
        return null;
    }
}

// Sphere intersection function
function raySphereIntersect(rayOrigin, rayDirection, sphereCenter, sphereRadius) {
    const oc = [rayOrigin[0] - sphereCenter[0], rayOrigin[1] - sphereCenter[1], rayOrigin[2] - sphereCenter[2]];
    const a = rayDirection[0] * rayDirection[0] + rayDirection[1] * rayDirection[1] + rayDirection[2] * rayDirection[2];
    const b = 2.0 * (oc[0] * rayDirection[0] + oc[1] * rayDirection[1] + oc[2] * rayDirection[2]);
    const c = (oc[0] * oc[0] + oc[1] * oc[1] + oc[2] * oc[2]) - sphereRadius * sphereRadius;
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) return null;
    
    const t = (-b - Math.sqrt(discriminant)) / (2.0 * a);
    if (t > 0.001) {
        const point = [
            rayOrigin[0] + rayDirection[0] * t,
            rayOrigin[1] + rayDirection[1] * t,
            rayOrigin[2] + rayDirection[2] * t
        ];
        const normal = [
            (point[0] - sphereCenter[0]) / sphereRadius,
            (point[1] - sphereCenter[1]) / sphereRadius,
            (point[2] - sphereCenter[2]) / sphereRadius
        ];
        return {
            distance: t,
            point: point,
            normal: normal
        };
    }
    return null;
}

// Vector utility functions
function normalizeVector(v) {
    const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    if (length > 0) {
        v[0] /= length;
        v[1] /= length;
        v[2] /= length;
    }
    return v;
}

function reflectVector(direction, normal) {
    // r = d - 2 * (d · n) * n
    const dotProduct = direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2];
    return [
        direction[0] - 2 * dotProduct * normal[0],
        direction[1] - 2 * dotProduct * normal[1],
        direction[2] - 2 * dotProduct * normal[2]
    ];
}

function randomDirection() {
    // Generate random direction on unit sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    return [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
    ];
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
        batchSize = 2000 // Larger batch size to reduce message passing overhead
    } = params;
    
    // Set seed for reproducible results
    Math.seedrandom(seed || null);
    
    const reflectionCoefficient = 1.0 - wallAbsorption;
    const arrivals = [];
    let processedRays = 0;
    
    // Process rays in batches
    function processBatch() {
        const endRay = Math.min(processedRays + batchSize, numRays);
        const batchArrivals = [];
        
        for (let i = processedRays; i < endRay; i++) {
            // Reset ray starting position and direction
            const rayOrigin = [0, 0, 0];
            const rayDirection = randomDirection();
            
            let totalDistance = 0;
            let amplitude = 1.0;
            let bounceCount = 0;
            
            // Trace ray through scene
            for (let j = 0; j < maxBounces; j++) {
                // Check intersection with room geometry
                const roomIntersection = roomGeometry ? roomGeometry.raycast(rayOrigin, rayDirection) : null;
                
                // Check intersection with emitter sphere
                const receiverIntersection = raySphereIntersect(
                    rayOrigin, 
                    rayDirection, 
                    [emitterPosition.x, emitterPosition.y, emitterPosition.z], 
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
                    rayOrigin[0] = roomIntersection.point[0];
                    rayOrigin[1] = roomIntersection.point[1];
                    rayOrigin[2] = roomIntersection.point[2];
                    
                    const reflected = reflectVector(rayDirection, roomIntersection.normal);
                    rayDirection[0] = reflected[0];
                    rayDirection[1] = reflected[1];
                    rayDirection[2] = reflected[2];
                    
                    // Move slightly away from surface
                    rayOrigin[0] += rayDirection[0] * 0.001;
                    rayOrigin[1] += rayDirection[1] * 0.001;
                    rayOrigin[2] += rayDirection[2] * 0.001;
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
            console.log('BVH Worker initialized');
            self.postMessage({ type: 'ready' });
            break;
            
        case 'setGeometry':
            try {
                const { roomGeometry: geomData, emitterRadius: radius, emitterPosition: pos } = data;
                
                // Create simplified BVH from geometry data
                if (geomData && geomData.positions && geomData.indices) {
                    roomGeometry = new SimpleBVH(geomData.positions, geomData.indices);
                    console.log(`BVH created with ${roomGeometry.triangles.length} triangles`);
                }
                
                emitterRadius = radius;
                emitterPosition = pos;
                
                self.postMessage({ type: 'geometrySet' });
            } catch (error) {
                console.error('Error setting geometry:', error);
                self.postMessage({ type: 'error', error: error.message });
            }
            break;
            
        case 'simulate':
            try {
                runSimulation(data);
            } catch (error) {
                console.error('Simulation error:', error);
                self.postMessage({ type: 'error', error: error.message });
            }
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
    console.error('Worker error:', error);
    self.postMessage({
        type: 'error',
        error: error.message
    });
};
