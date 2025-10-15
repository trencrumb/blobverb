import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast, INTERSECTED } from 'three-mesh-bvh';

import WaveSurfer from 'wavesurfer.js';
import Spectrogram from 'wavesurfer.js/dist/plugins/spectrogram.esm.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.esm.js';

import { createAmplitudeMeter } from './amplitude-meter.js';
import { EnvelopeFollower } from './envelope-follower.js';

import { createNoise3D } from 'simplex-noise';
import seedrandom from 'seedrandom';
import { WEQ8Runtime } from 'weq8';
import 'weq8/ui';

import noise3DGLSL from './shaders/noise3D.glsl?raw';
import vertexSrc from './shaders/vertex.glsl?raw';
import fragmentSrc from './shaders/fragment.glsl?raw';


THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const app = {
    config: {
        CANVAS_TARGET_ID: 'threeViewport',
        INITIAL_CAMERA_DISTANCE: 35,
        DEFAULT_MAX_BOUNCES: 100,
        SPEED_OF_SOUND: 343,
        EMITTER_RADIUS: 0.5
    },
    dom: {},
    three: {
        raycaster: new THREE.Raycaster(),
        vectors: {
            origin: new THREE.Vector3(),
            direction: new THREE.Vector3(),
            temp: new THREE.Vector3()
        },
        container: null,
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
        stats: null,
        emitterMesh: null,
        rayLinesGroup: null
    },
    audio: {
        context: null,
        convolver: null,
        masterGain: null,
        amplitudeMeter: null,
        rmsEnvelope: null,
        peakEnvelope: null,
        impulseResponseBuffer: null,
        impulseResponseSource: null,
        wavesurfer: null
    },
    state: {
        initialized: false,
        isSimulating: false,
        shaderMaterial: null,
        roomMesh: null,
        baseVertexDirections: null,
        noise3D: createNoise3D(),
        sampleBuffer: null,
        sampleSourceNode: null,
        maxBounces: 100
    },
    worker: {
        instance: null
    }
};

app.state.maxBounces = app.config.DEFAULT_MAX_BOUNCES;
app.three.raycaster.firstHitOnly = true;

const selectors = {
    baseRadius: '#baseRadius',
    noiseFrequency: '#noiseFreq',
    noiseAmplitude: '#noiseAmp',
    randomSeed: '#randomSeed',
    status: '#status',
    startButton: '#startButton'
};

app.dom = Object.fromEntries(
    Object.entries(selectors).map(([key, selector]) => [key, document.querySelector(selector)])
);

app.dom.status = app.dom.status || document.getElementById('status');
app.dom.downloadBtn = document.getElementById('downloadBtn');
app.dom.randomizeSeedBtn = document.getElementById('randomizeSeedBtn');
app.dom.phaseToggle = document.getElementById('phaseToggle');
app.dom.raysToVisualizeSlider = document.getElementById('raysToVisualize');
app.dom.lineColorModeSelect = document.getElementById('lineColorMode');
app.dom.sampleAudioSelect = document.getElementById('sample-audio');
app.dom.playSampleBtn = document.getElementById('playSampleBtn');
app.dom.stopSampleBtn = document.getElementById('stopSampleBtn');

if (app.dom.downloadBtn) {
    app.dom.downloadBtn.disabled = true;
}

function setStatus(message) {
    if (app.dom.status) {
        app.dom.status.textContent = message;
    }
}

function getInputElement(id) {
    return document.getElementById(id);
}

function getNumericInputValue(id, fallback = 0) {
    const element = getInputElement(id);
    if (!element) return fallback;
    const value = parseFloat(element.value);
    return Number.isFinite(value) ? value : fallback;
}

function getIntegerInputValue(id, fallback = 0) {
    const element = getInputElement(id);
    if (!element) return fallback;
    const value = parseInt(element.value, 10);
    return Number.isFinite(value) ? value : fallback;
}

app.three.container = document.getElementById(app.config.CANVAS_TARGET_ID);
app.three.scene = new THREE.Scene();
app.three.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
app.three.camera.position.set(0, 0, app.config.INITIAL_CAMERA_DISTANCE);

app.three.renderer = new THREE.WebGLRenderer({ antialias: true });
app.three.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
if (app.three.container) {
    app.three.container.appendChild(app.three.renderer.domElement);
    app.three.renderer.domElement.style.display = 'block';
    app.three.renderer.domElement.style.width = '100%';
    app.three.renderer.domElement.style.height = '100%';
} else {
    console.warn('Three.js viewport container not found; falling back to document.body');
    document.body.appendChild(app.three.renderer.domElement);
    app.three.renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateRendererSize(force = false) {
    const width = app.three.container ? app.three.container.clientWidth : window.innerWidth;
    const height = app.three.container ? app.three.container.clientHeight : window.innerHeight;
    if (width === 0 || height === 0) return;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    const canvas = app.three.renderer.domElement;
    const needResize = force || canvas.width !== Math.floor(width * pixelRatio) || canvas.height !== Math.floor(height * pixelRatio);
    if (needResize) {
        app.three.renderer.setPixelRatio(pixelRatio);
        app.three.renderer.setSize(width, height);
        app.three.camera.aspect = width / height;
        app.three.camera.updateProjectionMatrix();
    }
}

updateRendererSize(true);
window.addEventListener('resize', () => updateRendererSize(true));

app.three.controls = new OrbitControls(app.three.camera, app.three.renderer.domElement);

app.three.scene.add(new THREE.AmbientLight(0xffffff, 0.4));
app.three.scene.add(new THREE.PointLight(0xffffff, 1.5));

app.three.stats = new Stats();
app.three.stats.dom.style.position = 'absolute';
app.three.stats.dom.style.top = '8px';
app.three.stats.dom.style.left = '8px';
app.three.stats.dom.style.pointerEvents = 'none';
app.three.stats.dom.style.zIndex = '2';
if (app.three.container) {
    app.three.container.appendChild(app.three.stats.dom);
} else {
    app.three.stats.dom.style.position = 'fixed';
    document.body.appendChild(app.three.stats.dom);
}

/**
 * Shader
 */
function injectAmplifierUniforms(material) {
    if (!material?.uniforms) return;
    const frequencyInput = app.dom.noiseFrequency;
    const amplitudeInput = app.dom.noiseAmplitude;
    if (frequencyInput) {
        material.uniforms.uFrequency.value = parseFloat(frequencyInput.value);
    }
    if (amplitudeInput) {
        material.uniforms.uAmplitude.value = parseFloat(amplitudeInput.value);
    }
    material.needsUpdate = true;
}

async function createShaderMaterial() {
    console.log('Loading shaders...');
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

    injectAmplifierUniforms(material);
    console.log('Shader material created successfully');
    return material;
}

async function initShader() {
    app.state.shaderMaterial = await createShaderMaterial();
}

/**
 * Geometry
 */
app.three.emitterMesh = new THREE.Mesh(
    new THREE.SphereGeometry(app.config.EMITTER_RADIUS, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffd700, emissiveIntensity: 0.5 })
);
app.three.scene.add(app.three.emitterMesh);

app.three.rayLinesGroup = new THREE.Group();
app.three.scene.add(app.three.rayLinesGroup);

function applySeed(seed) {
    const rng = seedrandom(seed || undefined);
    app.state.noise3D = createNoise3D(rng);
}

function buildRoomGeometry() {
    if (!app.state.roomMesh) {
        const geometry = new THREE.IcosahedronGeometry(1, 20);
        app.state.roomMesh = new THREE.Mesh(
            geometry,
            app.state.shaderMaterial || new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
        );
        app.three.scene.add(app.state.roomMesh);
    } else if (app.state.shaderMaterial && app.state.roomMesh.material !== app.state.shaderMaterial) {
        app.state.roomMesh.material = app.state.shaderMaterial;
    }

    const geometry = app.state.roomMesh.geometry;
    app.three.rayLinesGroup.clear();

    const baseRadiusRaw = parseFloat(app.dom.baseRadius?.value ?? '1');
    const noiseFreqRaw = parseFloat(app.dom.noiseFrequency?.value ?? '0.2');
    const noiseAmpRaw = parseFloat(app.dom.noiseAmplitude?.value ?? '0.2');

    const baseRadius = Math.max(Number.isFinite(baseRadiusRaw) ? baseRadiusRaw : 1, 0.01);
    const noiseFreq = Number.isFinite(noiseFreqRaw) ? noiseFreqRaw : 0.2;
    const noiseAmp = Number.isFinite(noiseAmpRaw) ? noiseAmpRaw : 0.2;

    const positionAttribute = geometry.getAttribute('position');

    if (!app.state.baseVertexDirections || app.state.baseVertexDirections.length !== positionAttribute.count * 3) {
        app.state.baseVertexDirections = new Float32Array(positionAttribute.count * 3);
        const dir = new THREE.Vector3();
        for (let i = 0; i < positionAttribute.count; i++) {
            dir.fromBufferAttribute(positionAttribute, i).normalize();
            const idx = i * 3;
            app.state.baseVertexDirections[idx] = dir.x;
            app.state.baseVertexDirections[idx + 1] = dir.y;
            app.state.baseVertexDirections[idx + 2] = dir.z;
        }
    }

    const baseVec = new THREE.Vector3();
    const displaced = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
        const idx = i * 3;
        baseVec.set(
            app.state.baseVertexDirections[idx],
            app.state.baseVertexDirections[idx + 1],
            app.state.baseVertexDirections[idx + 2]
        );

        displaced.copy(baseVec).multiplyScalar(baseRadius);

        const noiseValue = app.state.noise3D(
            baseVec.x * noiseFreq,
            baseVec.y * noiseFreq,
            baseVec.z * noiseFreq
        );
        const displacement = noiseAmp * noiseValue;

        displaced.addScaledVector(baseVec, displacement);

        positionAttribute.setXYZ(i, displaced.x, displaced.y, displaced.z);
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.disposeBoundsTree?.();
    geometry.computeBoundsTree();
}

function rebuildRoom() {
    buildRoomGeometry();
    updateWorkerGeometry();
    injectAmplifierUniforms(app.state.shaderMaterial);
}

/**
 * Worker
 */
function initWorker() {
    if (app.worker.instance) app.worker.instance.terminate();

    try {
        app.worker.instance = new Worker(new URL('./raytracing-worker.js', import.meta.url), { type: 'module' });

        app.worker.instance.onmessage = (event) => {
            const { type } = event.data;
            switch (type) {
                case 'ready':
                    console.log('Modern ES Module BVH worker initialized');
                    updateWorkerGeometry();
                    break;
                case 'geometrySet':
                    console.log('Worker geometry updated BVH');
                    break;
                case 'progress': {
                    const progress = Math.round(event.data.progress * 100);
                    const rps = event.data.raysPerSecond || 0;
                    const arrivals = event.data.currentArrivals || 0;
                    setStatus(`Simulating (Modern BVH Worker)... ${progress}% (${rps} rays/sec, ${arrivals} arrivals)`);
                    break;
                }
                case 'complete':
                    console.log(`Modern BVH Worker simulation complete: ${event.data.totalArrivals} arrivals`);
                    console.log(`Performance: ${event.data.avgRaysPerSecond} rays/sec average`);
                    console.timeEnd('Worker Simulation');
                    if (Array.isArray(event.data.arrivals)) {
                        plotImpulseResponse(event.data.arrivals);
                    } else {
                        console.warn('Worker completed without arrivals payload; skipping IR plotting.');
                    }
                    if (app.dom.startButton) {
                        app.dom.startButton.disabled = false;
                    }
                    app.state.isSimulating = false;
                    setStatus(`Complete: ${event.data.totalArrivals} arrivals (${event.data.avgRaysPerSecond} rays/sec)`);
                    break;
                case 'error':
                    console.error('Modern BVH Worker error:', event.data.error);
                    fallbackToSimpleBVH();
                    break;
                default:
                    break;
            }
        };

        app.worker.instance.onerror = (error) => {
            console.error('Modern worker failed to load:', error);
            fallbackToSimpleBVH();
        };

        app.worker.instance.postMessage({ type: 'init' });
    } catch (error) {
        console.error('Failed to create modern worker:', error);
        fallbackToSimpleBVH();
    }
}

function fallbackToSimpleBVH() {
    console.warn('Falling back: disabling worker and using main-thread simulation.');
    if (app.worker.instance) {
        try { app.worker.instance.terminate(); } catch (err) {
            console.error('Failed to terminate worker cleanly:', err);
        }
    }
    app.worker.instance = null;
    const useWebWorker = document.getElementById('useWebWorker');
    if (useWebWorker) useWebWorker.checked = false;
    setStatus('Worker unavailable. Using main thread.');
    if (app.dom.startButton) {
        app.dom.startButton.disabled = false;
    }
    app.state.isSimulating = false;
}

function updateWorkerGeometry() {
    if (!app.worker.instance || !app.state.roomMesh) return;

    const geometry = app.state.roomMesh.geometry;
    const positions = geometry.attributes.position.array;
    const normals = geometry.attributes.normal.array;
    const indices = geometry.index ? geometry.index.array : null;

    app.worker.instance.postMessage({
        type: 'setGeometry',
        data: {
            roomGeometry: {
                positions: Array.from(positions),
                normals: Array.from(normals),
                indices: indices ? Array.from(indices) : null
            },
            emitterRadius: app.config.EMITTER_RADIUS,
            emitterPosition: { x: 0, y: 0, z: 0 }
        }
    });
}

async function init() {
    if (app.state.initialized) return;
    try {
        await initShader();
        const seedValue = app.dom.randomSeed?.value;
        applySeed(seedValue || undefined);
        rebuildRoom();
        initWorker();
        animate();
        app.state.initialized = true;
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

// =================================================================
// ==  Audio Context and Impulse Response Generation
// =================================================================

async function startApp() {
    if (!app.state.initialized) {
        await init();
    }
    initAudioContext();
    if (app.audio.context && app.audio.context.state === 'suspended') {
        await app.audio.context.resume();
    }
}
function initAudioContext() {
    if (app.audio.context) return;
    app.audio.context = new (window.AudioContext || window.webkitAudioContext)();
    app.audio.convolver = app.audio.context.createConvolver();
    app.audio.masterGain = app.audio.context.createGain();
    app.audio.amplitudeMeter = createAmplitudeMeter(app.audio.context, app.audio.masterGain, { fftSize: 512, smoothingTimeConstant: 1 });

    app.audio.convolver.connect(app.audio.masterGain);
    app.audio.masterGain.connect(app.audio.context.destination);
    console.log(`AudioContext Initialized. It's a fine Thursday afternoon here in London.`);
    const weq8 = new WEQ8Runtime(app.audio.context);
    app.audio.convolver.connect(weq8.input);
    weq8.connect(app.audio.masterGain);
    const weq8UI = document.querySelector('weq8-ui');
    if (weq8UI) {
        weq8UI.runtime = weq8;
    }
}

function createIRAudioBuffer(arrivals, sampleRate) {
    if (!app.audio.context) {
        initAudioContext();
    }
    const ctx = app.audio.context;
    sampleRate = sampleRate || ctx.sampleRate;

    if (arrivals.length === 0) {
        // Return a short, silent buffer to avoid errors with empty data
        return ctx.createBuffer(1, 1, sampleRate);
    }
    
    const maxTime = arrivals.reduce((max, arr) => Math.max(max, arr.time), 0);
    const tailSeconds = 0.5;
    const minDuration = 1;
    const duration = Math.max(maxTime + tailSeconds, minDuration);
    const bufferLength = Math.ceil(duration * sampleRate);
    const irBuffer = ctx.createBuffer(1, bufferLength, sampleRate);
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

    const maxSample = Math.max(...bufferData.map(Math.abs));
    if (maxSample > 1.0) {
        for (let i = 0; i < bufferData.length; i++) {
            bufferData[i] /= maxSample;
        }
    }
    
    return irBuffer;
}
function initWaveSurfer() {
    if (app.audio.wavesurfer) {
        app.audio.wavesurfer.destroy();
    }

    initAudioContext();

    const waveformContainer = document.querySelector('#waveform');
    if (!waveformContainer) {
        console.error('Waveform container #waveform not found');
        return null;
    }
    waveformContainer.innerHTML = '';
    
    try {

        const topTimeline = TimelinePlugin.create({
            height: 10,
            insertPosition: 'beforebegin',
            timeInterval: 0.5,
            primaryLabelInterval: 0.05,
            style: {
                fontSize: '10px',
                color: '#2D5B88',
            },
        });

        const ws = WaveSurfer.create({
            container: waveformContainer,
            waveColor: 'rgb(200, 100, 0)',
            progressColor: 'rgb(100, 50, 0)',
            height: 100,
            sampleRate: app.audio.context ? app.audio.context.sampleRate : 44100,
            interact: true,
            dragToSeek: true,
            plugins: [topTimeline],

        });

        ws.registerPlugin(
            Spectrogram.create({
                height: 100,
                scale: 'linear',
                useWebWorker: true,
                windowFunc: 'hann',
                fftSamples: 1024,

            })
        );

        const audioElement = ws.getMediaElement();
        app.audio.impulseResponseSource = app.audio.context.createMediaElementSource(audioElement);
        app.audio.impulseResponseSource.connect(app.audio.masterGain);
        app.audio.rmsEnvelope = new EnvelopeFollower({ attack: 0.1, release: 1, sampleRate: 120 });
        app.audio.peakEnvelope = new EnvelopeFollower({ attack: 0.1, release: 1, sampleRate: 120 });
        ws.on('error', (err) => {
            console.error('WaveSurfer error:', err);
        });
        
        ws.on('click', () => {
            ws.play();
        });

        return ws;
    } catch (error) {
        console.error('Error initializing WaveSurfer:', error);
        return null;
    }
}


function plotImpulseResponse(arrivals) {
    app.audio.wavesurfer = initWaveSurfer();
    const ws = app.audio.wavesurfer;
    if (!ws) return;

    if (arrivals.length === 0) {
        return; // initWaveSurfer already cleared the view
    }

    initAudioContext();

    const maxAbsAmplitude = arrivals.reduce((max, arr) => Math.max(max, Math.abs(arr.amplitude)), 0);
    const headroom = 0.988;
    const normalizedArrivals = maxAbsAmplitude > 0 ? 
        arrivals.map(arr => ({ ...arr, amplitude: (arr.amplitude / maxAbsAmplitude) * headroom })) : 
        arrivals;

    app.audio.impulseResponseBuffer = createIRAudioBuffer(normalizedArrivals);

    if (app.audio.impulseResponseBuffer && app.audio.convolver) {
        app.audio.convolver.buffer = app.audio.impulseResponseBuffer;
        if (app.dom.downloadBtn) {
            app.dom.downloadBtn.disabled = false;
        }
        setStatus('Impulse Response loaded! Ready for auralization.');

        const blob = audioBufferToWav(app.audio.impulseResponseBuffer);
        if (blob) {
            ws.load(URL.createObjectURL(blob));
        } else {
            console.error('Failed to create WAV blob from AudioBuffer');
        }
    }
}

function audioBufferToWav(aBuffer) {
    let numOfChan = aBuffer.numberOfChannels,
        length = aBuffer.length * numOfChan * 2 + 44,
        buffer = new ArrayBuffer(length),
        view = new DataView(buffer),
        channels = [],
        i, sample,
        offset = 0,
        pos = 0;

    // write WAVE header
    setUint32(0x46464952); // "RIFF"
    setUint32(length - 8); // file length - 8
    setUint32(0x45564157); // "WAVE"

    setUint32(0x20746d66); // "fmt " chunk
    setUint32(16); // length = 16
    setUint16(1); // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(aBuffer.sampleRate);
    setUint32(aBuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2); // block-align
    setUint16(16); // 16-bit

    setUint32(0x61746164); // "data" - chunk
    setUint32(length - pos - 4); // chunk length

    function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
    }

    function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
    }

    // write interleaved data
    for (i = 0; i < aBuffer.numberOfChannels; i++)
        channels.push(aBuffer.getChannelData(i));

    while (pos < length) {
        for (i = 0; i < numOfChan; i++) { // interleave channels
            sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
            sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
            view.setInt16(pos, sample, true); // write 16-bit sample
            pos += 2;
        }
        offset++ // next source sample
    }

    return new Blob([buffer], { type: "audio/wav" });
}

function getVolume(mesh, worldSpace = true) {
    if (!mesh || !mesh.geometry) return 0;
    const geometry = mesh.geometry;
    if (!geometry.boundsTree) {
        geometry.computeBoundsTree({ setBoundingBox: false });
    }
    const bvh = geometry.boundsTree;
    const tmp = new THREE.Vector3();
    let vol6 = 0;
    bvh.shapecast({
        intersectsBounds: () => INTERSECTED,
        intersectsTriangle: (tri) => {
            // Accumulate 6x signed volume contribution of tetrahedron (0, a, b, c)
            tmp.crossVectors(tri.b, tri.c);
            vol6 += tri.a.dot(tmp);
            return false;
        }
    });
    let volume = vol6 / 6;
    if (worldSpace) {
        // Multiply by |det(linear part of matrixWorld)| to account for scaling/shear
        const e = this.targetMesh.matrixWorld.elements;
        const a11 = e[0], a12 = e[4], a13 = e[8];
        const a21 = e[1], a22 = e[5], a23 = e[9];
        const a31 = e[2], a32 = e[6], a33 = e[10];
        const det = a11 * (a22 * a33 - a23 * a32)
                  - a12 * (a21 * a33 - a23 * a31)
                  + a13 * (a21 * a32 - a22 * a31);
        volume *= Math.abs(det);
    }
    return Math.abs(volume);
}

function calculateSurfaceArea(mesh, worldSpace = true) {
    if (!mesh || !mesh.geometry) return 0;
    const geometry = mesh.geometry;
    if (!geometry.boundsTree) {
        geometry.computeBoundsTree({ setBoundingBox: false });
    }
    const bvh = geometry.boundsTree;
    let totalArea = 0;
    // Use BVH to iterate through all triangles efficiently
    bvh.shapecast({
        intersectsBounds: () => INTERSECTED,
        intersectsTriangle: (tri) => {
            // Calculate triangle area using cross product: |AB × AC| / 2
            const ab = new THREE.Vector3().subVectors(tri.b, tri.a);
            const ac = new THREE.Vector3().subVectors(tri.c, tri.a);
            const cross = new THREE.Vector3().crossVectors(ab, ac);
            const area = cross.length() * 0.5;
            
            totalArea += area;
            return false; // Continue traversal
        }
    });
    if (worldSpace) {
        // For surface area, we need to account for scaling
        // Surface area scales by the square of the scale factor
        const scale = this.targetMesh.scale.x; // Assuming uniform scaling
        totalArea *= scale * scale;
    }
    return totalArea;
}




// =================================================================
// ==  UI Event Listeners & Controls
// =================================================================


/*
audioUpload.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setStatus('Decoding...');
    playStopBtn.disabled = true;
    try {
        const arrayBuffer = await file.arrayBuffer();
        uploadedAudioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        playStopBtn.disabled = false;
        playStopBtn.textContent = 'Play Uploaded Audio';
    setStatus(`File "${file.name}" loaded.`);
    } catch (e) {
    setStatus('Error decoding file.');
        console.error(e);
    }
});*/



if (app.dom.downloadBtn) {
    app.dom.downloadBtn.addEventListener('click', () => {
        if (!app.audio.impulseResponseBuffer) return;
        const blob = audioBufferToWav(app.audio.impulseResponseBuffer);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        const seedValue = app.dom.randomSeed?.value ?? 'impulse-response';
        a.download = `IR_${seedValue}.wav`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
}

if (app.dom.randomizeSeedBtn && app.dom.randomSeed) {
    app.dom.randomizeSeedBtn.addEventListener('click', () => {
        app.dom.randomSeed.value = (Date.now() * Math.random()).toString(36).substr(2, 9);
        applySeed(app.dom.randomSeed.value);
        rebuildRoom();
    });
}

document.querySelectorAll('input[type="range"]').forEach(slider => {
    const display = document.getElementById(`${slider.id}-val`);
    if (display) {
        display.textContent = slider.value;
        slider.addEventListener('input', () => { display.textContent = slider.value; });
    }
});

if (app.dom.startButton) {
    app.dom.startButton.addEventListener('click', () => {
        initAudioContext();
        const useWebWorker = document.getElementById('useWebWorker')?.checked ?? false;
        if (useWebWorker && app.worker.instance) {
            runSimulationWorker();
        } else {
            runSimulationMainThread();
        }
    });
}

if (app.dom.sampleAudioSelect) {
    app.dom.sampleAudioSelect.addEventListener('change', async () => {
        if (app.state.sampleSourceNode) {
            app.state.sampleSourceNode.stop(0);
            app.state.sampleSourceNode = null;
        }
        app.state.sampleBuffer = null;

        const url = app.dom.sampleAudioSelect.value;
        if (!url) return;

        initAudioContext();
        setStatus('Loading sample…');
        if (app.dom.playSampleBtn) {
            app.dom.playSampleBtn.disabled = true;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const arrayBuffer = await response.arrayBuffer();
            app.state.sampleBuffer = await app.audio.context.decodeAudioData(arrayBuffer);
            setStatus(`Sample ready: ${url.split('/').pop()}`);
            if (app.dom.playSampleBtn) {
                app.dom.playSampleBtn.disabled = false;
            }
        } catch (error) {
            console.error('Sample load failed:', error);
            setStatus('Error loading sample.');
        }
    });
}

if (app.dom.playSampleBtn) {
    app.dom.playSampleBtn.addEventListener('click', () => {
        if (!app.state.sampleBuffer) return;
        if (app.state.sampleSourceNode) {
            app.state.sampleSourceNode.stop(0);
            return;
        }
        initAudioContext();
        app.state.sampleSourceNode = app.audio.context.createBufferSource();
        app.state.sampleSourceNode.buffer = app.state.sampleBuffer;
        app.state.sampleSourceNode.connect(app.audio.convolver);
        app.state.sampleSourceNode.start();
        app.dom.playSampleBtn.textContent = 'Stop Sample';

        setStatus('Playing sample…');

        app.state.sampleSourceNode.onended = () => {
            app.state.sampleSourceNode = null;
            if (app.dom.playSampleBtn) {
                app.dom.playSampleBtn.textContent = 'Play Sample';
            }
            setStatus('Sample finished.');
        };
    });
}

if (app.dom.stopSampleBtn) {
    app.dom.stopSampleBtn.addEventListener('click', () => {
        if (app.state.sampleSourceNode) {
            app.state.sampleSourceNode.stop(0);
        }
    });
}

async function loadSampleList() {
    const select = app.dom.sampleAudioSelect;
    if (!select) return;
    const sampleFiles = import.meta.glob('/src/audio/samples/*.{wav,mp3,ogg}', { eager: true });
    console.log('Sample files found:', Object.keys(sampleFiles));
    select.innerHTML = '';
    Object.entries(sampleFiles).forEach(([path, module]) => {
        const url = module.default ?? path.replace('/src', '');
        const name = path.split('/').pop();
        const option = document.createElement('option');
        option.value = url;
        option.textContent = name;
        select.appendChild(option);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSampleList);
} else {
    loadSampleList();
}

// --- WEB WORKER SIMULATION ---
function runSimulationWorker() {
    if (app.state.isSimulating) return;
    if (!app.worker.instance) {
        console.warn('Worker unavailable; running simulation on main thread.');
        runSimulationMainThread();
        return;
    }

    app.state.isSimulating = true;
    if (app.dom.startButton) {
        app.dom.startButton.disabled = true;
    }
    setStatus('Starting simulation...');

    if (app.three.rayLinesGroup) {
        while (app.three.rayLinesGroup.children.length > 0) {
            app.three.rayLinesGroup.remove(app.three.rayLinesGroup.children[0]);
        }
    }

    const params = {
        numRays: getIntegerInputValue('numRays', 1000),
        maxBounces: app.state.maxBounces,
        wallAbsorption: getNumericInputValue('wallAbsorption', 0.2),
        diffuseThreshold: getIntegerInputValue('diffuseThreshold', 0),
        randomizePhase: app.dom.phaseToggle?.checked ?? false,
        seed: app.dom.randomSeed?.value ?? '',
        speedOfSound: app.config.SPEED_OF_SOUND,
        batchSize: 5000 // Larger batches reduce worker overhead
    };

    console.log('Starting worker simulation with params:', params);
    console.time('Worker Simulation');

    app.worker.instance.postMessage({
        type: 'simulate',
        data: params
    });
}

// --- OPTIMIZED BATCHED SIMULATION ---
function runSimulationMainThread() {
    if (app.state.isSimulating) return;

    app.state.isSimulating = true;
    if (app.dom.startButton) {
        app.dom.startButton.disabled = true;
    }
    setStatus('Simulating...');

    const MAX_BOUNCES = app.state.maxBounces;
    const BATCH_SIZE = 1000; // Optimized batch size for main thread
    const seed = app.dom.randomSeed?.value || '';
    const restoreRandom = Math.random;
    seedrandom(seed || undefined, { global: true });

    console.log(`Optimized main thread simulation starting with seed: "${seed || 'random'}"`);
    console.time('Main Thread Simulation');

    const numRays = getIntegerInputValue('numRays', 1000);
    const wallAbsorption = getNumericInputValue('wallAbsorption', 0.2);
    const diffuseThreshold = getIntegerInputValue('diffuseThreshold', 0);
    const randomizePhase = app.dom.phaseToggle?.checked ?? false;
    const raysToVisualize = parseInt(app.dom.raysToVisualizeSlider?.value ?? '0', 10) || 0;
    const lineColorMode = app.dom.lineColorModeSelect?.value ?? 'random';
    const reflectionCoefficient = 1.0 - wallAbsorption;

    const raycaster = app.three.raycaster;
    const roomMesh = app.state.roomMesh;
    const emitterMesh = app.three.emitterMesh;
    const rayLinesGroup = app.three.rayLinesGroup;
    const _rayOrigin = app.three.vectors.origin;
    const _rayDirection = app.three.vectors.direction;
    const _tempVec = app.three.vectors.temp;

    if (!raycaster || !roomMesh || !emitterMesh || !rayLinesGroup) {
        console.warn('Simulation prerequisites missing (raycaster/room/emitter).');
        setStatus('Simulation unavailable: scene not ready.');
        if (app.dom.startButton) {
            app.dom.startButton.disabled = false;
        }
        Math.random = restoreRandom;
        app.state.isSimulating = false;
        return;
    }

    const arrivals = [];
    let currentRay = 0;

    // Pre-allocate visualization buffers
    const maxSegments = raysToVisualize * MAX_BOUNCES * 2;
    const linePositions = new Float32Array(maxSegments * 3);
    const lineColors = new Float32Array(maxSegments * 3);
    let positionIndex = 0;
    let colorIndex = 0;

    function processBatch() {
        const startRay = currentRay;
        const endRay = Math.min(currentRay + BATCH_SIZE, numRays);
        const startTime = performance.now();

        for (let i = currentRay; i < endRay; i++) {
            _rayOrigin.set(0, 0, 0);
            _rayDirection.randomDirection();
            let totalDistance = 0;
            let amplitude = 1.0;
            let bounceCount = 0;

            const shouldVisualize = i < raysToVisualize;
            const pathInfo = shouldVisualize ? [{ point: _rayOrigin.clone(), amplitude: 1.0 }] : null;

            for (let j = 0; j < MAX_BOUNCES; j++) {
                raycaster.set(_rayOrigin, _rayDirection);
                const roomIntersects = raycaster.intersectObject(roomMesh);
                const receiverIntersects = emitterMesh ? raycaster.intersectObject(emitterMesh) : [];

                if (receiverIntersects.length > 0 && (roomIntersects.length === 0 || receiverIntersects[0].distance < roomIntersects[0].distance)) {
                    if (receiverIntersects[0].distance > 0.001) {
                        totalDistance += receiverIntersects[0].distance;
                        if (shouldVisualize) pathInfo.push({ point: receiverIntersects[0].point.clone(), amplitude: amplitude });
                        let finalAmplitude = amplitude;
                        if (randomizePhase && bounceCount > diffuseThreshold) {
                            finalAmplitude *= (Math.random() < 0.5 ? 1 : -1);
                        }
                        arrivals.push({ time: totalDistance / app.config.SPEED_OF_SOUND, amplitude: finalAmplitude });
                        break;
                    }
                }

                if (roomIntersects.length > 0) {
                    const intersection = roomIntersects[0];
                    bounceCount++;
                    totalDistance += intersection.distance;
                    amplitude *= reflectionCoefficient;
                    _rayOrigin.copy(intersection.point);
                    if (shouldVisualize) pathInfo.push({ point: _rayOrigin.clone(), amplitude: amplitude });

                    _rayDirection.reflect(intersection.face.normal);
                    _tempVec.copy(_rayDirection).multiplyScalar(0.001);
                    _rayOrigin.add(_tempVec);
                } else {
                    break;
                }
            }

            // Add visualization data
            if (shouldVisualize && pathInfo) {
                const pathColor = new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
                for (let k = 0; k < pathInfo.length - 1; k++) {
                    const start = pathInfo[k];
                    const end = pathInfo[k + 1];

                    if (positionIndex < linePositions.length - 5) {
                        linePositions[positionIndex++] = start.point.x;
                        linePositions[positionIndex++] = start.point.y;
                        linePositions[positionIndex++] = start.point.z;
                        linePositions[positionIndex++] = end.point.x;
                        linePositions[positionIndex++] = end.point.y;
                        linePositions[positionIndex++] = end.point.z;

                        let segmentColor = pathColor;
                        if (lineColorMode === 'energy') {
                            segmentColor = new THREE.Color().setHSL(0.7, 1.0, 0.2 + start.amplitude * 0.5);
                        }

                        lineColors[colorIndex++] = segmentColor.r;
                        lineColors[colorIndex++] = segmentColor.g;
                        lineColors[colorIndex++] = segmentColor.b;
                        lineColors[colorIndex++] = segmentColor.r;
                        lineColors[colorIndex++] = segmentColor.g;
                        lineColors[colorIndex++] = segmentColor.b;
                    }
                }
            }
        }

        currentRay = endRay;
        const batchTime = performance.now() - startTime;
        const processed = endRay - startRay;
        const raysPerSecond = processed > 0 && batchTime > 0 ? Math.round(processed / (batchTime / 1000)) : 0;

        if (currentRay < numRays) {
            // Update progress with performance info
            setStatus(`Simulating (Main Thread)... ${Math.round((currentRay / numRays) * 100)}% (${raysPerSecond} rays/sec)`);

            // Schedule next batch
            if (window.requestIdleCallback) {
                requestIdleCallback(processBatch);
            } else {
                setTimeout(processBatch, 0);
            }
        } else {
            // Simulation complete - update visualization
            while (rayLinesGroup.children.length > 0) {
                rayLinesGroup.remove(rayLinesGroup.children[0]);
            }

            if (positionIndex > 0) {
                const lineGeometry = new THREE.BufferGeometry();
                lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions.slice(0, positionIndex), 3));
                lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors.slice(0, colorIndex), 3));
                const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6 });
                const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
                rayLinesGroup.add(lineSegments);
            }

            console.timeEnd('Main Thread Simulation');
            plotImpulseResponse(arrivals);
            if (app.dom.startButton) {
                app.dom.startButton.disabled = false;
            }
            setStatus(`Simulation complete: ${arrivals.length} arrivals`);
            Math.random = restoreRandom;
            app.state.isSimulating = false;
        }
    }

    processBatch();
}


function animate() {
    requestAnimationFrame(animate);

    if (app.three.stats) {
        app.three.stats.update();
    }
    if (app.three.controls) {
        app.three.controls.update();
    }
    updateRendererSize();
    if (app.three.renderer && app.three.scene && app.three.camera) {
        app.three.renderer.render(app.three.scene, app.three.camera);
    }

    let smoothPeak = 0;
    if (app.audio.amplitudeMeter) {
        const peak = Math.sqrt(app.audio.amplitudeMeter.getPeak());
        smoothPeak = app.audio.peakEnvelope ? app.audio.peakEnvelope.process(peak) : peak;
    }

    let smoothRMS = 0;
    if (app.audio.amplitudeMeter) {
        const rms = Math.sqrt(app.audio.amplitudeMeter.getRMS());
        smoothRMS = app.audio.rmsEnvelope ? app.audio.rmsEnvelope.process(rms) : rms;
    }

    if (app.state.shaderMaterial) {
        const finalUTime = performance.now() * 0.0001 * (1 + smoothPeak * 15);
        app.state.shaderMaterial.uniforms.uTime.value = finalUTime;
    }
}

function updateSectionState(section, trigger, expanded) {
    if (!section || !trigger) return;
    section.classList.toggle('is-open', expanded);
    section.classList.toggle('collapsed', !expanded);
    trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
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

setupCollapsibleSections();

init();

if (app.dom.randomSeed) {
    app.dom.randomSeed.addEventListener('change', () => {
        applySeed(app.dom.randomSeed.value);
        rebuildRoom();
    });
}

// Cleanup worker on page unload
window.addEventListener('beforeunload', () => {
    if (app.worker.instance) {
        app.worker.instance.terminate();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splashScreen');
    const enterBtn = document.getElementById('enterAppBtn');

    if (!splash || !enterBtn) return;

    enterBtn.addEventListener('click', async () => {
        if (app.audio.context?.state === 'suspended') {
            await app.audio.context.resume();
        }
        await startApp();
        splash.classList.add('hidden');
    });
});