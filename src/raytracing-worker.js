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
import seedrandom from 'seedrandom';

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
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        
        console.log('Full BVH built successfully:');
        console.log(`- Triangle count: ${geometry.index ? geometry.index.count / 3 : positions.length / 9}`);
        console.log(`- Position count: ${positions.length / 3}`);
        console.log(`- Geometry bounds:`, geometry.boundingBox);
        console.log(`- BVH bounds:`, geometry.boundsTree.getBoundingBox(new THREE.Box3()));
        
        // Create mesh with proper material
        const material = new THREE.MeshBasicMaterial({ 
            side: THREE.DoubleSide,
            visible: true
        });
        roomMesh = new THREE.Mesh(geometry, material);
        
        // CRITICAL: Initialize all matrix properties
        roomMesh.position.set(0, 0, 0);
        roomMesh.rotation.set(0, 0, 0);
        roomMesh.scale.set(1, 1, 1);
        roomMesh.matrixAutoUpdate = false;
        roomMesh.updateMatrix();
        roomMesh.updateMatrixWorld(true);
        roomMesh.visible = true;
        
        // Set layers (this was the missing property!)
        roomMesh.layers.enableAll();
        
        console.log('Room mesh created:');
        console.log(`- Position:`, roomMesh.position);
        console.log(`- Visible:`, roomMesh.visible);
        console.log(`- Has layers:`, !!roomMesh.layers);
        
        return roomMesh;
    } catch (error) {
        console.error('Error creating room mesh:', error);
        throw error;
    }
}


function createEmitterMesh(radius, position) {
    try {
        const geometry = new THREE.SphereGeometry(radius, 16, 16);
        geometry.computeBoundsTree();
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        
        const material = new THREE.MeshBasicMaterial({ visible: true });
        emitterMesh = new THREE.Mesh(geometry, material);
        
        // CRITICAL: Initialize all matrix properties
        emitterMesh.position.set(position.x, position.y, position.z);
        emitterMesh.rotation.set(0, 0, 0);
        emitterMesh.scale.set(1, 1, 1);
        emitterMesh.matrixAutoUpdate = false;
        emitterMesh.updateMatrix();
        emitterMesh.updateMatrixWorld(true);
        emitterMesh.visible = true;
        
        // Set layers
        emitterMesh.layers.enableAll();
        
        console.log(`Worker: Emitter sphere created with ${geometry.attributes.position.count} vertices`);
        console.log(`Worker: Emitter BVH bounds:`, geometry.boundsTree.getBoundingBox(new THREE.Box3()));
        console.log(`Worker: Emitter has layers:`, !!emitterMesh.layers);
        
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
        maxBounces,
        wallAbsorption,
        useFreqDependent = true,
        absorptionCoeffs = {},
        seed,
        speedOfSound,
        batchSize = 5000
    } = params;

    const restoreRandom = Math.random;
    if (seed) {
        seedrandom(seed, { global: true });
    }

    // remove unused broadband reflectionCoefficient
    // const reflectionCoefficient = 1.0 - wallAbsorption;
    
    // Setup for multi-band simulation
    const freqBands = useFreqDependent ? Object.keys(absorptionCoeffs).map(Number).sort((a, b) => a - b) : null;
    const arrivalsByBand = useFreqDependent ? {} : null;
    const arrivals = [];
    
    if (useFreqDependent) {
        freqBands.forEach(freq => {
            arrivalsByBand[freq] = [];
        });
    }

    let processedRays = 0;
    const startTime = performance.now();

    const origin = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const ray = new THREE.Raycaster();
    ray.firstHitOnly = true;

    const roomIntersects = [];
    const receiverIntersects = [];

    function processBatch() {
        const batchStartIndex = processedRays;
        const endRay = Math.min(processedRays + batchSize, numRays);
        const batchStart = performance.now();

        for (let i = processedRays; i < endRay; i++) {
            origin.set(0, 0, 0);
            direction.set(
                Math.random() * 2 - 1,
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            ).normalize();

            let totalDistance = 0;
            let bounceCount = 0;

            // Track amplitude per frequency band
            const amplitudes = useFreqDependent 
                ? Object.fromEntries(freqBands.map(f => [f, 1.0]))
                : { broadband: 1.0 };

            for (let b = 0; b < maxBounces; b++) {
                ray.set(origin, direction);

                roomIntersects.length = 0;
                receiverIntersects.length = 0;

                ray.intersectObject(emitterMesh, false, receiverIntersects);
                ray.intersectObject(roomMesh, false, roomIntersects);

                const receiverHit = receiverIntersects.length > 0;
                const roomHit = roomIntersects.length > 0;

                if (
                    receiverHit &&
                    (
                        !roomHit ||
                        (roomIntersects[0] && receiverIntersects[0] && receiverIntersects[0].distance < roomIntersects[0].distance)
                    )
                ) {
                    if (receiverIntersects[0] && receiverIntersects[0].distance > 0.001) {
                        totalDistance += receiverIntersects[0].distance;
                        const arrivalTime = totalDistance / speedOfSound;

                        if (useFreqDependent) {
                            freqBands.forEach(freq => {
                                let finalAmp = amplitudes[freq];
                                arrivalsByBand[freq].push({ time: arrivalTime, amplitude: finalAmp });
                            });
                        } else {
                            let finalAmp = amplitudes.broadband;
                            arrivals.push({ time: arrivalTime, amplitude: finalAmp });
                        }
                        break;
                    }
                }

                if (roomHit && roomIntersects[0]) {
                    const intersection = roomIntersects[0];
                    bounceCount++;
                    totalDistance += intersection.distance;

                    // Apply frequency-dependent absorption (no wallAbsorption fallback)
                    if (useFreqDependent) {
                        freqBands.forEach(freq => {
                            const absorption = absorptionCoeffs[freq] ?? 0;
                            amplitudes[freq] *= (1.0 - absorption);
                        });
                    } else {
                        amplitudes.broadband *= (1.0 - (wallAbsorption ?? 0));
                    }

                    origin.copy(intersection.point);
                    direction.reflect(intersection.face.normal);
                    origin.addScaledVector(direction, 0.001);
                } else {
                    break;
                }
            }
        }

        const processedThisBatch = endRay - batchStartIndex;
        processedRays = endRay;
        const progress = processedRays / numRays;
        const batchTime = performance.now() - batchStart;
        const raysPerSecond = processedThisBatch > 0 && batchTime > 0 ? Math.round(processedThisBatch / (batchTime / 1000)) : 0;

        // report total arrivals (sum across bands) for progress
        const currentArrivals = useFreqDependent
            ? Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0)
            : arrivals.length;

        self.postMessage({
            type: 'progress',
            progress: progress,
            raysPerSecond: raysPerSecond,
            currentArrivals: currentArrivals
        });

        if (processedRays < numRays) {
            setTimeout(processBatch, 0);
        } else {
            Math.random = restoreRandom;

            const elapsedTime = performance.now() - startTime;
            const avgRaysPerSecond = elapsedTime > 0 ? Math.round(numRays / (elapsedTime / 1000)) : 0;

            if (useFreqDependent) {
                const totalArrivals = Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0);
                self.postMessage({
                    type: 'complete',
                    arrivalsByBand: arrivalsByBand,
                    freqBands: freqBands,
                    totalArrivals: totalArrivals,
                    avgRaysPerSecond: avgRaysPerSecond
                });
            } else {
                self.postMessage({
                    type: 'complete',
                    arrivals: arrivals,
                    totalArrivals: arrivals.length,
                    avgRaysPerSecond: avgRaysPerSecond
                });
            }
        }
    }

    processBatch();
};

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
