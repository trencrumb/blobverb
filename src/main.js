import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast, INTERSECTED } from 'three-mesh-bvh';

import WaveSurfer from 'wavesurfer.js';
import Spectrogram from 'wavesurfer.js/dist/plugins/spectrogram.esm.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js';

import { createAmplitudeMeter } from './amplitude-meter.js';
import { EnvelopeFollower } from './envelope-follower.js';
import { initLogSlider } from './log-slider.js';

import { createNoise3D } from 'simplex-noise';
import seedrandom from 'seedrandom';
import { WEQ8Runtime } from 'weq8';
import 'weq8/ui';
import { RubberBandInterface, RubberBandOption } from '@slangeder/rubberband-wasm/dist/index.esm.js';
import rubberbandWasmUrl from '@slangeder/rubberband-wasm/dist/rubberband.wasm?url';

import noise3DGLSL from './shaders/noise3D.glsl?raw';
import vertexSrc from './shaders/vertex.glsl?raw';
import fragmentSrc from './shaders/fragment.glsl?raw';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// -----------------------------------------------------------------------------
// Config & mutable state
// -----------------------------------------------------------------------------
const CONFIG = {
    CANVAS_TARGET_ID: 'threeViewport',
    INITIAL_CAMERA_DISTANCE: 35,
    DEFAULT_MAX_BOUNCES: 100,
    SPEED_OF_SOUND: 343,
    EMITTER_RADIUS: 0.5,
    RAY_RADIOSITY: {
        enabled: true,
        scatteringCoeff: 0.3,
        histogramResolution: 0.003,
        maxTime: 6.0,
        hybridBounceThreshold: 3,
        poissonDensity: 22,
        minEnergyThreshold: 1e-9,
        diffuseGain: 1.6
    },
    DEFAULTS: {
        randomSeed: 'nmz6kp.6n',
        baseRadius: 15,
        noiseFrequency: 0.2,
        noiseAmplitude: 5,
        absorption: {
            200: 0.15,
            800: 0.2,
            3200: 0.25,
            10000: 0.3
        },
        numRays: 15000,
        useWebWorker: true,
        realtimePreview: true,
        irPreDelayMs: 0,
        rayRadiosity: {
            enabled: true,
            scatteringCoeff: 0.45,
            histogramResolution: 0.003,
            maxTime: 6.0,
            hybridBounceThreshold: 3,
            poissonDensity: 22,
            minEnergyThreshold: 1e-9,
            diffuseGain: 1.6
        }
    },
    FREQ_BANDS: [
        200,    // Low
        800,    // Mid
        3200,   // High
        10000   // Ultra High
    ]
};

const dom = {};
const state = {
    initialized: false,
    isSimulating: false,
    shaderMaterial: null,
    roomMesh: null,
    baseVertexDirections: null,
    noise3D: createNoise3D(),
    maxBounces: CONFIG.DEFAULT_MAX_BOUNCES,
    workerGeometryReady: false,
    realtimeSimEnabled: true
};

// Three.js references
let container;
let scene;
let camera;
let renderer;
let controls;
let stats;
let emitterMesh;
let rayLinesGroup;
const raycaster = new THREE.Raycaster();
const vectors = {
    origin: new THREE.Vector3(),
    direction: new THREE.Vector3(),
    temp: new THREE.Vector3(),
    temp2: new THREE.Vector3(),
    temp3: new THREE.Vector3(),
    toReceiver: new THREE.Vector3(),
    specular: new THREE.Vector3(),
    scatter: new THREE.Vector3()
};
raycaster.firstHitOnly = true;

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

    const tangent = vectors.temp2;
    const bitangent = vectors.temp3;

    if (Math.abs(normal.x) > Math.abs(normal.z)) {
        tangent.set(-normal.y, normal.x, 0).normalize();
    } else {
        tangent.set(0, -normal.z, normal.y).normalize();
    }

    bitangent.crossVectors(normal, tangent);

    return vectors.scatter
        .copy(tangent).multiplyScalar(r * Math.cos(phi))
        .addScaledVector(bitangent, r * Math.sin(phi))
        .addScaledVector(normal, Math.sqrt(Math.max(0, 1 - u1)))
        .normalize();
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

// -----------------------------------------------------------------------------
// Rubber Band helpers
// -----------------------------------------------------------------------------
const RUBBERBAND_OPTIONS =
    RubberBandOption.RubberBandOptionProcessOffline |
    RubberBandOption.RubberBandOptionStretchPrecise |
    RubberBandOption.RubberBandOptionTransientsSmooth |
    RubberBandOption.RubberBandOptionFormantPreserved |
    RubberBandOption.RubberBandOptionPitchHighQuality |
    RubberBandOption.RubberBandOptionChannelsTogether;

async function ensureRubberBandInstance() {
    if (!rubberBandInstancePromise) {
        rubberBandInstancePromise = (async () => {
            const response = await fetch(rubberbandWasmUrl);
            const wasmBytes = await response.arrayBuffer();
            const module = await WebAssembly.compile(wasmBytes);
            return RubberBandInterface.initialize(module);
        })();
    }
    return rubberBandInstancePromise;
}

async function processWithRubberBand(audioBuffer, { timeRatio = 1, pitchSemitones = 0 } = {}) {
    if (!audioBuffer) throw new Error('No audio buffer provided to Rubber Band processor.');
    const rbApi = await ensureRubberBandInstance();

    const channels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const inputLength = audioBuffer.length;
    if (channels === 0 || inputLength === 0) return audioBuffer;

    initAudioContext();
    const ctx = audioContext;

    const clampedRatio = Math.max(0.1, Math.min(timeRatio, 10.0));
    const pitchScale = Math.pow(2, pitchSemitones / 12);

    const rbState = rbApi.rubberband_new(sampleRate, channels, RUBBERBAND_OPTIONS, 1, 1);
    rbApi.rubberband_set_time_ratio(rbState, clampedRatio);
    rbApi.rubberband_set_pitch_scale(rbState, pitchScale);
    rbApi.rubberband_set_expected_input_duration(rbState, inputLength);

    let samplesRequired = rbApi.rubberband_get_samples_required(rbState);
    if (!Number.isFinite(samplesRequired) || samplesRequired <= 0) {
        samplesRequired = 2048;
    }

    const channelArrayPtr = rbApi.malloc(channels * 4);
    const channelDataPtrs = [];
    const tempChunks = [];
    for (let c = 0; c < channels; c++) {
        const ptr = rbApi.malloc(samplesRequired * 4);
        channelDataPtrs.push(ptr);
        tempChunks.push(new Float32Array(samplesRequired));
        rbApi.memWritePtr(channelArrayPtr + c * 4, ptr);
    }

    const inputChannelData = Array.from({ length: channels }, (_, idx) =>
        Float32Array.from(audioBuffer.getChannelData(idx))
    );

    let outputCapacity = Math.max(1, Math.ceil(inputLength * Math.max(clampedRatio, 1)) + samplesRequired);
    const outputChannels = Array.from({ length: channels }, () => new Float32Array(outputCapacity));
    let writeIndex = 0;

    const ensureCapacity = (additional) => {
        if (writeIndex + additional <= outputCapacity) return;
        const newCapacity = Math.max(writeIndex + additional, Math.ceil(outputCapacity * 1.5));
        for (let c = 0; c < channels; c++) {
            const expanded = new Float32Array(newCapacity);
            expanded.set(outputChannels[c].subarray(0, writeIndex));
            outputChannels[c] = expanded;
        }
        outputCapacity = newCapacity;
    };

    const writeChunkToMemory = (channelIndex, data, length) => {
        if (length === samplesRequired) {
            rbApi.memWrite(channelDataPtrs[channelIndex], data);
        } else {
            const temp = tempChunks[channelIndex];
            temp.fill(0);
            temp.set(data);
            rbApi.memWrite(channelDataPtrs[channelIndex], temp);
        }
    };

    const tryRetrieve = (final = false) => {
        while (true) {
            const available = rbApi.rubberband_available(rbState);
            if (available < 1) break;
            if (!final && available < samplesRequired) break;
            const chunkSize = Math.min(samplesRequired, available);
            ensureCapacity(chunkSize);
            const received = rbApi.rubberband_retrieve(rbState, channelArrayPtr, chunkSize);
            for (let c = 0; c < channels; c++) {
                const chunk = rbApi.memReadF32(channelDataPtrs[c], received);
                outputChannels[c].set(chunk, writeIndex);
            }
            writeIndex += received;
        }
    };

    try {
        let read = 0;
        while (read < inputLength) {
            const remaining = Math.min(samplesRequired, inputLength - read);
            for (let c = 0; c < channels; c++) {
                const chunk = inputChannelData[c].subarray(read, read + remaining);
                writeChunkToMemory(c, chunk, chunk.length);
            }
            read += remaining;
            const hasMore = read < inputLength ? 0 : 1;
            rbApi.rubberband_study(rbState, channelArrayPtr, remaining, hasMore);
        }

        read = 0;
        while (read < inputLength) {
            const remaining = Math.min(samplesRequired, inputLength - read);
            for (let c = 0; c < channels; c++) {
                const chunk = inputChannelData[c].subarray(read, read + remaining);
                writeChunkToMemory(c, chunk, chunk.length);
            }
            read += remaining;
            const hasMore = read < inputLength ? 0 : 1;
            rbApi.rubberband_process(rbState, channelArrayPtr, remaining, hasMore);
            tryRetrieve(false);
        }

        tryRetrieve(true);

        const outputLength = Math.max(1, writeIndex);
        const finalBuffer = ctx.createBuffer(channels, outputLength, sampleRate);
        for (let c = 0; c < channels; c++) {
            finalBuffer.copyToChannel(outputChannels[c].subarray(0, outputLength), c);
        }
        return finalBuffer;
    } finally {
        channelDataPtrs.forEach((ptr) => rbApi.free(ptr));
        rbApi.free(channelArrayPtr);
        rbApi.rubberband_delete(rbState);
    }
}

// Audio references
let audioContext;
let convolver;
let dryGain;
let wetGain;
let masterGain;
let drySliderCtrl;
let wetSliderCtrl;
let amplitudeMeter;
let rmsEnvelope;
let peakEnvelope;
let impulseResponseBuffer;
let rawImpulseResponseBuffer;
let originalImpulseResponseBuffer;
let impulseResponseSource;
let sampleBuffer;
let pitchedSampleBuffer;
let sampleSourceNode;
let wavesurfer;
let weq8Runtime;
let rubberBandInstancePromise = null;
let isIrStretchProcessing = false;
let isSamplePitchProcessing = false;
let irStretchTaskId = 0;
let samplePitchTaskId = 0;
let irStretchDebounce = null;
let samplePitchDebounce = null;

// Worker reference
let workerInstance = null;

// -----------------------------------------------------------------------------
// DOM helpers
// -----------------------------------------------------------------------------
function cacheDom() {
    Object.assign(dom, {
        baseRadius: document.getElementById('baseRadius'),
        noiseFrequency: document.getElementById('noiseFreq'),
        noiseAmplitude: document.getElementById('noiseAmp'),
        randomSeed: document.getElementById('randomSeed'),
        status: document.getElementById('status'),
        startButton: document.getElementById('startButton'),
        downloadBtn: document.getElementById('downloadBtn'),
        randomizeSeedBtn: document.getElementById('randomizeSeedBtn'),
        raysToVisualizeSlider: document.getElementById('raysToVisualize'),
        lineColorModeSelect: document.getElementById('lineColorMode'),
        sampleAudioSelect: document.getElementById('sample-audio'),
        playSampleBtn: document.getElementById('playSampleBtn'),
        stopSampleBtn: document.getElementById('stopSampleBtn'),
        drySlider: document.getElementById('dry-slider'),
        dryOutput: document.getElementById('dry-output'),
        wetSlider: document.getElementById('wet-slider'),
        wetOutput: document.getElementById('wet-output'),
        samplePitchSlider: document.getElementById('samplePitch'),
        samplePitchOutput: document.getElementById('samplePitch-val'),
        irStretchSlider: document.getElementById('irStretch'),
        irStretchOutput: document.getElementById('irStretch-val'),
        irPreDelaySlider: document.getElementById('irPreDelay'),
        irPreDelayOutput: document.getElementById('irPreDelay-val'),
        useWebWorker: document.getElementById('useWebWorker'), 
        realtimeSimToggle: document.getElementById('realtimeSimToggle'),
        rrEnabled: document.getElementById('rrEnabled'),
        rrScattering: document.getElementById('rrScattering'),
        rrScatteringOutput: document.getElementById('rrScattering-val'),
        rrHistogramResolution: document.getElementById('rrHistogramResolution'),
        rrHistogramResolutionOutput: document.getElementById('rrHistogramResolution-val'),
        rrMaxTime: document.getElementById('rrMaxTime'),
        rrMaxTimeOutput: document.getElementById('rrMaxTime-val'),
        rrHybridBounce: document.getElementById('rrHybridBounce'),
        rrHybridBounceOutput: document.getElementById('rrHybridBounce-val'),
        rrPoissonDensity: document.getElementById('rrPoissonDensity'),
        rrPoissonDensityOutput: document.getElementById('rrPoissonDensity-val'),
        rrDiffuseGain: document.getElementById('rrDiffuseGain'),
        rrDiffuseGainOutput: document.getElementById('rrDiffuseGain-val'),
        rrMinEnergy: document.getElementById('rrMinEnergy'),
        rrMinEnergyOutput: document.getElementById('rrMinEnergy-val'),
        resetButton: document.getElementById('resetButton')
    });

    if (dom.downloadBtn) dom.downloadBtn.disabled = true;
}

function setStatus(message) {
    if (dom.status) dom.status.textContent = message;
}

// -----------------------------------------------------------------------------
// Three.js setup
// -----------------------------------------------------------------------------
function setupScene() {
    container = document.getElementById(CONFIG.CANVAS_TARGET_ID);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 0, CONFIG.INITIAL_CAMERA_DISTANCE);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (container) {
        container.appendChild(renderer.domElement);
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
    } else {
        console.warn('Three.js viewport container not found; falling back to document.body');
        document.body.appendChild(renderer.domElement);
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    scene.add(new THREE.PointLight(0xffffff, 1.5));

    stats = new Stats();
    stats.dom.style.position = 'absolute';
    stats.dom.style.top = '8px';
    stats.dom.style.left = '8px';
    stats.dom.style.pointerEvents = 'none';
    stats.dom.style.zIndex = '2';
    if (container) {
        stats.dom.style.position = 'absolute';
        container.appendChild(stats.dom);
    } else {
        stats.dom.style.position = 'fixed';
        document.body.appendChild(stats.dom);
    }

    emitterMesh = new THREE.Mesh(
        new THREE.SphereGeometry(CONFIG.EMITTER_RADIUS, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffd700, emissiveIntensity: 0.5 })
    );
    scene.add(emitterMesh);

    rayLinesGroup = new THREE.Group();
    scene.add(rayLinesGroup);

    updateRendererSize(true);
    window.addEventListener('resize', () => updateRendererSize(true));
}

function updateRendererSize(force = false) {
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;
    if (width === 0 || height === 0) return;

    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    const canvas = renderer.domElement;
    const needResize =
        force ||
        canvas.width !== Math.floor(width * pixelRatio) ||
        canvas.height !== Math.floor(height * pixelRatio);

    if (needResize) {
        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}

// -----------------------------------------------------------------------------
// Shader + geometry
// -----------------------------------------------------------------------------
function injectAmplifierUniforms(material) {
    if (!material?.uniforms) return;
    if (dom.noiseFrequency) material.uniforms.uFrequency.value = parseFloat(dom.noiseFrequency.value);
    if (dom.noiseAmplitude) material.uniforms.uAmplitude.value = parseFloat(dom.noiseAmplitude.value);
    material.needsUpdate = true;
}

async function createShaderMaterial() {
    const finalVertexShader = vertexSrc.replace('${glsl_noise_3d}', noise3DGLSL);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 },
            uFrequency: { value: 0.2 },
            uAmplitude: { value: 0.2 },
            uAlpha: { value: 0.4 }
        },
        vertexShader: finalVertexShader,
        fragmentShader: fragmentSrc,
        side: THREE.DoubleSide,
        wireframe: true,
        transparent: true,
        depthWrite: false
    });

    return material;
}

async function initShader() {
    console.log('Loading shaders...');
    state.shaderMaterial = await createShaderMaterial();
    console.log('Shader material created successfully');
}

function applySeed(seed) {
    const rng = seedrandom(seed || undefined);
    state.noise3D = createNoise3D(rng);
}

function buildRoomGeometry() {
    if (!state.roomMesh) {
        const geometry = new THREE.IcosahedronGeometry(1, 20);
        state.roomMesh = new THREE.Mesh(
            geometry,
            state.shaderMaterial || new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
        );
        scene.add(state.roomMesh);
    } else if (state.shaderMaterial && state.roomMesh.material !== state.shaderMaterial) {
        state.roomMesh.material = state.shaderMaterial;
    }

    const geometry = state.roomMesh.geometry;
    rayLinesGroup.clear();

    const baseRadius = Math.max(parseFloat(dom.baseRadius?.value ?? '1'), 0.01);
    const noiseFreq = parseFloat(dom.noiseFrequency?.value ?? '0.2');
    const noiseAmp = parseFloat(dom.noiseAmplitude?.value ?? '0.2');

    const positionAttribute = geometry.getAttribute('position');
    if (!state.baseVertexDirections || state.baseVertexDirections.length !== positionAttribute.count * 3) {
        state.baseVertexDirections = new Float32Array(positionAttribute.count * 3);
        const dir = new THREE.Vector3();
        for (let i = 0; i < positionAttribute.count; i++) {
            dir.fromBufferAttribute(positionAttribute, i).normalize();
            const idx = i * 3;
            state.baseVertexDirections[idx] = dir.x;
            state.baseVertexDirections[idx + 1] = dir.y;
            state.baseVertexDirections[idx + 2] = dir.z;
        }
    }

    const baseVec = new THREE.Vector3();
    const displaced = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
        const idx = i * 3;
        baseVec.set(
            state.baseVertexDirections[idx],
            state.baseVertexDirections[idx + 1],
            state.baseVertexDirections[idx + 2]
        );

        displaced.copy(baseVec).multiplyScalar(baseRadius);
        const noiseValue = state.noise3D(
            baseVec.x * noiseFreq,
            baseVec.y * noiseFreq,
            baseVec.z * noiseFreq
        );
        displaced.addScaledVector(baseVec, noiseAmp * noiseValue);

        positionAttribute.setXYZ(i, displaced.x, displaced.y, displaced.z);
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.disposeBoundsTree?.();
    geometry.computeBoundsTree();
}

function rebuildRoom() {
    buildRoomGeometry();
}
// -----------------------------------------------------------------------------
// Worker
// -----------------------------------------------------------------------------
function initWorker() {
    if (workerInstance) workerInstance.terminate();

    try {
        workerInstance = new Worker(new URL('./raytracing-worker.js', import.meta.url), { type: 'module' });
        workerInstance.onmessage = handleWorkerMessage;
        workerInstance.onerror = (error) => {
            console.error('Modern worker failed to load:', error);
            fallbackToSimpleBVH();
        };
        workerInstance.postMessage({ type: 'init' });
    } catch (error) {
        console.error('Failed to create modern worker:', error);
        fallbackToSimpleBVH();
    }
}

function handleWorkerMessage(event) {
    const message = event.data;
    const { type } = message;
    
    switch (type) {
        case 'ready':
            console.log('Modern ES Module BVH worker initialized');
            updateWorkerGeometry();
            break;
        case 'geometrySet':
            console.log('Worker geometry updated BVH');
            state.workerGeometryReady = true;
            if (dom.startButton && !state.isSimulating) {
                dom.startButton.disabled = false;
            }
            break;
        case 'progress': {
            const progress = Math.round((message.progress || 0) * 100);
            const rps = message.raysPerSecond || 0;
            const arrivals = message.currentArrivals || 0;
            setStatus(`Simulating (Modern BVH Worker)... ${progress}% (${rps} rays/sec, ${arrivals} arrivals)`);
            break;
        }
        case 'complete': {
            const totalArrivals = message.totalArrivals || 0;
            const avgRps = message.avgRaysPerSecond || 0;
            const rayRadiosityInfo = message.rayRadiosity;
            
            console.log(`Modern BVH Worker simulation complete: ${totalArrivals} arrivals`);
            console.log(`Performance: ${avgRps} rays/sec average`);
            if (rayRadiosityInfo?.enabled) {
                console.log(
                    `Ray-radiosity tail: ${rayRadiosityInfo.lateArrivalCount} late pulses ` +
                    `(bins=${rayRadiosityInfo.histogramBins}, resolution=${rayRadiosityInfo.rrConfig?.histogramResolution ?? 'n/a'}s)`
                );
            }
            //console.timeEnd('Worker Simulation');
            
            // Handle multi-band or single-band results
            if (message.arrivalsByBand && message.freqBands) {
                plotMultiBandImpulseResponse(message.arrivalsByBand, message.freqBands);
            } else if (message.arrivals) {
                plotImpulseResponse(message.arrivals);
            } else {
                console.warn('Worker completed without arrivals payload; skipping IR plotting.');
            }
            
            if (dom.startButton) dom.startButton.disabled = false;
            state.isSimulating = false;
            const tailSummary = rayRadiosityInfo?.enabled && rayRadiosityInfo.lateArrivalCount
                ? `, ${rayRadiosityInfo.lateArrivalCount} RR pulses`
                : '';
            setStatus(`Complete: ${totalArrivals} arrivals (${avgRps} rays/sec${tailSummary})`);
            break;
        }
        case 'error':
            console.error('Modern BVH Worker error:', message.error || message.data?.error);
            fallbackToSimpleBVH();
            break;
        default:
            break;
    }
}

function fallbackToSimpleBVH() {
    console.warn('Falling back: disabling worker and using main-thread simulation.');
    if (workerInstance) {
        try { workerInstance.terminate(); } catch (err) {
            console.error('Failed to terminate worker cleanly:', err);
        }
    }
    workerInstance = null;
    const useWebWorker = document.getElementById('useWebWorker');
    if (useWebWorker) useWebWorker.checked = false;
    setStatus('Worker unavailable. Using main thread.');
    if (dom.startButton) dom.startButton.disabled = false;
    state.isSimulating = false;
}

function updateWorkerGeometry() {
    if (!workerInstance || !state.roomMesh) return;

    state.workerGeometryReady = false;

    const geometry = state.roomMesh.geometry;
    const positions = geometry.attributes.position.array;
    const normals = geometry.attributes.normal.array;
    const indices = geometry.index ? geometry.index.array : null;

    workerInstance.postMessage({
        type: 'setGeometry',
        data: {
            roomGeometry: {
                positions: Array.from(positions),
                normals: Array.from(normals),
                indices: indices ? Array.from(indices) : null
            },
            emitterRadius: CONFIG.EMITTER_RADIUS,
            emitterPosition: { x: 0, y: 0, z: 0 }
        }
    });
}

// -----------------------------------------------------------------------------
// Audio + WaveSurfer
// -----------------------------------------------------------------------------
function initAudioContext() {
    if (audioContext) return;

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    convolver = audioContext.createConvolver();
    dryGain = audioContext.createGain();
    wetGain = audioContext.createGain();
    masterGain = audioContext.createGain();
    amplitudeMeter = createAmplitudeMeter(audioContext, masterGain, { fftSize: 512, smoothingTimeConstant: 1 });

    const dryDb = drySliderCtrl ? drySliderCtrl.getDb() : 0;
    const wetDb = wetSliderCtrl ? wetSliderCtrl.getDb() : -6;
    
    dryGain.gain.value = dbToLinear(dryDb);
    wetGain.gain.value = dbToLinear(wetDb);

    console.log('Initial dry gain:', dryGain.gain.value, 'from', dryDb, 'dB');
    console.log('Initial wet gain:', wetGain.gain.value, 'from', wetDb, 'dB');

    convolver.connect(wetGain);
    dryGain.connect(masterGain);
    wetGain.connect(masterGain);
    masterGain.connect(audioContext.destination);

    console.log(`AudioContext Initialized.`);

    weq8Runtime = new WEQ8Runtime(audioContext);
    wetGain.connect(weq8Runtime.input);
    dryGain.connect(weq8Runtime.input);
    weq8Runtime.connect(masterGain);

    const weq8UI = document.querySelector('weq8-ui');
    if (weq8UI) weq8UI.runtime = weq8Runtime;

    rmsEnvelope = new EnvelopeFollower({ attack: 0.1, release: 0.1, sampleRate: 120 });
    peakEnvelope = new EnvelopeFollower({ attack: 0.1, release: 0.1, sampleRate: 120 });
}

function runRealtimeSimulation() {
    if (state.isSimulating) return;
    
    const useWebWorker = dom.useWebWorker?.checked ?? true;
    const quickSimParams = {
        numRays: 5000,  // Quick preview
        // use frequency-dependent absorption only
        absorptionCoeffs: {
            200: getNumericInputValue('absorption200', 0.1),
            800: getNumericInputValue('absorption800', 0.15),
            3200: getNumericInputValue('absorption3200', 0.2),
            10000: getNumericInputValue('absorption10000', 0.25)
        },
        freqBands: CONFIG.FREQ_BANDS,
        seed: dom.randomSeed?.value ?? '',
        speedOfSound: CONFIG.SPEED_OF_SOUND,
        maxBounces: state.maxBounces,
        batchSize: 5000,
        rrConfig: normalizeRayRadiosityConfig(getRayRadiosityConfig())
    };

    if (useWebWorker && workerInstance && state.workerGeometryReady) {
        state.isSimulating = true;
        setStatus('Quick preview...');
        workerInstance.postMessage({
            type: 'simulate',
            data: quickSimParams
        });
    } else if (!useWebWorker) {
        runQuickMainThreadSimulation(quickSimParams);
    }
}

function runQuickMainThreadSimulation(params) {
    state.isSimulating = true;
    setStatus('Quick preview (main thread)...');

    if (!state.roomMesh || !emitterMesh) {
        console.warn('Simulation unavailable: missing room or emitter mesh.');
        setStatus('Simulation unavailable: scene not ready.');
        state.isSimulating = false;
        return;
    }

    const seed = params.seed || '';
    const restoreRandom = Math.random;
    seedrandom(seed || undefined, { global: true });

    const freqBands = (params.freqBands ?? CONFIG.FREQ_BANDS).slice().sort((a, b) => a - b);
    const absorptionCoeffs = params.absorptionCoeffs ?? {};
    const numRays = params.numRays || 1500;
    const maxBounces = params.maxBounces ?? state.maxBounces;
    const speedOfSound = params.speedOfSound ?? CONFIG.SPEED_OF_SOUND;
    const rrConfig = normalizeRayRadiosityConfig(params.rrConfig ?? getRayRadiosityConfig());
    const useRayRadiosity = rrConfig.enabled;
    const histogramBins = useRayRadiosity ? Math.ceil(rrConfig.maxTime / rrConfig.histogramResolution) : 0;

    const arrivalsByBand = {};
    freqBands.forEach(freq => {
        arrivalsByBand[freq] = [];
    });

    const rrHistograms = useRayRadiosity
        ? Object.fromEntries(freqBands.map(freq => [freq, new Float32Array(histogramBins)]))
        : null;

    const emitterRadius = (emitterMesh.geometry?.boundingSphere?.radius) ?? CONFIG.EMITTER_RADIUS;
    const emitterWorldPos = emitterMesh.getWorldPosition(new THREE.Vector3());

    const roomIntersects = [];
    const receiverIntersects = [];

    for (let i = 0; i < numRays; i++) {
        vectors.origin.set(0, 0, 0);
        vectors.direction.randomDirection();

        let totalDistance = 0;
        const amplitudes = Object.fromEntries(freqBands.map(freq => [freq, 1.0]));

        for (let bounce = 0; bounce < maxBounces; bounce++) {
            raycaster.set(vectors.origin, vectors.direction);

            roomIntersects.length = 0;
            receiverIntersects.length = 0;

            raycaster.intersectObject(state.roomMesh, false, roomIntersects);
            if (emitterMesh) {
                raycaster.intersectObject(emitterMesh, false, receiverIntersects);
            }

            const receiverHit = receiverIntersects.length > 0;
            const roomHit = roomIntersects.length > 0;

            if (
                receiverHit &&
                (!roomHit || receiverIntersects[0].distance < roomIntersects[0].distance)
            ) {
                const receiverIntersection = receiverIntersects[0];
                if (receiverIntersection && receiverIntersection.distance > 0.001) {
                    totalDistance += receiverIntersection.distance;
                    const arrivalTime = totalDistance / speedOfSound;
                    freqBands.forEach(freq => {
                        arrivalsByBand[freq].push({
                            time: arrivalTime,
                            amplitude: amplitudes[freq]
                        });
                    });
                    break;
                }
            }

            if (!roomHit) break;

            const wallHit = roomIntersects[0];
            totalDistance += wallHit.distance;

            freqBands.forEach(freq => {
                const absorption = absorptionCoeffs[freq] ?? 0;
                amplitudes[freq] *= (1.0 - absorption);
                if (amplitudes[freq] < 0) amplitudes[freq] = 0;
            });

            if (useRayRadiosity && histogramBins > 0 && bounce >= rrConfig.hybridBounceThreshold && emitterMesh) {
                vectors.toReceiver.copy(wallHit.point).sub(emitterWorldPos);
                const distanceToReceiver = Math.max(vectors.toReceiver.length(), Math.max(emitterRadius * 0.5, 0.01));
                const timeToReceiver = (totalDistance + distanceToReceiver) / speedOfSound;

                if (timeToReceiver <= rrConfig.maxTime) {
                    const invDistanceTerm = 1.0 / Math.max(4 * Math.PI * distanceToReceiver * distanceToReceiver, 1e-6);
                    const binIndex = Math.floor(timeToReceiver / rrConfig.histogramResolution);
                    if (binIndex < histogramBins) {
                        freqBands.forEach(freq => {
                            const amp = amplitudes[freq];
                            if (amp <= 0) return;
                            const diffuseEnergy = amp * amp * rrConfig.diffuseGain * invDistanceTerm * Math.max(rrConfig.scatteringCoeff, 1e-3);
                            if (diffuseEnergy > rrConfig.minEnergyThreshold) {
                                rrHistograms[freq][binIndex] += diffuseEnergy;
                            }
                        });
                    }
                }
            }

            const faceNormal = wallHit.face?.normal ?? vectors.temp.set(0, 1, 0);
            const worldNormal = vectors.temp.copy(faceNormal)
                .transformDirection(state.roomMesh.matrixWorld)
                .normalize();
            const specularDir = vectors.specular.copy(vectors.direction).reflect(worldNormal);
            const scatteredDir = rrConfig.scatteringCoeff > 0 ? randomHemisphereDirection(worldNormal) : specularDir;

            vectors.direction.copy(specularDir)
                .multiplyScalar(1 - rrConfig.scatteringCoeff)
                .addScaledVector(scatteredDir, rrConfig.scatteringCoeff)
                .normalize();

            vectors.temp.copy(vectors.direction).multiplyScalar(0.001);
            vectors.origin.copy(wallHit.point).add(vectors.temp);
        }
    }

    let synthesizedLateArrivals = 0;

    if (useRayRadiosity && histogramBins > 0 && rrHistograms) {
        freqBands.forEach(freq => {
            const pulses = synthesizeRadiosityPulses(
                rrHistograms[freq],
                rrConfig.histogramResolution,
                rrConfig.poissonDensity,
                rrConfig.minEnergyThreshold
            );
            if (pulses.length > 0) {
                arrivalsByBand[freq].push(...pulses);
                synthesizedLateArrivals += pulses.length;
            }
            arrivalsByBand[freq].sort((a, b) => a.time - b.time);
        });
    } else {
        freqBands.forEach(freq => {
            arrivalsByBand[freq].sort((a, b) => a.time - b.time);
        });
    }

    plotMultiBandImpulseResponse(arrivalsByBand, freqBands);

    const totalArrivals = Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0);
    const tailSummary = useRayRadiosity && synthesizedLateArrivals
        ? `, ${synthesizedLateArrivals} RR pulses`
        : '';
    setStatus(`Quick preview: ${totalArrivals} arrivals${tailSummary}`);

    Math.random = restoreRandom;
    state.isSimulating = false;
}



function createIRAudioBuffer(arrivals, sampleRateOverride) {
    initAudioContext();
    const sampleRate = sampleRateOverride || audioContext.sampleRate;

    if (arrivals.length === 0) {
        return audioContext.createBuffer(1, 1, sampleRate);
    }

    const maxTime = arrivals.reduce((max, arr) => Math.max(max, arr.time), 0);
    const duration = Math.max(maxTime + 0.5, 1);
    const bufferLength = Math.ceil(duration * sampleRate);
    const irBuffer = audioContext.createBuffer(1, bufferLength, sampleRate);
    const bufferData = irBuffer.getChannelData(0);

    for (const arrival of arrivals) {
        const exactSample = arrival.time * sampleRate;
        const baseSample = Math.floor(exactSample);
        const fraction = exactSample - baseSample;

        if (baseSample < bufferLength - 1) {
            bufferData[baseSample] += arrival.amplitude * (1 - fraction);
            bufferData[baseSample + 1] += arrival.amplitude * fraction;
        } else if (baseSample < bufferLength) {
            bufferData[baseSample] += arrival.amplitude;
        }
    }

    const maxSample = bufferData.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
    if (maxSample > 1.0) {
        for (let i = 0; i < bufferData.length; i++) bufferData[i] /= maxSample;
    }

    return irBuffer;
}

function initWaveSurfer() {
    if (wavesurfer) wavesurfer.destroy();

    initAudioContext();

    const waveformContainer = document.querySelector('#waveform');
    if (!waveformContainer) {
        console.error('Waveform container #waveform not found');
        return null;
    }
    waveformContainer.innerHTML = '';

    try {
        const timeline = TimelinePlugin.create({
            height: 10,
            insertPosition: 'beforebegin',
            timeInterval: 0.5,
            primaryLabelInterval: 0.05,
            style: { fontSize: '10px', color: '#2D5B88' }
        });

        const ws = WaveSurfer.create({
            container: waveformContainer,
            waveColor: 'rgb(200, 100, 0)',
            progressColor: 'rgb(100, 50, 0)',
            height: 100,
            sampleRate: audioContext ? audioContext.sampleRate : 44100,
            interact: true,
            dragToSeek: true,
            plugins: [timeline]
        });

        ws.registerPlugin(
            Spectrogram.create({
                height: 100,
                scale: 'linear',
                useWebWorker: true,
                windowFunc: 'hann',
                fftSamples: 1024
            })
        );

        const audioElement = ws.getMediaElement();
        impulseResponseSource = audioContext.createMediaElementSource(audioElement);
        impulseResponseSource.connect(masterGain);

        ws.on('error', (err) => console.error('WaveSurfer error:', err));
        ws.on('click', () => ws.play());

        return ws;
    } catch (error) {
        console.error('Error initializing WaveSurfer:', error);
        return null;
    }
}

function plotImpulseResponse(arrivals) {
    wavesurfer = initWaveSurfer();
    if (!wavesurfer) return;

    if (arrivals.length === 0) return;

    initAudioContext();

    const maxAbsAmplitude = arrivals.reduce((max, arr) => Math.max(max, Math.abs(arr.amplitude)), 0);
    const headroom = 0.988;
    const normalizedArrivals = maxAbsAmplitude > 0
        ? arrivals.map(arr => ({ ...arr, amplitude: (arr.amplitude / maxAbsAmplitude) * headroom }))
        : arrivals;

    const baseBuffer = createIRAudioBuffer(normalizedArrivals);
    originalImpulseResponseBuffer = baseBuffer;
    rebuildImpulseResponseFromSource('simulation', true);
}

async function bandpassIRBuffer(irBuffer, centerFreq, Q = 1) {
    const offline = new OfflineAudioContext(1, irBuffer.length, irBuffer.sampleRate);
    const source = offline.createBufferSource();
    source.buffer = irBuffer;

    const filter = offline.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = centerFreq;
    filter.Q.value = Q;

    source.connect(filter).connect(offline.destination);
    source.start();

    return await offline.startRendering();
}

// Hann window function
function hannWindow(N) {
    const win = new Float32Array(N);
    for (let n = 0; n < N; n++) {
        win[n] = 0.5 * (1 - Math.cos(2 * Math.PI * n / (N - 1)));
    }
    return win;
}

// Generate a windowed-sinc FIR bandpass kernel
function firwinBandpass(numTaps, fLow, fHigh, fs) {
    const kernel = new Float32Array(numTaps);
    const win = hannWindow(numTaps);
    const M = numTaps - 1;
    const fc1 = fLow / fs;
    const fc2 = fHigh / fs;
    for (let n = 0; n < numTaps; n++) {
        const k = n - M / 2;
        let h;
        if (k === 0) {
            h = 2 * (fc2 - fc1);
        } else {
            h = (Math.sin(2 * Math.PI * fc2 * k) - Math.sin(2 * Math.PI * fc1 * k)) / (Math.PI * k);
        }
        kernel[n] = h * win[n];
    }
    // Normalize kernel to unity gain at DC
    const sum = kernel.reduce((a, b) => a + b, 0);
    for (let n = 0; n < numTaps; n++) kernel[n] /= sum;
    return kernel;
}

// Helper: Apply FIR filter to an AudioBuffer using ConvolverNode
async function applyFIRFilter(irBuffer, firKernel) {
    const offline = new OfflineAudioContext(1, irBuffer.length + firKernel.length, irBuffer.sampleRate);
    const kernelBuffer = offline.createBuffer(1, firKernel.length, irBuffer.sampleRate);
    kernelBuffer.copyToChannel(firKernel, 0);

    const src = offline.createBufferSource();
    src.buffer = irBuffer;
    const convolver = offline.createConvolver();
    convolver.buffer = kernelBuffer;

    src.connect(convolver).connect(offline.destination);
    src.start();

    return await offline.startRendering();
}

async function plotMultiBandImpulseResponse(arrivalsByBand, freqBands) {
    wavesurfer = initWaveSurfer();
    if (!wavesurfer) return;

    initAudioContext();

    console.log('Processing multi-band impulse response (FIR):', freqBands);

    // FIR filter parameters
    const numTaps = 257; // Odd number, e.g. 101-513 for sharper filters
    const sampleRate = audioContext.sampleRate;

    // Create and FIR-filter IR buffer for each frequency band
    const irBuffers = {};
    for (const freq of freqBands) {
        const arrivals = arrivalsByBand[freq];
        if (arrivals && arrivals.length > 0) {
            const maxAbsAmplitude = arrivals.reduce((max, arr) => Math.max(max, Math.abs(arr.amplitude)), 0);
            const headroom = 0.988;
            const normalizedArrivals = maxAbsAmplitude > 0
                ? arrivals.map(arr => ({ ...arr, amplitude: (arr.amplitude / maxAbsAmplitude) * headroom }))
                : arrivals;

            const rawBuffer = createIRAudioBuffer(normalizedArrivals);

            // FIR bandpass kernel for this band
            const centerFreq = parseFloat(freq);
            const bandwidth = centerFreq; // e.g. 1 octave bandwidth; adjust as needed
            const fLow = Math.max(centerFreq - bandwidth / 2, 20); // avoid sub-audible
            const fHigh = Math.min(centerFreq + bandwidth / 2, sampleRate / 2 - 1);

            const firKernel = firwinBandpass(numTaps, fLow, fHigh, sampleRate);

            // Apply FIR filter
            irBuffers[freq] = await applyFIRFilter(rawBuffer, firKernel);
        }
    }

    // Combine frequency bands into single IR using filterbank
    const combinedBuffer = combineFrequencyBands(irBuffers, freqBands);
    originalImpulseResponseBuffer = combinedBuffer;
    if (combinedBuffer) {
        setStatus('Multi-band Impulse Response loaded!');
        rebuildImpulseResponseFromSource('simulation', true);
    }
}

function combineFrequencyBands(irBuffers, freqBands) {
    if (!audioContext) return null;
    
    const freqs = freqBands.sort((a, b) => a - b);
    
    // Find longest buffer
    let maxLength = 0;
    freqs.forEach(freq => {
        if (irBuffers[freq]) {
            maxLength = Math.max(maxLength, irBuffers[freq].length);
        }
    });
    
    if (maxLength === 0) return null;
    
    const sampleRate = audioContext.sampleRate;
    const combinedBuffer = audioContext.createBuffer(1, maxLength, sampleRate);
    const combinedData = combinedBuffer.getChannelData(0);
    
    // Sum all bands
    freqs.forEach(freq => {
        const irBuffer = irBuffers[freq];
        if (!irBuffer) return;
        const irData = irBuffer.getChannelData(0);
        for (let i = 0; i < irData.length; i++) {
            combinedData[i] += irData[i];
        }
    });

    // Normalize to headroom (e.g., 0.98)
    const maxSample = combinedData.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
    if (maxSample > 0) {
        const headroom = 0.98;
        for (let i = 0; i < combinedData.length; i++) {
            combinedData[i] = (combinedData[i] / maxSample) * headroom;
        }
    }
    
    return combinedBuffer;
}

function dbToLinear(db) {
    return Math.pow(10, db / 20);
}

function audioBufferToWav(aBuffer) {
    const numOfChan = aBuffer.numberOfChannels;
    const length = aBuffer.length * numOfChan * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels = [];
    let offset = 0;
    let pos = 0;

    function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
    }

    function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
    }

    setUint32(0x46464952);
    setUint32(length - 8);
    setUint32(0x45564157);
    setUint32(0x20746d66);
    setUint32(16);
    setUint16(1);
    setUint16(numOfChan);
    setUint32(aBuffer.sampleRate);
    setUint32(aBuffer.sampleRate * 2 * numOfChan);
    setUint16(numOfChan * 2);
    setUint16(16);
    setUint32(0x61746164);
    setUint32(length - pos - 4);

    for (let i = 0; i < numOfChan; i++) channels.push(aBuffer.getChannelData(i));

    while (pos < length) {
        for (let i = 0; i < numOfChan; i++) {
            let sample = Math.max(-1, Math.min(1, channels[i][offset]));
            sample = (sample < 0 ? sample * 32768 : sample * 32767) | 0;
            view.setInt16(pos, sample, true);
            pos += 2;
        }
        offset++;
    }

    return new Blob([buffer], { type: 'audio/wav' });
}

// -----------------------------------------------------------------------------
// Samples
// -----------------------------------------------------------------------------
async function populateSampleDropdown() {
    if (!dom.sampleAudioSelect) return;

    const sampleFiles = import.meta.glob('/src/audio/samples/*.{wav,mp3,ogg}', { eager: true });
    const entries = Object.entries(sampleFiles).sort(([a], [b]) => a.localeCompare(b));

    dom.sampleAudioSelect.innerHTML = '';
    entries.forEach(([path, module]) => {
        const url = module.default ?? path.replace('/src', '');
        const name = path.split('/').pop();
        const option = document.createElement('option');
        option.value = url;
        option.textContent = name;
        dom.sampleAudioSelect.appendChild(option);
    });

    if (entries.length > 0) {
        dom.sampleAudioSelect.selectedIndex = 0;
        await loadSelectedSample(dom.sampleAudioSelect.value);
    }
}

async function loadSelectedSample(url) {
    stopSamplePlayback();
    sampleBuffer = null;

    if (!url) return;

    if (!audioContext) {
        console.warn('AudioContext not initialized yet; sample will load but not play until splash is dismissed.');
    }
    
    setStatus('Loading sample…');
    if (dom.playSampleBtn) dom.playSampleBtn.disabled = true;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        
        if (audioContext) {
            sampleBuffer = await audioContext.decodeAudioData(arrayBuffer);
            pitchedSampleBuffer = sampleBuffer;
            scheduleSamplePitchUpdate(true, 'load');
            setStatus(`Sample ready: ${url.split('/').pop()}`);
            if (dom.playSampleBtn) dom.playSampleBtn.disabled = false;
        } else {
            // Store for later decoding
            window._pendingSampleBuffer = arrayBuffer;
            setStatus(`Sample loaded (awaiting audio context): ${url.split('/').pop()}`);
        }
    } catch (error) {
        console.error('Sample load failed:', error);
        setStatus('Error loading sample.');
    }
}

function stopSamplePlayback() {
    if (sampleSourceNode) {
        try { sampleSourceNode.stop(0); } catch {}
        sampleSourceNode.disconnect();
        sampleSourceNode = null;
    }
    if (dom.playSampleBtn) dom.playSampleBtn.textContent = 'Play Sample';
}

// -----------------------------------------------------------------------------
// Simulation
// -----------------------------------------------------------------------------
function getNumericInputValue(id, fallback = 0) {
    const element = document.getElementById(id);
    if (!element) return fallback;
    const value = parseFloat(element.value);
    return Number.isFinite(value) ? value : fallback;
}

function getIntegerInputValue(id, fallback = 0) {
    const element = document.getElementById(id);
    if (!element) return fallback;
    const value = parseInt(element.value, 10);
    return Number.isFinite(value) ? value : fallback;
}

function readFloatInput(element, fallback, clampRange) {
    if (!element) return fallback;
    const parsed = parseFloat(element.value);
    if (!Number.isFinite(parsed)) return fallback;
    if (clampRange) {
        const [min, max] = clampRange;
        return Math.min(max, Math.max(min, parsed));
    }
    return parsed;
}

function readIntInput(element, fallback, clampRange) {
    if (!element) return fallback;
    const parsed = parseInt(element.value, 10);
    if (!Number.isFinite(parsed)) return fallback;
    if (clampRange) {
        const [min, max] = clampRange;
        return Math.min(max, Math.max(min, parsed));
    }
    return parsed;
}

function getRayRadiosityConfig() {
    const defaults = CONFIG.RAY_RADIOSITY;
    const enabled = dom.rrEnabled ? dom.rrEnabled.checked : defaults.enabled;

    const scattering = readFloatInput(dom.rrScattering, defaults.scatteringCoeff, [0, 1]);
    const histogramResolution = readFloatInput(dom.rrHistogramResolution, defaults.histogramResolution, [0.0005, 0.05]);
    const maxTime = readFloatInput(dom.rrMaxTime, defaults.maxTime, [histogramResolution, 20]);
    const hybridBounceThreshold = readIntInput(dom.rrHybridBounce, defaults.hybridBounceThreshold, [0, 64]);
    const poissonDensity = readFloatInput(dom.rrPoissonDensity, defaults.poissonDensity, [0.1, 128]);
    const diffuseGain = readFloatInput(dom.rrDiffuseGain, defaults.diffuseGain, [0.01, 10]);
    const minEnergyThreshold = readFloatInput(dom.rrMinEnergy, defaults.minEnergyThreshold, [1e-12, 1e-3]);

    return {
        enabled,
        scatteringCoeff: scattering,
        histogramResolution,
        maxTime,
        hybridBounceThreshold,
        poissonDensity,
        diffuseGain,
        minEnergyThreshold
    };
}

function normalizeRayRadiosityConfig(configOverrides) {
    const base = CONFIG.RAY_RADIOSITY;
    const cfg = {
        ...base,
        ...(configOverrides || {})
    };

    cfg.scatteringCoeff = THREE.MathUtils.clamp(cfg.scatteringCoeff ?? base.scatteringCoeff, 0, 1);
    cfg.histogramResolution = Math.max(0.0005, cfg.histogramResolution ?? base.histogramResolution);
    cfg.maxTime = Math.max(cfg.histogramResolution, cfg.maxTime ?? base.maxTime);
    cfg.hybridBounceThreshold = Math.max(0, Math.floor(cfg.hybridBounceThreshold ?? base.hybridBounceThreshold));
    cfg.poissonDensity = Math.max(0.1, cfg.poissonDensity ?? base.poissonDensity);
    cfg.minEnergyThreshold = Math.max(1e-12, cfg.minEnergyThreshold ?? base.minEnergyThreshold);
    cfg.diffuseGain = Math.max(0.01, cfg.diffuseGain ?? base.diffuseGain);
    cfg.enabled = !!cfg.enabled;

    return cfg;
}

function updateRayRadiosityOutputs() {
    const cfg = getRayRadiosityConfig();
    if (dom.rrScatteringOutput) dom.rrScatteringOutput.textContent = cfg.scatteringCoeff.toFixed(2);
    if (dom.rrHistogramResolutionOutput) dom.rrHistogramResolutionOutput.textContent = cfg.histogramResolution.toFixed(4) + ' s';
    if (dom.rrMaxTimeOutput) dom.rrMaxTimeOutput.textContent = cfg.maxTime.toFixed(2) + ' s';
    if (dom.rrHybridBounceOutput) dom.rrHybridBounceOutput.textContent = `${cfg.hybridBounceThreshold}`;
    if (dom.rrPoissonDensityOutput) dom.rrPoissonDensityOutput.textContent = cfg.poissonDensity.toFixed(1);
    if (dom.rrDiffuseGainOutput) dom.rrDiffuseGainOutput.textContent = cfg.diffuseGain.toFixed(2);
    if (dom.rrMinEnergyOutput) dom.rrMinEnergyOutput.textContent = cfg.minEnergyThreshold.toExponential(1);
}

function formatPitchLabel(value) {
    const rounded = Math.round(value);
    const prefix = rounded > 0 ? '+' : '';
    return `${prefix}${rounded} st`;
}

function formatStretchLabel(value) {
    return `${value.toFixed(2)}×`;
}

function formatPreDelayLabel(valueMs) {
    return `${Math.max(0, valueMs).toFixed(0)} ms`;
}

function getPreDelayMilliseconds() {
    const defaultValue = CONFIG.DEFAULTS?.irPreDelayMs ?? 0;
    const sliderValue = parseFloat(dom.irPreDelaySlider?.value ?? `${defaultValue}`);
    if (Number.isNaN(sliderValue)) return defaultValue;
    return Math.max(0, sliderValue);
}

function applyPreDelayToBuffer(sourceBuffer, preDelayMs) {
    if (!sourceBuffer) return null;
    initAudioContext();

    const sampleRate = sourceBuffer.sampleRate;
    const offsetSamples = Math.round((preDelayMs / 1000) * sampleRate);
    if (offsetSamples <= 0) return sourceBuffer;

    if (offsetSamples >= sourceBuffer.length) {
        return audioContext.createBuffer(sourceBuffer.numberOfChannels, 1, sampleRate);
    }

    const trimmedLength = sourceBuffer.length - offsetSamples;
    const trimmedBuffer = audioContext.createBuffer(
        sourceBuffer.numberOfChannels,
        trimmedLength,
        sampleRate
    );

    for (let channel = 0; channel < sourceBuffer.numberOfChannels; channel++) {
        const srcData = sourceBuffer.getChannelData(channel);
        const destData = trimmedBuffer.getChannelData(channel);
        destData.set(srcData.subarray(offsetSamples, offsetSamples + trimmedLength));
    }

    return trimmedBuffer;
}

function rebuildImpulseResponseFromSource(reason = null, immediateStretch = true) {
    if (!originalImpulseResponseBuffer) return;
    const preDelayMs = getPreDelayMilliseconds();
    if (dom.irPreDelayOutput) dom.irPreDelayOutput.textContent = formatPreDelayLabel(preDelayMs);

    rawImpulseResponseBuffer = applyPreDelayToBuffer(originalImpulseResponseBuffer, preDelayMs);
    if (!rawImpulseResponseBuffer) return;

    scheduleImpulseResponseStretch(immediateStretch, reason);
}

function scheduleImpulseResponseStretch(immediate = false, reason = null) {
    if (!rawImpulseResponseBuffer) return;
    const trigger = () => {
        const taskId = ++irStretchTaskId;
        applyImpulseResponseStretch(taskId, reason).catch((error) => {
            console.error('IR stretch failed:', error);
        });
    };
    if (immediate) {
        trigger();
    } else {
        if (irStretchDebounce) clearTimeout(irStretchDebounce);
        irStretchDebounce = setTimeout(trigger, 200);
    }
}

async function applyImpulseResponseStretch(taskId, reason = null) {
    if (!rawImpulseResponseBuffer) return;
    const sliderValue = parseFloat(dom.irStretchSlider?.value ?? '1') || 1;
    const needsStretch = Math.abs(sliderValue - 1) > 1e-3;

    let processed = rawImpulseResponseBuffer;
    if (needsStretch) {
        if (isIrStretchProcessing) {
            setTimeout(() => {
                if (taskId === irStretchTaskId) {
                    applyImpulseResponseStretch(taskId, reason).catch((error) => console.error('IR stretch retry failed:', error));
                }
            }, 120);
            return;
        }
        isIrStretchProcessing = true;
        try {
            processed = await processWithRubberBand(rawImpulseResponseBuffer, { timeRatio: sliderValue });
        } catch (error) {
            console.error('Error stretching impulse response:', error);
            processed = rawImpulseResponseBuffer;
            if (reason === 'slider') {
                setStatus('IR stretch failed; using original response.');
            }
        } finally {
            isIrStretchProcessing = false;
        }
    }

    if (taskId !== irStretchTaskId) return;

    impulseResponseBuffer = processed;
    if (convolver) convolver.buffer = impulseResponseBuffer;
    if (dom.downloadBtn) dom.downloadBtn.disabled = false;

    if (!wavesurfer) wavesurfer = initWaveSurfer();
    if (wavesurfer) {
        const blob = audioBufferToWav(impulseResponseBuffer);
        if (blob) {
            const objectUrl = URL.createObjectURL(blob);
            wavesurfer.load(objectUrl);
            wavesurfer.once('ready', () => URL.revokeObjectURL(objectUrl));
        }
    }

    if (reason === 'simulation') {
        setStatus('Impulse Response loaded! Ready for auralization.');
    } else if (reason === 'slider') {
        setStatus(`IR stretch updated (${formatStretchLabel(sliderValue)}).`);
    } else if (reason === 'preDelay') {
        setStatus(`IR pre-delay trimmed (${formatPreDelayLabel(getPreDelayMilliseconds())}).`);
    } else if (reason === 'reset') {
        setStatus('Impulse response settings reset.');
    }
}

function scheduleSamplePitchUpdate(immediate = false, reason = null) {
    if (!sampleBuffer) return;
    const trigger = () => {
        const taskId = ++samplePitchTaskId;
        applySamplePitch(taskId, reason).catch((error) => {
            console.error('Sample pitch processing failed:', error);
        });
    };
    if (immediate) {
        trigger();
    } else {
        if (samplePitchDebounce) clearTimeout(samplePitchDebounce);
        samplePitchDebounce = setTimeout(trigger, 150);
    }
}

async function applySamplePitch(taskId, reason = null) {
    if (!sampleBuffer) return;

    const semitones = parseFloat(dom.samplePitchSlider?.value ?? '0') || 0;
    const needsProcessing = Math.abs(semitones) > 1e-3;

    if (sampleSourceNode) stopSamplePlayback();

    if (!needsProcessing) {
        pitchedSampleBuffer = sampleBuffer;
        if (reason === 'slider') {
            setStatus('Sample pitch reset.');
        }
        return;
    }

    if (isSamplePitchProcessing) {
        setTimeout(() => {
            if (taskId === samplePitchTaskId) {
                applySamplePitch(taskId, reason).catch((error) => console.error('Sample pitch retry failed:', error));
            }
        }, 120);
        return;
    }
    isSamplePitchProcessing = true;
    if (dom.playSampleBtn) dom.playSampleBtn.disabled = true;

    try {
        const processed = await processWithRubberBand(sampleBuffer, { pitchSemitones: semitones, timeRatio: 1 });
        if (taskId !== samplePitchTaskId) return;
        pitchedSampleBuffer = processed;
        if (reason === 'slider') {
            setStatus(`Sample pitched (${formatPitchLabel(semitones)}).`);
        }
    } catch (error) {
        console.error('Error applying sample pitch:', error);
        pitchedSampleBuffer = sampleBuffer;
        setStatus('Pitch shift failed; using original sample.');
    } finally {
        isSamplePitchProcessing = false;
        if (dom.playSampleBtn) dom.playSampleBtn.disabled = false;
    }
}

function getCurrentSamplePlaybackBuffer() {
    return pitchedSampleBuffer || sampleBuffer;
}

function resetControlsToDefaults() {
    const defaults = CONFIG.DEFAULTS;
    if (!defaults) return;

    if (dom.randomSeed) dom.randomSeed.value = defaults.randomSeed;

    if (dom.baseRadius) {
        dom.baseRadius.value = defaults.baseRadius;
        const display = document.getElementById('baseRadius-val');
        if (display) display.textContent = defaults.baseRadius;
    }

    if (dom.noiseFrequency) {
        dom.noiseFrequency.value = defaults.noiseFrequency;
        const display = document.getElementById('noiseFreq-val');
        if (display) display.textContent = defaults.noiseFrequency;
    }

    if (dom.noiseAmplitude) {
        dom.noiseAmplitude.value = defaults.noiseAmplitude;
        const display = document.getElementById('noiseAmp-val');
        if (display) display.textContent = defaults.noiseAmplitude;
    }

    const absorptionDefaults = defaults.absorption || {};
    const absorptionIds = [200, 800, 3200, 10000];
    absorptionIds.forEach(freq => {
        const slider = document.getElementById(`absorption${freq}`);
        const display = document.getElementById(`absorption${freq}-val`);
        const value = absorptionDefaults[freq] ?? slider?.value;
        if (!slider || value === undefined) return;
        slider.value = value;
        if (display) display.textContent = value;
    });

    const numRaysInput = document.getElementById('numRays');
    if (numRaysInput) {
        numRaysInput.value = defaults.numRays;
        const display = document.getElementById('numRays-val');
        if (display) display.textContent = defaults.numRays;
    }

    if (dom.useWebWorker) dom.useWebWorker.checked = defaults.useWebWorker;
    if (dom.realtimeSimToggle) dom.realtimeSimToggle.checked = defaults.realtimePreview;
    state.realtimeSimEnabled = defaults.realtimePreview;

    const rrDefaults = defaults.rayRadiosity || {};
    if (dom.rrEnabled) dom.rrEnabled.checked = rrDefaults.enabled ?? CONFIG.RAY_RADIOSITY.enabled;
    if (dom.rrScattering) dom.rrScattering.value = rrDefaults.scatteringCoeff ?? CONFIG.RAY_RADIOSITY.scatteringCoeff;
    if (dom.rrHistogramResolution) dom.rrHistogramResolution.value = rrDefaults.histogramResolution ?? CONFIG.RAY_RADIOSITY.histogramResolution;
    if (dom.rrMaxTime) dom.rrMaxTime.value = rrDefaults.maxTime ?? CONFIG.RAY_RADIOSITY.maxTime;
    if (dom.rrHybridBounce) dom.rrHybridBounce.value = rrDefaults.hybridBounceThreshold ?? CONFIG.RAY_RADIOSITY.hybridBounceThreshold;
    if (dom.rrPoissonDensity) dom.rrPoissonDensity.value = rrDefaults.poissonDensity ?? CONFIG.RAY_RADIOSITY.poissonDensity;
    if (dom.rrDiffuseGain) dom.rrDiffuseGain.value = rrDefaults.diffuseGain ?? CONFIG.RAY_RADIOSITY.diffuseGain;
    if (dom.rrMinEnergy) dom.rrMinEnergy.value = rrDefaults.minEnergyThreshold ?? CONFIG.RAY_RADIOSITY.minEnergyThreshold;

    updateRayRadiosityOutputs();

    if (dom.samplePitchSlider) {
        dom.samplePitchSlider.value = '0';
        document.querySelectorAll('#samplePitch-val').forEach(el => el.textContent = formatPitchLabel(0));
    }
    if (dom.irStretchSlider) {
        dom.irStretchSlider.value = '1';
        document.querySelectorAll('#irStretch-val').forEach(el => el.textContent = formatStretchLabel(1));
    }
    if (dom.irPreDelaySlider) {
        const defaultPreDelay = defaults.irPreDelayMs ?? 0;
        dom.irPreDelaySlider.value = `${defaultPreDelay}`;
        document.querySelectorAll('#irPreDelay-val').forEach(el => el.textContent = formatPreDelayLabel(defaultPreDelay));
    }
    pitchedSampleBuffer = sampleBuffer || null;

    applySeed(defaults.randomSeed);
    rebuildRoom();

    setStatus('Controls reset to defaults.');

    if (state.realtimeSimEnabled && !state.isSimulating) {
        runRealtimeSimulation();
    }

    scheduleSamplePitchUpdate(true, 'reset');
    rebuildImpulseResponseFromSource('reset', true);
}

function runSimulationWorker() {
    if (state.isSimulating) return;
    if (!workerInstance) {
        console.warn('Worker unavailable; running simulation on main thread.');
        runSimulationMainThread();
        return;
    }

    if (!state.workerGeometryReady) {
        console.warn('Worker geometry not ready yet, please wait...');
        setStatus('Waiting for geometry update...');
        return;
    }

    state.isSimulating = true;
    if (dom.startButton) dom.startButton.disabled = true;
    setStatus('Starting simulation...');

    if (rayLinesGroup) {
        while (rayLinesGroup.children.length > 0) rayLinesGroup.remove(rayLinesGroup.children[0]);
    }

    const params = {
        numRays: getIntegerInputValue('numRays', 1000),
        maxBounces: state.maxBounces,
        useFreqDependent: true,
        absorptionCoeffs: {
            200: getNumericInputValue('absorption200', 0.1),
            800: getNumericInputValue('absorption800', 0.15),
            3200: getNumericInputValue('absorption3200', 0.2),
            10000: getNumericInputValue('absorption10000', 0.25)
        },
        seed: dom.randomSeed?.value ?? '',
        speedOfSound: CONFIG.SPEED_OF_SOUND,
        batchSize: 5000,
        rrConfig: normalizeRayRadiosityConfig(getRayRadiosityConfig())
    };

    console.log('Starting worker simulation with params:', params);
    console.time('Worker Simulation');

    workerInstance.postMessage({
        type: 'simulate',
        data: params
    });
}

function runSimulationMainThread() {
    if (state.isSimulating) return;

    state.isSimulating = true;
    if (dom.startButton) dom.startButton.disabled = true;
    setStatus('Simulating...');

    const MAX_BOUNCES = state.maxBounces;
    const BATCH_SIZE = 1000;
    const seed = dom.randomSeed?.value || '';
    const restoreRandom = Math.random;
    seedrandom(seed || undefined, { global: true });

    console.log(`Optimized main thread simulation starting with seed: "${seed || 'random'}"`);
    console.time('Main Thread Simulation');

    const numRays = getIntegerInputValue('numRays', 1000);
    const raysToVisualize = parseInt(dom.raysToVisualizeSlider?.value ?? '0', 10) || 0;
    const lineColorMode = dom.lineColorModeSelect?.value ?? 'random';

    if (!raycaster || !state.roomMesh || !emitterMesh || !rayLinesGroup) {
        console.warn('Simulation prerequisites missing.');
        setStatus('Simulation unavailable: scene not ready.');
        if (dom.startButton) dom.startButton.disabled = false;
        Math.random = restoreRandom;
        state.isSimulating = false;
        return;
    }

    if (emitterMesh.geometry && !emitterMesh.geometry.boundingSphere) {
        emitterMesh.geometry.computeBoundingSphere();
    }

    const freqBands = CONFIG.FREQ_BANDS.slice().sort((a, b) => a - b);
    const absorptionCoeffs = {
        200: getNumericInputValue('absorption200', 0.1),
        800: getNumericInputValue('absorption800', 0.15),
        3200: getNumericInputValue('absorption3200', 0.2),
        10000: getNumericInputValue('absorption10000', 0.25)
    };

    const rrConfig = normalizeRayRadiosityConfig(getRayRadiosityConfig());
    const useRayRadiosity = rrConfig.enabled;
    const histogramBins = useRayRadiosity ? Math.ceil(rrConfig.maxTime / rrConfig.histogramResolution) : 0;
    const speedOfSound = CONFIG.SPEED_OF_SOUND;

    const arrivalsByBand = Object.fromEntries(freqBands.map(freq => [freq, []]));
    const rrHistograms = useRayRadiosity
        ? Object.fromEntries(freqBands.map(freq => [freq, new Float32Array(histogramBins)]))
        : null;
    let rrContributionCount = 0;

    const emitterRadius = emitterMesh.geometry?.boundingSphere?.radius ?? CONFIG.EMITTER_RADIUS;
    const emitterWorldPos = emitterMesh.getWorldPosition(new THREE.Vector3());
    const visualizeBand = freqBands[Math.floor(freqBands.length / 2)] ?? freqBands[0];

    const roomIntersections = [];
    const receiverIntersections = [];

    let currentRay = 0;

    const maxSegments = Math.max(1, raysToVisualize * MAX_BOUNCES * 2);
    const linePositions = new Float32Array(maxSegments * 3);
    const lineColors = new Float32Array(maxSegments * 3);
    let positionIndex = 0;
    let colorIndex = 0;

    function appendPathSegments(pathInfo) {
        if (!pathInfo || pathInfo.length < 2) return;
        const baseColor = new THREE.Color().setHSL(Math.random(), 0.8, 0.55);
        for (let i = 0; i < pathInfo.length - 1; i++) {
            if (positionIndex > linePositions.length - 6 || colorIndex > lineColors.length - 6) break;
            const start = pathInfo[i];
            const end = pathInfo[i + 1];

            linePositions[positionIndex++] = start.point.x;
            linePositions[positionIndex++] = start.point.y;
            linePositions[positionIndex++] = start.point.z;
            linePositions[positionIndex++] = end.point.x;
            linePositions[positionIndex++] = end.point.y;
            linePositions[positionIndex++] = end.point.z;

            let segmentColor = baseColor;
            if (lineColorMode === 'energy') {
                const energy = THREE.MathUtils.clamp(Math.abs(start.amplitude), 0, 1);
                segmentColor = new THREE.Color().setHSL(0.68, 0.95, 0.2 + energy * 0.5);
            }

            lineColors[colorIndex++] = segmentColor.r;
            lineColors[colorIndex++] = segmentColor.g;
            lineColors[colorIndex++] = segmentColor.b;
            lineColors[colorIndex++] = segmentColor.r;
            lineColors[colorIndex++] = segmentColor.g;
            lineColors[colorIndex++] = segmentColor.b;
        }
    }

    function processBatch() {
        const startRay = currentRay;
        const endRay = Math.min(currentRay + BATCH_SIZE, numRays);
        const batchStart = performance.now();

        for (let i = currentRay; i < endRay; i++) {
            vectors.origin.set(0, 0, 0);
            vectors.direction.randomDirection();

            let totalDistance = 0;
            const amplitudes = Object.fromEntries(freqBands.map(freq => [freq, 1.0]));

            const shouldVisualize = i < raysToVisualize;
            const pathInfo = shouldVisualize ? [{ point: vectors.origin.clone(), amplitude: amplitudes[visualizeBand] }] : null;

            for (let bounce = 0; bounce < MAX_BOUNCES; bounce++) {
                raycaster.set(vectors.origin, vectors.direction);

                roomIntersections.length = 0;
                receiverIntersections.length = 0;

                raycaster.intersectObject(state.roomMesh, false, roomIntersections);
                if (emitterMesh) {
                    raycaster.intersectObject(emitterMesh, false, receiverIntersections);
                }

                const receiverHit = receiverIntersections.length > 0;
                const roomHit = roomIntersections.length > 0;

                if (
                    receiverHit &&
                    (!roomHit || receiverIntersections[0].distance < roomIntersections[0].distance)
                ) {
                    const receiverIntersection = receiverIntersections[0];
                    if (receiverIntersection && receiverIntersection.distance > 0.001) {
                        totalDistance += receiverIntersection.distance;
                        const arrivalTime = totalDistance / speedOfSound;

                        freqBands.forEach(freq => {
                            arrivalsByBand[freq].push({
                                time: arrivalTime,
                                amplitude: amplitudes[freq]
                            });
                        });

                        if (pathInfo) {
                            pathInfo.push({
                                point: receiverIntersection.point.clone(),
                                amplitude: amplitudes[visualizeBand]
                            });
                        }

                        break;
                    }
                }

                if (!roomHit) break;

                const wallHit = roomIntersections[0];
                totalDistance += wallHit.distance;

                freqBands.forEach(freq => {
                    const absorption = absorptionCoeffs[freq] ?? 0;
                    amplitudes[freq] *= (1.0 - absorption);
                    if (amplitudes[freq] < 0) amplitudes[freq] = 0;
                });

                if (pathInfo) {
                    pathInfo.push({
                        point: wallHit.point.clone(),
                        amplitude: amplitudes[visualizeBand]
                    });
                }

                if (useRayRadiosity && histogramBins > 0 && bounce >= rrConfig.hybridBounceThreshold && emitterMesh) {
                    vectors.toReceiver.copy(wallHit.point).sub(emitterWorldPos);
                    const distanceToReceiver = Math.max(vectors.toReceiver.length(), Math.max(emitterRadius * 0.5, 0.01));
                    const timeToReceiver = (totalDistance + distanceToReceiver) / speedOfSound;

                    if (timeToReceiver <= rrConfig.maxTime) {
                        const invDistanceTerm = 1.0 / Math.max(4 * Math.PI * distanceToReceiver * distanceToReceiver, 1e-6);
                        const binIndex = Math.floor(timeToReceiver / rrConfig.histogramResolution);
                        if (binIndex < histogramBins) {
                            freqBands.forEach(freq => {
                                const amp = amplitudes[freq];
                                if (amp <= 0) return;
                                const diffuseEnergy = amp * amp * rrConfig.diffuseGain * invDistanceTerm * Math.max(rrConfig.scatteringCoeff, 1e-3);
                                if (diffuseEnergy > rrConfig.minEnergyThreshold) {
                                    rrHistograms[freq][binIndex] += diffuseEnergy;
                                    rrContributionCount++;
                                }
                            });
                        }
                    }
                }

                const faceNormal = wallHit.face?.normal ?? vectors.temp.set(0, 1, 0);
                const worldNormal = vectors.temp.copy(faceNormal)
                    .transformDirection(state.roomMesh.matrixWorld)
                    .normalize();
                const specularDir = vectors.specular.copy(vectors.direction).reflect(worldNormal);
                const scatteredDir = rrConfig.scatteringCoeff > 0 ? randomHemisphereDirection(worldNormal) : specularDir;

                vectors.direction.copy(specularDir)
                    .multiplyScalar(1 - rrConfig.scatteringCoeff)
                    .addScaledVector(scatteredDir, rrConfig.scatteringCoeff)
                    .normalize();

                vectors.temp.copy(vectors.direction).multiplyScalar(0.001);
                vectors.origin.copy(wallHit.point).add(vectors.temp);
            }

            if (pathInfo && pathInfo.length > 1) {
                appendPathSegments(pathInfo);
            }
        }

        currentRay = endRay;
        const batchTime = performance.now() - batchStart;
        const processed = endRay - startRay;
        const raysPerSecond = processed > 0 && batchTime > 0 ? Math.round(processed / (batchTime / 1000)) : 0;
        const earlyArrivals = Object.values(arrivalsByBand).reduce((sum, arr) => sum + arr.length, 0);

        if (currentRay < numRays) {
            const percent = Math.round((currentRay / numRays) * 100);
            setStatus(`Simulating (Main Thread)... ${percent}% (${raysPerSecond} rays/sec, ${earlyArrivals + rrContributionCount} events)`);
            if (window.requestIdleCallback) {
                requestIdleCallback(processBatch);
            } else {
                setTimeout(processBatch, 0);
            }
        } else {
            finalizeSimulation();
        }
    }

    function finalizeSimulation() {
        while (rayLinesGroup.children.length > 0) rayLinesGroup.remove(rayLinesGroup.children[0]);

        if (positionIndex > 0) {
            const lineGeometry = new THREE.BufferGeometry();
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions.slice(0, positionIndex), 3));
            lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors.slice(0, colorIndex), 3));
            const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6 });
            const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
            rayLinesGroup.add(lineSegments);
        }

        let lateArrivalCount = 0;
        if (useRayRadiosity && histogramBins > 0 && rrHistograms) {
            freqBands.forEach(freq => {
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
                arrivalsByBand[freq].sort((a, b) => a.time - b.time);
            });
            console.log(`Ray-radiosity histogram contributions: ${rrContributionCount}, synthesized pulses: ${lateArrivalCount}`);
        } else {
            freqBands.forEach(freq => {
                arrivalsByBand[freq].sort((a, b) => a.time - b.time);
            });
        }

        console.timeEnd('Main Thread Simulation');
        plotMultiBandImpulseResponse(arrivalsByBand, freqBands);
        if (dom.startButton) dom.startButton.disabled = false;
        const totalArrivals = Object.values(arrivalsByBand).reduce((s, a) => s + a.length, 0);
        const tailSummary = useRayRadiosity && lateArrivalCount ? `, ${lateArrivalCount} RR pulses` : '';
        setStatus(`Simulation complete: ${totalArrivals} arrivals${tailSummary}`);
        Math.random = restoreRandom;
        state.isSimulating = false;
    }

    processBatch();
}

// -----------------------------------------------------------------------------
// UI + events
// -----------------------------------------------------------------------------
function setupEventListeners() {

    if (dom.useWebWorker) {
        dom.useWebWorker.addEventListener('change', () => {
            const enabled = dom.useWebWorker.checked;
            setStatus(enabled ? 'Web Worker enabled' : 'Main thread mode');
        });
    }

    if (dom.realtimeSimToggle) {
        dom.realtimeSimToggle.addEventListener('change', () => {
            state.realtimeSimEnabled = dom.realtimeSimToggle.checked;
            setStatus(state.realtimeSimEnabled ? 'Realtime preview enabled' : 'Realtime preview disabled');
        });
    }

    const rrInputs = [
        dom.rrEnabled,
        dom.rrScattering,
        dom.rrHistogramResolution,
        dom.rrMaxTime,
        dom.rrHybridBounce,
        dom.rrPoissonDensity,
        dom.rrDiffuseGain,
        dom.rrMinEnergy
    ].filter(Boolean);
    rrInputs.forEach(input => {
        const eventName = input.type === 'checkbox' ? 'change' : 'input';
        input.addEventListener(eventName, updateRayRadiosityOutputs);
    });
    updateRayRadiosityOutputs();

    // Room controls that should trigger an immediate preview when realtime is enabled
    const realtimeInputs = [
        dom.baseRadius,
        dom.noiseFrequency,
        dom.noiseAmplitude,
        document.getElementById('absorption200'),
        document.getElementById('absorption800'),
        document.getElementById('absorption3200'),
        document.getElementById('absorption10000')
    ].filter(Boolean);
    realtimeInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (state.realtimeSimEnabled && !state.isSimulating) {
                runRealtimeSimulation();
            }
        });
    });

    if (dom.resetButton) {    if (dom.samplePitchSlider) {
        const outputs = document.querySelectorAll('#samplePitch-val');
        outputs.forEach(el => el.textContent = formatPitchLabel(parseFloat(dom.samplePitchSlider.value || '0')));
        dom.samplePitchSlider.addEventListener('input', () => {
            const value = parseFloat(dom.samplePitchSlider.value || '0');
            outputs.forEach(el => el.textContent = formatPitchLabel(value));
            scheduleSamplePitchUpdate(false, 'slider');
        });
    }

    if (dom.irStretchSlider) {
        const outputs = document.querySelectorAll('#irStretch-val');
        outputs.forEach(el => el.textContent = formatStretchLabel(parseFloat(dom.irStretchSlider.value || '1')));
        dom.irStretchSlider.addEventListener('input', (event) => {
            event.stopImmediatePropagation();
            const value = parseFloat(dom.irStretchSlider.value || '1');
            outputs.forEach(el => el.textContent = formatStretchLabel(value));
            scheduleImpulseResponseStretch(false, 'slider');
        });
    }

    if (dom.irPreDelaySlider) {
        const outputs = document.querySelectorAll('#irPreDelay-val');
        const updateLabel = () => {
            const value = getPreDelayMilliseconds();
            outputs.forEach(el => el.textContent = formatPreDelayLabel(value));
        };
        updateLabel();
        dom.irPreDelaySlider.addEventListener('input', (event) => {
            event.stopImmediatePropagation();
            updateLabel();
        });
        dom.irPreDelaySlider.addEventListener('change', (event) => {
            event.stopImmediatePropagation();
            updateLabel();
            rebuildImpulseResponseFromSource('preDelay', true);
        });
    }


        dom.resetButton.addEventListener('click', () => {
            resetControlsToDefaults();
        });
    }

    if (dom.downloadBtn) {
        dom.downloadBtn.addEventListener('click', () => {
            if (!impulseResponseBuffer) return;
            const blob = audioBufferToWav(impulseResponseBuffer);
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            const seedValue = dom.randomSeed?.value ?? 'impulse-response';
            a.download = `IR_${seedValue}.wav`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        });
    }

    document.querySelectorAll('input[type="range"]').forEach(slider => {
        const display = document.getElementById(`${slider.id}-val`);
        if (!display) return;
        if (slider.id === 'irStretch' || slider.id === 'irPreDelay') return;
        display.textContent = slider.value;
        slider.addEventListener('input', () => { display.textContent = slider.value; });
    });

    if (dom.startButton) {
        dom.startButton.addEventListener('click', () => {
            if (!audioContext) {
                console.warn('AudioContext not ready; cannot start simulation.');
                return;
            }
            const useWebWorker = dom.useWebWorker?.checked ?? true;

            if (useWebWorker && workerInstance) {
                runSimulationWorker();
            } else {
                runSimulationMainThread();
            }
        });
    }


    if (dom.sampleAudioSelect) {
        dom.sampleAudioSelect.addEventListener('change', () => {
            if (dom.sampleAudioSelect.value) {
                loadSelectedSample(dom.sampleAudioSelect.value);
            }
        });
    }

    if (dom.playSampleBtn) {
    dom.playSampleBtn.addEventListener('click', () => {
        if (!sampleBuffer) return;
        if (sampleSourceNode) {
            stopSamplePlayback();
            return;
        }
        if (!audioContext) {
            console.warn('AudioContext not ready yet.');
            return;
        }
        
        const playbackBuffer = getCurrentSamplePlaybackBuffer();
        if (!playbackBuffer) {
            console.warn('Sample unavailable for playback.');
            return;
        }

        sampleSourceNode = audioContext.createBufferSource();
        sampleSourceNode.buffer = playbackBuffer;
        
        // Connect to both dry and wet (convolver) paths
        sampleSourceNode.connect(dryGain);
        sampleSourceNode.connect(convolver);
        
        sampleSourceNode.start();
        dom.playSampleBtn.textContent = 'Stop Sample';

        setStatus('Playing sample…');

        sampleSourceNode.onended = () => {
            stopSamplePlayback();
            setStatus('Sample finished.');
        };
    });
    }

    if (dom.stopSampleBtn) {
        dom.stopSampleBtn.addEventListener('click', () => stopSamplePlayback());
    }

    let geometryNeedsWorkerUpdate = false;
    let realtimeSimTimeout = null;

    // Helper to mark geometry as needing worker update
    function markGeometryForWorkerUpdate() {
        geometryNeedsWorkerUpdate = true;
    }

    // Helper to send pending geometry update to worker
    function sendPendingGeometryUpdate() {
        if (geometryNeedsWorkerUpdate && workerInstance) {
            updateWorkerGeometry();
            geometryNeedsWorkerUpdate = false;
        }

        if (state.realtimeSimEnabled) {
            clearTimeout(realtimeSimTimeout);
            realtimeSimTimeout = setTimeout(() => {
                runRealtimeSimulation();
            }, 300);
        }
    }

    if (dom.baseRadius) {
        dom.baseRadius.addEventListener('input', () => {
            rebuildRoom(); // Update visual immediately
            markGeometryForWorkerUpdate();
        });
        dom.baseRadius.addEventListener('change', sendPendingGeometryUpdate);
        dom.baseRadius.addEventListener('mouseup', sendPendingGeometryUpdate);
        dom.baseRadius.addEventListener('touchend', sendPendingGeometryUpdate);
    }
    
    if (dom.noiseFrequency) {
        dom.noiseFrequency.addEventListener('input', () => {
            rebuildRoom();
            markGeometryForWorkerUpdate();
        });
        dom.noiseFrequency.addEventListener('change', sendPendingGeometryUpdate);
        dom.noiseFrequency.addEventListener('mouseup', sendPendingGeometryUpdate);
        dom.noiseFrequency.addEventListener('touchend', sendPendingGeometryUpdate);
    }
    
    if (dom.noiseAmplitude) {
        dom.noiseAmplitude.addEventListener('input', () => {
            rebuildRoom();
            markGeometryForWorkerUpdate();
        });
        dom.noiseAmplitude.addEventListener('change', sendPendingGeometryUpdate);
        dom.noiseAmplitude.addEventListener('mouseup', sendPendingGeometryUpdate);
        dom.noiseAmplitude.addEventListener('touchend', sendPendingGeometryUpdate);
    }

    if (dom.randomSeed) {
        dom.randomSeed.addEventListener('change', () => {
            applySeed(dom.randomSeed.value);
            rebuildRoom();
            if (workerInstance) {
                updateWorkerGeometry();
            }
            if (state.realtimeSimEnabled) {
                setTimeout(() => runRealtimeSimulation(), 300);
            }
        });
    }

    if (dom.randomizeSeedBtn && dom.randomSeed) {
        dom.randomizeSeedBtn.addEventListener('click', () => {
            dom.randomSeed.value = (Date.now() * Math.random()).toString(36).substr(2, 9);
            applySeed(dom.randomSeed.value);
            rebuildRoom();
            // Immediate update for seed changes
            if (workerInstance) {
                updateWorkerGeometry();
            }
            if (state.realtimeSimEnabled) {
                setTimeout(() => runRealtimeSimulation(), 300);
            }
        });
    }
}

function setupLogSliders() {
    if (dom.drySlider && dom.dryOutput) {
        drySliderCtrl = initLogSlider({
            sliderEl: dom.drySlider,
            outputEl: dom.dryOutput,
            minDb: -60,
            maxDb: 12,
            defaultDb: 0
        });
        
        dom.drySlider.addEventListener('input', () => {
            if (dryGain && drySliderCtrl) {
                const db = drySliderCtrl.getDb();
                dryGain.gain.value = dbToLinear(db);
                console.log('Dry gain set to', dryGain.gain.value, 'from', db, 'dB');
            }
        });
    }
    
    if (dom.wetSlider && dom.wetOutput) {
        wetSliderCtrl = initLogSlider({
            sliderEl: dom.wetSlider,
            outputEl: dom.wetOutput,
            minDb: -60,
            maxDb: 12,
            defaultDb: -6
        });
        
        dom.wetSlider.addEventListener('input', () => {
            if (wetGain && wetSliderCtrl) {
                const db = wetSliderCtrl.getDb();
                wetGain.gain.value = dbToLinear(db);
                console.log('Wet gain set to', wetGain.gain.value, 'from', db, 'dB');
            }
        });
    }
}


function setupCollapsibleSections() {
    const triggers = document.querySelectorAll('.section-toggle');
    triggers.forEach((trigger) => {
        if (trigger.dataset.section === 'scene') return;
        const section = trigger.closest('.panel-section');
        if (!section) return;
        const attr = trigger.getAttribute('aria-expanded');
        const initialExpanded = attr ? attr === 'true' : section.classList.contains('is-open');
        updateSectionState(section, trigger, initialExpanded);
        trigger.addEventListener('click', () => {
            const currentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';
            updateSectionState(section, trigger, !currentlyExpanded);
        });
    });
}

function updateSectionState(section, trigger, expanded) {
    section.classList.toggle('is-open', expanded);
    section.classList.toggle('collapsed', !expanded);
    trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

function setupSplash() {
    const splash = document.getElementById('splashScreen');
    const enterBtn = document.getElementById('enterAppBtn');
    if (!splash || !enterBtn) return;

    enterBtn.addEventListener('click', async () => {
        if (audioContext?.state === 'suspended') await audioContext.resume();
        await startApp();
        splash.classList.add('hidden');
    });
}

// -----------------------------------------------------------------------------
// Lifecycle
// -----------------------------------------------------------------------------
async function init() {
    if (state.initialized) return;

    cacheDom();
    setupScene();
    setupLogSliders();
    setupEventListeners();
    setupCollapsibleSections();
    setupSplash();

    await initShader();
    applySeed(dom.randomSeed?.value);
    buildRoomGeometry(); // Build geometry but DON'T send to worker yet
    initWorker(); // Worker will call updateWorkerGeometry() when ready
    await populateSampleDropdown();

    animate();
    state.initialized = true;
}

async function startApp() {
    if (!state.initialized) await init();
    
    initAudioContext();
    
    if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
    }

    if (window._pendingSampleBuffer && audioContext) {
        try {
            sampleBuffer = await audioContext.decodeAudioData(window._pendingSampleBuffer);
            pitchedSampleBuffer = sampleBuffer;
            scheduleSamplePitchUpdate(true, 'load');
            delete window._pendingSampleBuffer;
            if (dom.playSampleBtn) dom.playSampleBtn.disabled = false;
            setStatus('Sample ready');
        } catch (err) {
            console.error('Failed to decode pending sample:', err);
        }
    }

    // Run initial realtime simulation after geometry is ready
    if (state.workerGeometryReady || !workerInstance) {
        runInitialSimulation();
    } else {
        // Wait for worker geometry to be ready
        const checkGeometry = setInterval(() => {
            if (state.workerGeometryReady) {
                clearInterval(checkGeometry);
                runInitialSimulation();
            }
        }, 100);
        
        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkGeometry);
            if (!state.workerGeometryReady) {
                console.warn('Geometry not ready in time, running main thread simulation');
                runInitialSimulation();
            }
        }, 5000);
    }
}

function runInitialSimulation() {
    setStatus('Generating initial impulse response...');
    
    const useWebWorker = dom.useWebWorker?.checked ?? true;
    const initialParams = {
        numRays: 2000, // Quick but decent quality
        absorptionCoeffs: {
            200: getNumericInputValue('absorption200', 0.1),
            800: getNumericInputValue('absorption800', 0.15),
            3200: getNumericInputValue('absorption3200', 0.2),
            10000: getNumericInputValue('absorption10000', 0.25)
        },
        freqBands: CONFIG.FREQ_BANDS,
        seed: dom.randomSeed?.value ?? '',
        speedOfSound: CONFIG.SPEED_OF_SOUND,
        maxBounces: state.maxBounces,
        batchSize: 5000
    };

    if (useWebWorker && workerInstance && state.workerGeometryReady) {
        state.isSimulating = true;
        workerInstance.postMessage({
            type: 'simulate',
            data: initialParams
        });
    } else {
        runQuickMainThreadSimulation(initialParams);
    }
}

function animate() {
    requestAnimationFrame(animate);

    if (stats) stats.update();
    if (controls) controls.update();
    updateRendererSize();
    if (renderer && scene && camera) renderer.render(scene, camera);

    if (amplitudeMeter && peakEnvelope && rmsEnvelope && state.shaderMaterial) {
        const peak = Math.sqrt(amplitudeMeter.getPeak());
        const smoothPeak = peakEnvelope.process(peak);
        const rms = Math.sqrt(amplitudeMeter.getRMS());
        rmsEnvelope.process(rms);

        state.shaderMaterial.uniforms.uTime.value = performance.now() * 0.0004 * (1 + smoothPeak * 15);
    }
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------
function cleanup() {
    if (workerInstance) workerInstance.terminate();
}

// -----------------------------------------------------------------------------
// Bootstrap
// -----------------------------------------------------------------------------
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('beforeunload', cleanup);
