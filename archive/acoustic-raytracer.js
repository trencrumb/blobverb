import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const SPEED_OF_SOUND = 343; // meters per second
const FREQUENCY_BANDS = ['sub', 'low', 'low_mid', 'mid', 'high_mid', 'high', 'ultra'];

/**
 * Creates a LineMaterial for ray visualization based on bounce count and ray type
 * @param {boolean} isDirect - Whether this is the direct path
 * @param {number} bounceCount - Number of bounces
 * @param {boolean} isRayRadiosity - Whether this uses ray-radiosity method
 * @returns {LineMaterial} Material for the ray
 */
function createRayMaterial(isDirect = false, bounceCount = 0, isRayRadiosity = false) {
    let color, linewidth;
    
    if (isDirect) {
        // Direct sound: RED and thick
        color = new THREE.Color(0xff0000); // Red
        linewidth = 4; // Line2 uses world units
        console.log('Creating RED direct ray');
    } else if (!isRayRadiosity) {
        // Early reflections (traditional): DARK BLUE and medium thickness
        color = new THREE.Color(0x000080); // Dark blue
        linewidth = 3;
        console.log(`Creating DARK BLUE traditional reflection (${bounceCount} bounces)`);
    } else {
        // Late reflections (ray-radiosity): LIGHT BLUE and thin
        color = new THREE.Color(0x87ceeb); // Light blue
        linewidth = .5;
        console.log(`Creating LIGHT BLUE ray-radiosity reflection (${bounceCount}+ bounces)`);
    }
    
    return new LineMaterial({ 
        color: color,
        linewidth: linewidth,
        opacity: 0.8,
        transparent: true,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight), // Important for Line2
        vertexColors: false,
        dashed: false
    });
}

/**
 * Creates a LineGeometry from a path array with timing information
 * @param {Array<THREE.Vector3>} path - Array of points defining the ray path
 * @param {number} arrivalTime - Time for ray to reach destination
 * @param {boolean} isDirect - Whether this is the direct path
 * @param {number} bounceCount - Number of bounces
 * @param {boolean} isRayRadiosity - Whether this uses ray-radiosity method
 * @returns {LineGeometry} Line geometry for the ray path
 */
function createRayGeometry(path, arrivalTime, isDirect = false, bounceCount = 0, isRayRadiosity = false) {
    if (path.length < 2) return null;

    const geometry = new LineGeometry();
    const positions = [];
    
    // Convert path to flat array of coordinates
    for (let i = 0; i < path.length; i++) {
        const point = path[i];
        positions.push(point.x, point.y, point.z);
    }

    geometry.setPositions(positions);

    // Store metadata
    geometry.userData = {
        arrivalTime: arrivalTime,
        isDirect: isDirect,
        bounceCount: bounceCount,
        isRayRadiosity: isRayRadiosity,
        pathLength: path.length
    };

    return geometry;
}
/**
 * Check if a ray hits a spherical microphone
 * @param {THREE.Vector3} rayOrigin - Ray starting point
 * @param {THREE.Vector3} rayDirection - Ray direction (normalized)
 * @param {THREE.Vector3} micPos - Microphone position
 * @param {number} micRadius - Microphone radius
 * @returns {Object|null} Intersection result with distance and point, or null
 */
function rayIntersectSphere(rayOrigin, rayDirection, micPos, micRadius) {
    // Vector from ray origin to sphere center
    const oc = rayOrigin.clone().sub(micPos);
    
    // Quadratic equation coefficients for ray-sphere intersection
    const a = rayDirection.dot(rayDirection);
    const b = 2.0 * oc.dot(rayDirection);
    const c = oc.dot(oc) - micRadius * micRadius;
    
    // Discriminant
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
        return null; // No intersection
    }
    
    // Calculate the closest intersection point
    const sqrt_discriminant = Math.sqrt(discriminant);
    const t1 = (-b - sqrt_discriminant) / (2 * a);
    const t2 = (-b + sqrt_discriminant) / (2 * a);
    
    // We want the closest positive intersection
    let t = t1;
    if (t1 < 0) {
        t = t2;
    }
    if (t < 0) {
        return null; // Sphere is behind the ray
    }
    
    // Calculate intersection point
    const intersectionPoint = rayOrigin.clone().add(rayDirection.clone().multiplyScalar(t));
    
    return {
        distance: t,
        point: intersectionPoint
    };
}

function generateLambertianReflection(normal) {
    const u1 = Math.random();
    const u2 = Math.random();
    
    const theta = Math.acos(Math.sqrt(u1)); // Elevation angle
    const phi = 2 * Math.PI * u2;           // Azimuth angle
    
    // Convert to Cartesian coordinates in local space
    const x = Math.sin(theta) * Math.cos(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(theta);
    
    // Create local coordinate system with normal as Z-axis
    const tangent1 = new THREE.Vector3();
    const tangent2 = new THREE.Vector3();
    
    if (Math.abs(normal.x) < 0.9) {
        tangent1.set(1, 0, 0).cross(normal).normalize();
    } else {
        tangent1.set(0, 1, 0).cross(normal).normalize();
    }
    tangent2.crossVectors(normal, tangent1);
    
    // Transform to world coordinates
    return tangent1.clone().multiplyScalar(x)
           .add(tangent2.clone().multiplyScalar(y))
           .add(normal.clone().multiplyScalar(z))
           .normalize();
}

function convertHistogramsToPaths(energyHistograms, binSize, fakePhase) {
    const pathsByBand = {
        sub: [],
        low: [],
        low_mid: [],
        mid: [],
        high_mid: [],
        high: [],
        ultra: []
    };
    
    FREQUENCY_BANDS.forEach(band => {
        const histogram = energyHistograms[band];
        
        for (let bin = 0; bin < histogram.length; bin++) {
            const energy = histogram[bin];
            if (energy > 1e-8) {
                const time = bin * binSize;
                
                // Add some randomness within the bin (Poisson-like distribution)
                const jitter = (Math.random() - 0.5) * binSize;
                const finalTime = time + jitter;
                
                // Apply phase randomization for diffuse field
                const phase = fakePhase ? (Math.random() < 0.5 ? 1 : -1) : 1;
                
                pathsByBand[band].push({
                    time: finalTime,
                    amplitude: Math.sqrt(energy) * phase, // Convert energy to amplitude
                    bounceCount: Math.floor(finalTime * 10), // Estimate bounces from time
                    path: [] // Empty path for histogram-based data
                });
            }
        }
        
        console.log(`${band} band: ${pathsByBand[band].length} reflections from energy histogram`);
    });
    
    return pathsByBand;
}

/**
 * Traces acoustic rays with hybrid Ray-Radiosity method
 * @param {THREE.Vector3} micPos - Microphone position
 * @param {number} micRadius - Microphone capture radius
 * @param {THREE.Vector3} sourcePos - Sound source position
 * @param {THREE.Mesh} roomMesh - Room geometry mesh
 * @param {number} numRays - Number of rays to trace
 * @param {number} maxBounces - Maximum bounces per ray
 * @param {Object} absorptionCoefficients - Material absorption coefficients per band
 * @param {boolean} fakePhase - Whether to apply random phase shifts
 * @param {Function} progressCallback - Called with (progress, successfulPaths) during execution
 * @param {Function} stopCheck - Function that returns true if tracing should stop
 * @param {Function} rayVisualizationCallback - Called with (rayGeometry, rayMaterial) for each successful ray
 * @param {number} maxVisualRays - Maximum number of rays to visualize
 * @param {Object} rayRadiosityParams - RR parameters: {enabled, scatteringCoeff, histogramResolution, maxTime, hybridBounceThreshold}
 * @returns {Promise<{successfulPathsByBand: Object, progress: number, rayGeometries: Array}>}
 */
export async function traceAcousticRays(micPos, micRadius, sourcePos, roomMesh, numRays, maxBounces, absorptionCoefficients, fakePhase = true, progressCallback = null, stopCheck = null, rayVisualizationCallback = null, maxVisualRays = 500, rayRadiosityParams = null) {
    
    // Ray-Radiosity parameters (with defaults)
    const rrParams = {
        enabled: false,
        scatteringCoeff: 0.1,
        histogramResolution: 0.001, // 1ms bins
        maxTime: 5.0,
        hybridBounceThreshold: 3, // NEW: Switch to RR after this many bounces
        ...rayRadiosityParams
    };
    
    // Initialize data structures based on method
    let successfulPathsByBand, energyHistograms;
    
    if (rrParams.enabled) {
        // Ray-Radiosity: Use energy histograms for all 7 bands
        const numBins = Math.ceil(rrParams.maxTime / rrParams.histogramResolution);
        energyHistograms = {
            sub: new Float32Array(numBins).fill(0),
            low: new Float32Array(numBins).fill(0),
            low_mid: new Float32Array(numBins).fill(0),
            mid: new Float32Array(numBins).fill(0),
            high_mid: new Float32Array(numBins).fill(0),
            high: new Float32Array(numBins).fill(0),
            ultra: new Float32Array(numBins).fill(0)
        };
        console.log(`Ray-Radiosity enabled: ${numBins} time bins, ${rrParams.histogramResolution}s resolution, 7 frequency bands`);
    } else {
        // Traditional: Use path arrays for all 7 bands
        successfulPathsByBand = {
            sub: [],
            low: [],
            low_mid: [],
            mid: [],
            high_mid: [],
            high: [],
            ultra: []
        };
        console.log('Traditional ray tracing enabled with 7 frequency bands');
    }
    
    const rayGeometries = [];
    const localRaycaster = new THREE.Raycaster();
    let progress = 0;
    let visualizedRayCount = 0;
    
    roomMesh.geometry.computeBoundsTree();
    roomMesh.updateMatrixWorld();

    // 1. Check for direct path (same for both methods)
    const directDist = sourcePos.distanceTo(micPos);
    localRaycaster.set(sourcePos, micPos.clone().sub(sourcePos).normalize());
    const directHit = localRaycaster.intersectObject(roomMesh);

    if (!directHit.length || directHit[0].distance > directDist) {
        const directTime = directDist / SPEED_OF_SOUND;
        const directEnergy = 1.0 / (4 * Math.PI * directDist * directDist);
        
        if (rrParams.enabled) {
            // Add to energy histograms
            const timeBin = Math.floor(directTime / rrParams.histogramResolution);
            if (timeBin < energyHistograms.low.length) {
                FREQUENCY_BANDS.forEach(band => {
                    energyHistograms[band][timeBin] += directEnergy;
                });
            }
        } else {
            // Add to path arrays (traditional method)
            const directPath = [sourcePos.clone(), micPos.clone()];
            const directPathData = {
                time: directTime,
                amplitude: 1.0 / (1 + directDist ** 2),
                bounceCount: 0,
                path: directPath
            };
            
            FREQUENCY_BANDS.forEach(band => {
                successfulPathsByBand[band].push({...directPathData});
            });
        }
        
        // Visualize direct path
        if (rayVisualizationCallback && visualizedRayCount < maxVisualRays) {
            const directPath = [sourcePos.clone(), micPos.clone()];
            const rayGeometry = createRayGeometry(directPath, directTime, true, 0); // Add bounce count (0 for direct)
            const rayMaterial = createRayMaterial(true, 0); 
            rayGeometries.push(rayGeometry);
            rayVisualizationCallback(rayGeometry, rayMaterial);
            visualizedRayCount++;
        }
    }

    // Report initial progress
    if (progressCallback) {
        const progressData = rrParams.enabled ? energyHistograms : successfulPathsByBand;
        progressCallback(0, progressData);
    }

    // Main ray tracing loop
    // Main ray tracing loop - HYBRID APPROACH
    for (let i = 0; i < numRays; i++) {
        if (stopCheck && stopCheck()) {
            console.log('Ray tracing cancelled');
            break;
        }

        // *** HYBRID METHOD: Traditional + Ray-Radiosity ***
        for (const band of FREQUENCY_BANDS) {
            let currentPos = sourcePos.clone();
            let direction = new THREE.Vector3().setFromSphericalCoords(
                1, 
                Math.acos(2 * Math.random() - 1), 
                2 * Math.PI * Math.random()
            );

            let path = [currentPos.clone()];
            let energy = 1.0;
            let totalDist = 0;
            let rayEnergy = 1.0 / numRays; // For RR method

            const absorption = absorptionCoefficients[band];

            // Traditional ray tracing for early bounces
            for (let bounce = 0; bounce < Math.min(maxBounces, rrParams.hybridBounceThreshold); bounce++) {
                if (stopCheck && stopCheck()) break;

                // Check microphone intersection
                const micHit = rayIntersectSphere(currentPos, direction, micPos, micRadius);

                // Check wall intersection
                localRaycaster.set(currentPos, direction);
                const wallHit = localRaycaster.intersectObject(roomMesh);

                // Microphone hit check
                if (micHit && (!wallHit.length || micHit.distance < wallHit[0].distance)) {
                    totalDist += micHit.distance;
                    path.push(micHit.point.clone());

                    if (!successfulPathsByBand) {
                        successfulPathsByBand = {
                            sub: [], low: [], low_mid: [], mid: [], high_mid: [], high: [], ultra: []
                        };
                    }

                    successfulPathsByBand[band].push({
                        time: totalDist / SPEED_OF_SOUND,
                        amplitude: (energy / (1 + totalDist ** 2)) * (fakePhase ? (Math.random() < 0.5 ? 1 : -1) : 1),
                        bounceCount: bounce,
                        path: path.slice(),
                        band: band
                    });

                    // Visualize traditional rays (DARK BLUE)
                    if (band === 'mid' && rayVisualizationCallback && visualizedRayCount < maxVisualRays && Math.random() < 0.3) {
                        const arrivalTime = totalDist / SPEED_OF_SOUND;
                        const rayGeometry = createRayGeometry(path, arrivalTime, false, bounce, false); // false = not RR
                        const rayMaterial = createRayMaterial(false, bounce, false); // false = not RR
                        if (rayGeometry) {
                            rayGeometries.push(rayGeometry);
                            rayVisualizationCallback(rayGeometry, rayMaterial);
                            visualizedRayCount++;
                        }
                    }
                    break; // Ray reached microphone
                }

                // Wall hit
                if (wallHit.length) {
                    const { point, face } = wallHit[0];
                    totalDist += wallHit[0].distance;

                    // Apply frequency-dependent absorption
                    energy *= (1.0 - absorption);
                    rayEnergy *= (1.0 - absorption);

                    // Reflect (pure specular for traditional method)
                    const worldNormal = face.normal.clone().transformDirection(roomMesh.matrixWorld).normalize();
                    direction.reflect(worldNormal);

                    currentPos = point.clone().add(direction.clone().multiplyScalar(0.001));
                    path.push(point.clone());
                } else {
                    break; // Ray escaped
                }
            }

            // If ray still has energy and bounces left, switch to Ray-Radiosity
            if (energy > 1e-6 && path.length > rrParams.hybridBounceThreshold) {

                // Initialize energy histograms if not done
                if (!energyHistograms) {
                    const numBins = Math.ceil(rrParams.maxTime / rrParams.histogramResolution);
                    energyHistograms = {
                        sub: new Float32Array(numBins).fill(0),
                        low: new Float32Array(numBins).fill(0),
                        low_mid: new Float32Array(numBins).fill(0),
                        mid: new Float32Array(numBins).fill(0),
                        high_mid: new Float32Array(numBins).fill(0),
                        high: new Float32Array(numBins).fill(0),
                        ultra: new Float32Array(numBins).fill(0)
                    };
                }

                // Continue with Ray-Radiosity for remaining bounces
                for (let bounce = rrParams.hybridBounceThreshold; bounce < maxBounces; bounce++) {
                    if (stopCheck && stopCheck()) break;

                    // Check for wall intersection
                    localRaycaster.set(currentPos, direction);
                    const wallHit = localRaycaster.intersectObject(roomMesh);

                    if (!wallHit.length) {
                        break; // Ray escaped
                    }

                    const { point, face } = wallHit[0];
                    const hitDistance = wallHit[0].distance;
                    totalDist += hitDistance;

                    // Ray-Radiosity: Contribute energy to receiver at each surface hit
                    const timeToReceiver = totalDist / SPEED_OF_SOUND + point.distanceTo(micPos) / SPEED_OF_SOUND;
                    const distanceToReceiver = point.distanceTo(micPos);

                    // Apply absorption at this surface
                    rayEnergy *= (1.0 - absorption);

                    // Calculate diffuse energy contribution to receiver
                    const diffuseEnergy = rayEnergy * rrParams.scatteringCoeff / (4 * Math.PI * distanceToReceiver * distanceToReceiver);

                    // Add to energy histogram
                    const timeBin = Math.floor(timeToReceiver / rrParams.histogramResolution);
                    if (timeBin < energyHistograms[band].length && diffuseEnergy > 1e-8) {
                        energyHistograms[band][timeBin] += diffuseEnergy;
                    }

                    // Calculate reflection direction (mix of specular and scattered)
                    const worldNormal = face.normal.clone().transformDirection(roomMesh.matrixWorld).normalize();

                    // Specular reflection
                    const specularDirection = direction.clone().reflect(worldNormal);

                    // Scattered (random) reflection
                    const scatteredDirection = generateLambertianReflection(worldNormal);

                    // Mix specular and scattered based on scattering coefficient
                    const s = rrParams.scatteringCoeff;
                    direction = specularDirection.clone().multiplyScalar(1 - s)
                               .add(scatteredDirection.clone().multiplyScalar(s))
                               .normalize();

                    // Update position for next bounce
                    currentPos = point.clone().add(direction.clone().multiplyScalar(0.001));
                    path.push(point.clone());

                    // Visualize Ray-Radiosity rays (LIGHT BLUE)
                    if (band === 'mid' && rayVisualizationCallback && visualizedRayCount < maxVisualRays && Math.random() < 0.1) {
                        const estimatedArrivalTime = totalDist / SPEED_OF_SOUND;
                        const rayGeometry = createRayGeometry(path, estimatedArrivalTime, false, bounce, true); // true = RR
                        const rayMaterial = createRayMaterial(false, bounce, true); // true = RR
                        if (rayGeometry) {
                            rayGeometries.push(rayGeometry);
                            rayVisualizationCallback(rayGeometry, rayMaterial);
                            visualizedRayCount++;
                        }
                    }
                }
            }
        }

        // Progress reporting
        if (i % 100 === 0 || i === numRays - 1) {
            progress = Math.round((i / numRays) * 100);

            if (progressCallback) {
                const progressData = successfulPathsByBand || energyHistograms;
                progressCallback(progress, progressData);
            }

            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }

    // Convert RR histograms to paths if needed
    if (energyHistograms) {
        const rrPaths = convertHistogramsToPaths(energyHistograms, rrParams.histogramResolution, fakePhase);

        // Merge with traditional paths
        if (!successfulPathsByBand) {
            successfulPathsByBand = rrPaths;
        } else {
            FREQUENCY_BANDS.forEach(band => {
                successfulPathsByBand[band] = successfulPathsByBand[band].concat(rrPaths[band]);
            });
        }
    }

    progress = 100;
    return { successfulPathsByBand, progress, rayGeometries };
}

/**
 * Helper function to create a group containing all ray visualizations using Line2
 * @param {Array} rayGeometries - Array of ray geometries
 * @returns {THREE.Group} Group containing all ray line objects
 */
export function createRayVisualizationGroup(rayGeometries) {
    const group = new THREE.Group();
    
    rayGeometries.forEach((geometry, index) => {
        // Get metadata from geometry userData
        const { bounceCount, isDirect, isRayRadiosity } = geometry.userData || { 
            bounceCount: 0, 
            isDirect: false, 
            isRayRadiosity: false 
        };
        
        const material = createRayMaterial(isDirect, bounceCount, isRayRadiosity);
        const line = new Line2(geometry, material);
        line.computeLineDistances(); // Required for Line2
        line.castShadow = false;
        line.receiveShadow = false;
        line.name = `ray_${index}_${isDirect ? 'direct' : (isRayRadiosity ? 'late' : 'early')}`;
        group.add(line);
    });
    
    return group;
}