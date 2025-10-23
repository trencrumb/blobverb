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
const _emitterPositionVec = new THREE.Vector3();
const _specularDir = new THREE.Vector3();

function samplePoisson(lambda) {
    if (lambda <= 0) return 0;
    const L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}

function randomHemisphereDirection(normal) {
    const u1 = Math.random();
    const u2 = Math.random();

    const r = Math.sqrt(u1);
    const phi = 2 * Math.PI * u2;

    const tangent = new THREE.Vector3();
    const bitangent = new THREE.Vector3();

    if (Math.abs(normal.x) > Math.abs(normal.z)) {
        tangent.set(-normal.y, normal.x, 0).normalize();
    } else {
        tangent.set(0, -normal.z, normal.y).normalize();
    }

    bitangent.crossVectors(normal, tangent);

    const direction = new THREE.Vector3()
        .copy(tangent).multiplyScalar(r * Math.cos(phi))
        .addScaledVector(bitangent, r * Math.sin(phi))
        .addScaledVector(normal, Math.sqrt(Math.max(0, 1 - u1)))
        .normalize();

    return direction;
}

function synthesizeRadiosityPulses(histogram, binSize, poissonDensity, minEnergy) {
    const pulses = [];
    for (let i = 0; i < histogram.length; i++) {
        const energy = histogram[i];
        if (energy <= minEnergy) continue;

        const lambda = Math.max(energy * poissonDensity, 0);
        let pulseCount = samplePoisson(lambda);
        if (pulseCount <= 0) pulseCount = 1;

        const energyPerPulse = energy / pulseCount;
        const amplitude = Math.sqrt(energyPerPulse);
        const baseTime = i * binSize;

        for (let j = 0; j < pulseCount; j++) {
            const timeJitter = Math.random() * binSize;
            const sign = Math.random() < 0.5 ? -1 : 1;
            pulses.push({
                time: baseTime + timeJitter,
                amplitude: amplitude * sign
            });
        }
    }
    return pulses;
}

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
        _emitterPositionVec.set(position.x, position.y, position.z);

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
        batchSize = 5000,
        rrConfig: rrOverrides = {}
    } = params;

    const rrConfig = {
        enabled: true,
        scatteringCoeff: 0.35,
        histogramResolution: 0.0025,
        maxTime: 3.5,
        hybridBounceThreshold: 3,
        poissonDensity: 12,
        minEnergyThreshold: 1e-8,
        diffuseGain: 1.0,
        ...rrOverrides
    };

    rrConfig.histogramResolution = Math.max(1e-4, rrConfig.histogramResolution);
    rrConfig.maxTime = Math.max(rrConfig.histogramResolution, rrConfig.maxTime);
    rrConfig.hybridBounceThreshold = Math.max(0, Math.floor(rrConfig.hybridBounceThreshold));
    rrConfig.poissonDensity = Math.max(0.1, rrConfig.poissonDensity);
    rrConfig.minEnergyThreshold = Math.max(1e-10, rrConfig.minEnergyThreshold);

    const useRayRadiosity = !!rrConfig.enabled;
    const scatterWeight = THREE.MathUtils.clamp(rrConfig.scatteringCoeff ?? 0, 0, 1);
    const diffuseGain = rrConfig.diffuseGain ?? 1.0;

    const restoreRandom = Math.random;
    if (seed) {
        seedrandom(seed, { global: true });
    }
    
    const freqBands = useFreqDependent
        ? Object.keys(absorptionCoeffs).map(Number).sort((a, b) => a - b)
        : null;

    const arrivalsByBand = useFreqDependent ? {} : null;
    const arrivals = [];

    if (useFreqDependent) {
        freqBands.forEach(freq => {
            arrivalsByBand[freq] = [];
        });
    }

    const histogramBins = useRayRadiosity ? Math.ceil(rrConfig.maxTime / rrConfig.histogramResolution) : 0;
    const rrHistograms = useRayRadiosity
        ? (useFreqDependent
            ? Object.fromEntries(freqBands.map(freq => [freq, new Float32Array(histogramBins)]))
            : new Float32Array(histogramBins))
        : null;

    let rrContributionCount = 0;
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

            const amplitudes = useFreqDependent
                ? Object.fromEntries(freqBands.map(f => [f, 1.0]))
                : { broadband: 1.0 };

            for (let bounce = 0; bounce < maxBounces; bounce++) {
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
                                const finalAmp = amplitudes[freq];
                                arrivalsByBand[freq].push({ time: arrivalTime, amplitude: finalAmp });
                            });
                        } else {
                            const finalAmp = amplitudes.broadband;
                            arrivals.push({ time: arrivalTime, amplitude: finalAmp });
                        }
                        break;
                    }
                }

                if (!roomHit || !roomIntersects[0]) {
                    break;
                }

                const intersection = roomIntersects[0];
                totalDistance += intersection.distance;

                if (useFreqDependent) {
                    freqBands.forEach(freq => {
                        const absorption = absorptionCoeffs[freq] ?? 0;
                        amplitudes[freq] *= (1.0 - absorption);
                    });
                } else {
                    amplitudes.broadband *= (1.0 - (wallAbsorption ?? 0));
                }

                if (useRayRadiosity && bounce >= rrConfig.hybridBounceThreshold && histogramBins > 0) {
                    _tempVec.copy(intersection.point).sub(_emitterPositionVec);
                    const distanceToReceiver = Math.max(_tempVec.length(), Math.max(emitterRadius * 0.5, 0.01));
                    const timeToReceiver = (totalDistance + distanceToReceiver) / speedOfSound;

                    if (timeToReceiver <= rrConfig.maxTime) {
                        const invDistanceTerm = 1.0 / Math.max(4 * Math.PI * distanceToReceiver * distanceToReceiver, 1e-6);
                        const binIndex = Math.floor(timeToReceiver / rrConfig.histogramResolution);

                        if (binIndex < histogramBins) {
                            if (useFreqDependent) {
                                for (let f = 0; f < freqBands.length; f++) {
                                    const freq = freqBands[f];
                                    const amp = amplitudes[freq];
                                    if (amp <= 0) continue;
                                    const diffuseEnergy = amp * amp * diffuseGain * invDistanceTerm * Math.max(scatterWeight, 1e-3);
                                    if (diffuseEnergy > rrConfig.minEnergyThreshold) {
                                        rrHistograms[freq][binIndex] += diffuseEnergy;
                                        rrContributionCount++;
                                    }
                                }
                            } else {
                                const amp = amplitudes.broadband;
                                if (amp > 0) {
                                    const diffuseEnergy = amp * amp * diffuseGain * invDistanceTerm * Math.max(scatterWeight, 1e-3);
                                    if (diffuseEnergy > rrConfig.minEnergyThreshold) {
                                        rrHistograms[binIndex] += diffuseEnergy;
                                        rrContributionCount++;
                                    }
                                }
                            }
                        }
                    }
                }

                const faceNormal = intersection.face?.normal ?? _tempVec.set(0, 1, 0);
                const normal = _intersectionPoint.copy(faceNormal).normalize();
                const specularDir = _specularDir.copy(direction).reflect(normal);
                const scatteredDir = scatterWeight > 0 ? randomHemisphereDirection(normal) : specularDir;

                direction.copy(specularDir)
                    .multiplyScalar(1 - scatterWeight)
                    .addScaledVector(scatteredDir, scatterWeight)
                    .normalize();

                origin.copy(intersection.point);
                origin.addScaledVector(direction, 0.001);
            }
        }

        const processedThisBatch = endRay - batchStartIndex;
        processedRays = endRay;
        const progress = processedRays / numRays;
        const batchTime = performance.now() - batchStart;
        const raysPerSecond = processedThisBatch > 0 && batchTime > 0 ? Math.round(processedThisBatch / (batchTime / 1000)) : 0;

        const earlyArrivals = useFreqDependent
            ? Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0)
            : arrivals.length;

        self.postMessage({
            type: 'progress',
            progress: progress,
            raysPerSecond: raysPerSecond,
            currentArrivals: earlyArrivals + (useRayRadiosity ? rrContributionCount : 0)
        });

        if (processedRays < numRays) {
            setTimeout(processBatch, 0);
        } else {
            Math.random = restoreRandom;

            let lateArrivalCount = 0;

            if (useRayRadiosity && histogramBins > 0) {
                if (useFreqDependent) {
                    for (let f = 0; f < freqBands.length; f++) {
                        const freq = freqBands[f];
                        const pulses = synthesizeRadiosityPulses(
                            rrHistograms[freq],
                            rrConfig.histogramResolution,
                            rrConfig.poissonDensity,
                            rrConfig.minEnergyThreshold
                        );
                        if (pulses.length > 0) {
                            arrivalsByBand[freq].push(...pulses);
                            lateArrivalCount += pulses.length;
                        }
                    }
                    for (let f = 0; f < freqBands.length; f++) {
                        arrivalsByBand[freqBands[f]].sort((a, b) => a.time - b.time);
                    }
                } else {
                    const pulses = synthesizeRadiosityPulses(
                        rrHistograms,
                        rrConfig.histogramResolution,
                        rrConfig.poissonDensity,
                        rrConfig.minEnergyThreshold
                    );
                    if (pulses.length > 0) {
                        arrivals.push(...pulses);
                        lateArrivalCount += pulses.length;
                    }
                    arrivals.sort((a, b) => a.time - b.time);
                }
            }

            const elapsedTime = performance.now() - startTime;
            const avgRaysPerSecond = elapsedTime > 0 ? Math.round(numRays / (elapsedTime / 1000)) : 0;

            if (useFreqDependent) {
                const totalArrivals = Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0);
                self.postMessage({
                    type: 'complete',
                    arrivalsByBand,
                    freqBands,
                    totalArrivals,
                    avgRaysPerSecond,
                    rayRadiosity: {
                        enabled: useRayRadiosity,
                        lateArrivalCount,
                        histogramBins,
                        rrConfig
                    }
                });
            } else {
                const totalArrivals = arrivals.length;
                self.postMessage({
                    type: 'complete',
                    arrivals,
                    totalArrivals,
                    avgRaysPerSecond,
                    rayRadiosity: {
                        enabled: useRayRadiosity,
                        lateArrivalCount,
                        histogramBins,
                        rrConfig
                    }
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
