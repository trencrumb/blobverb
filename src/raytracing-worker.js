// Modern ES Module Web Worker for acoustic ray tracing with full BVH support
// This uses the locally installed three-mesh-bvh for maximum performance

// Web Workers don't inherit importmap, so we use direct paths
import * as THREE from 'three';
import { 
    computeBoundsTree, 
    disposeBoundsTree, 
    acceleratedRaycast, 
    MeshBVH 
} from 'three-mesh-bvh/build/index.module.js';

// Add BVH methods to geometry prototypes
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// Worker-local variables for reuse (avoid garbage collection)
const _rayOrigin = new THREE.Vector3();
const _rayDirection = new THREE.Vector3();
const _tempVec = new THREE.Vector3();
const _intersectionPoint = new THREE.Vector3();

let raycaster;
let roomMesh;
let emitterMesh;
let roomGeometry = null;
let emitterRadius = 0.5;
let emitterPosition = { x: 0, y: 0, z: 0 };

// Initialize the worker with full Three.js and BVH support
function initWorker() {
    try {
        raycaster = new THREE.Raycaster();
        raycaster.firstHitOnly = true;
        
        console.log('ES Module Worker initialized with full BVH support');
        console.log('Three.js version:', THREE.REVISION);
        console.log('BVH methods available:', {
            computeBoundsTree: typeof computeBoundsTree,
            acceleratedRaycast: typeof acceleratedRaycast
        });
        
        return true;
    } catch (error) {
        console.error('Worker initialization failed:', error);
        return false;
    }
}

// Update the createRoomMesh function around line 45

function createRoomMesh(geometryData) {
    try {
        // Create geometry from transferred data
        const geometry = new THREE.BufferGeometry();
        
        const positions = new Float32Array(geometryData.positions);
        const normals = new Float32Array(geometryData.normals);
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
        
        if (geometryData.indices) {
            const indices = new Uint32Array(geometryData.indices);
            geometry.setIndex(new THREE.BufferAttribute(indices, 1));
        }
        
        // Build BVH for ultra-fast raycasting
        geometry.computeBoundsTree();
        
        console.log('Full BVH built successfully:');
        console.log(`- Triangle count: ${geometry.index ? geometry.index.count / 3 : positions.length / 9}`);
        console.log(`- Position count: ${positions.length / 3}`);
        console.log(`- Geometry bounds:`, geometry.boundingBox);
        console.log(`- BVH bounds:`, geometry.boundsTree.getBoundingBox(new THREE.Box3()));
        
        // Create mesh
        const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
        roomMesh = new THREE.Mesh(geometry, material);
        
        // Ensure the mesh is visible and positioned correctly
        roomMesh.visible = true;
        roomMesh.position.set(0, 0, 0);
        roomMesh.updateMatrixWorld(true);
        
        console.log('Room mesh created:');
        console.log(`- Position:`, roomMesh.position);
        console.log(`- Visible:`, roomMesh.visible);
        console.log(`- Matrix world updated:`, roomMesh.matrixWorldNeedsUpdate);
        
        return roomMesh;
    } catch (error) {
        console.error('Error creating room mesh:', error);
        throw error;
    }
}

// Create emitter mesh with BVH acceleration
function createEmitterMesh(radius, position) {
    try {
        const geometry = new THREE.SphereGeometry(radius, 16, 16);
        // Even the sphere gets BVH acceleration
        geometry.computeBoundsTree();
        
        const material = new THREE.MeshBasicMaterial();
        emitterMesh = new THREE.Mesh(geometry, material);
        emitterMesh.position.set(position.x, position.y, position.z);
        
        console.log(`Worker: Emitter sphere created with ${geometry.attributes.position.count} vertices`);
        console.log(`Worker: Emitter BVH bounds:`, geometry.boundsTree.getBoundingBox(new THREE.Box3()));
        console.log(`Worker: Emitter world bounds after positioning:`, emitterMesh.geometry.boundingBox);
        
        return emitterMesh;
    } catch (error) {
        console.error('Error creating emitter mesh:', error);
        throw error;
    }
}

// High-performance simulation function using full Three.js BVH
function runSimulation(params) {
    const {
        numRays,
        maxBounces = 200,
        wallAbsorption,
        diffuseThreshold,
        randomizePhase,
        seed,
        speedOfSound = 343,
        batchSize = 2000 // Large batches for worker efficiency
    } = params;
    
    // Set seed using Math.random with a simple seeding function
    if (seed) {
        // Simple deterministic seeding for reproducible results
        let seedValue = 0;
        for (let i = 0; i < seed.length; i++) {
            seedValue = (seedValue * 31 + seed.charCodeAt(i)) % 2147483647;
        }
        
        // Simple linear congruential generator
        let currentSeed = seedValue;
        Math.random = function() {
            currentSeed = (currentSeed * 16807) % 2147483647;
            return (currentSeed - 1) / 2147483646;
        };
    }
    
    const reflectionCoefficient = 1.0 - wallAbsorption;
    const arrivals = [];
    let processedRays = 0;
    
    console.log(`Starting high-performance BVH simulation: ${numRays} rays`);
    const startTime = performance.now();
    
    // Process rays in batches
    function processBatch() {
        const endRay = Math.min(processedRays + batchSize, numRays);
        const batchStartTime = performance.now();
        
        for (let i = processedRays; i < endRay; i++) {
            // Reset ray starting position and direction using Three.js vectors
            _rayOrigin.set(0, 0, 0);
            _rayDirection.randomDirection();

            /*
            // Debug: log first few rays
            if (i < 3) {
                console.log(`Ray ${i}: Origin (${_rayOrigin.x}, ${_rayOrigin.y}, ${_rayOrigin.z}), Direction (${_rayDirection.x.toFixed(3)}, ${_rayDirection.y.toFixed(3)}, ${_rayDirection.z.toFixed(3)})`);
            }
            */

            let totalDistance = 0;
            let amplitude = 1.0;
            let bounceCount = 0;
            
            // Trace ray through scene using full BVH acceleration
            for (let j = 0; j < maxBounces; j++) {
                raycaster.set(_rayOrigin, _rayDirection);

                // Use accelerated raycast with BVH - this is where the speed comes from!
                const roomIntersects = raycaster.intersectObject(roomMesh);
                const receiverIntersects = raycaster.intersectObject(emitterMesh);
                /*
                // Debug: log intersection results for first few rays
                if (i < 3) {
                    console.log(`Ray ${i}, Bounce ${j}: Room hits: ${roomIntersects.length}, Receiver hits: ${receiverIntersects.length}`);
                    if (roomIntersects.length > 0) {
                        console.log(`  Room hit distance: ${roomIntersects[0].distance}, point:`, roomIntersects[0].point);
                    }
                    if (receiverIntersects.length > 0) {
                        console.log(`  Receiver hit distance: ${receiverIntersects[0].distance}, point:`, receiverIntersects[0].point);
                    }

                    // Debug the room mesh properties
                    if (j === 0) {
                        console.log(`Ray ${i}: Room mesh has ${roomMesh.geometry.attributes.position.count} vertices`);
                        console.log(`Ray ${i}: Room mesh BVH bounds:`, roomMesh.geometry.boundsTree?.getBoundingBox(new THREE.Box3()));
                        console.log(`Ray ${i}: Raycaster ray:`, raycaster.ray);
                    }
                }
                */

                // Check if ray hits receiver first
                if (receiverIntersects.length > 0 && 
                    (roomIntersects.length === 0 || receiverIntersects[0].distance < roomIntersects[0].distance)) {
                    /*
                    // Debug: log receiver hits for first few rays
                    if (i < 5) {
                        console.log(`Ray ${i}: Receiver hit at distance ${receiverIntersects[0].distance}`);
                    }
                    */

                    // Only count if not too close (avoid direct hits)
                    if (receiverIntersects[0].distance > 0.001) {
                        totalDistance += receiverIntersects[0].distance;

                        let finalAmplitude = amplitude;
                        if (randomizePhase && bounceCount > diffuseThreshold) {
                            finalAmplitude *= (Math.random() < 0.5 ? 1 : -1);
                        }

                        arrivals.push({
                            time: totalDistance / speedOfSound,
                            amplitude: finalAmplitude
                        });
                        break;
                    } else if (i < 5) {
                        console.log(`Ray ${i}: Receiver hit too close (${receiverIntersects[0].distance}), skipping`);
                    }
                }

                // Handle room collision with BVH acceleration
                if (roomIntersects.length > 0) {
                    const intersection = roomIntersects[0];
                    bounceCount++;
                    totalDistance += intersection.distance;
                    amplitude *= reflectionCoefficient;

                    // Update ray position and direction using Three.js methods
                    _rayOrigin.copy(intersection.point);
                    _rayDirection.reflect(intersection.face.normal);

                    // Move slightly away from surface
                    _tempVec.copy(_rayDirection).multiplyScalar(0.001);
                    _rayOrigin.add(_tempVec);

                    if (i < 3) {
                        console.log(`Ray ${i}: Hit room at distance ${intersection.distance}, bouncing to:`, _rayOrigin);
                    }
                } else {
                    // Ray escaped without hitting anything
                    if (i < 3) {
                        console.log(`Ray ${i}: No room intersections found, ray escaped`);
                        console.log(`Ray ${i}: Ray origin:`, _rayOrigin, "Direction:", _rayDirection);
                        console.log(`Ray ${i}: Room mesh exists:`, !!roomMesh);
                        console.log(`Ray ${i}: Room mesh visible:`, roomMesh?.visible);
                        console.log(`Ray ${i}: Room geometry exists:`, !!roomMesh?.geometry);
                        console.log(`Ray ${i}: Room BVH exists:`, !!roomMesh?.geometry?.boundsTree);
                    }
                    break;
                }
            }
        }
        
        processedRays = endRay;
        const batchTime = performance.now() - batchStartTime;
        const raysPerSecond = Math.round((endRay - (endRay - batchSize)) / (batchTime / 1000));
        
        // Send progress update with performance metrics
        self.postMessage({
            type: 'progress',
            progress: processedRays / numRays,
            processedRays: processedRays,
            totalRays: numRays,
            raysPerSecond: raysPerSecond,
            currentArrivals: arrivals.length
        });
        
        // Continue processing or finish
        if (processedRays < numRays) {
            // Schedule next batch (non-blocking)
            setTimeout(processBatch, 0);
        } else {
            // Send final results
            const totalTime = performance.now() - startTime;
            const avgRaysPerSecond = Math.round(numRays / (totalTime / 1000));
            
            console.log(`BVH Worker simulation complete: ${arrivals.length} arrivals in ${totalTime.toFixed(0)}ms`);
            console.log(`Average performance: ${avgRaysPerSecond} rays/second`);
            
            self.postMessage({
                type: 'complete',
                arrivals: arrivals,
                totalArrivals: arrivals.length,
                totalTime: totalTime,
                avgRaysPerSecond: avgRaysPerSecond
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
            const success = initWorker();
            if (success) {
                self.postMessage({ type: 'ready' });
            } else {
                self.postMessage({ type: 'error', error: 'Failed to initialize BVH worker' });
            }
            break;
            
        case 'setGeometry':
            try {
                const { roomGeometry: geomData, emitterRadius: radius, emitterPosition: pos } = data;
                
                // Create full Three.js mesh with BVH
                if (geomData && geomData.positions && geomData.indices) {
                    createRoomMesh(geomData);
                }
                
                createEmitterMesh(radius, pos);
                emitterRadius = radius;
                emitterPosition = pos;
                
                console.log(`Worker: Emitter created at position:`, pos, `with radius:`, radius);
                console.log(`Worker: Emitter mesh position:`, emitterMesh.position);
                
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
            if (roomMesh && roomMesh.geometry.boundsTree) {
                roomMesh.geometry.disposeBoundsTree();
            }
            if (emitterMesh && emitterMesh.geometry.boundsTree) {
                emitterMesh.geometry.disposeBoundsTree();
            }
            self.close();
            break;
            
        default:
            console.warn('Unknown message type:', type);
    }
};

// Handle errors
self.onerror = function(error) {
    console.error('ES Module Worker error:', error);
    self.postMessage({
        type: 'error',
        error: error.message
    });
};
