import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { traceAcousticRays } from '../src/acoustic-raytracer.js';
import { 
    createFullBandImpulseResponse, 
    createMultiBandImpulseResponse,
    encodeWAV,
    downloadWAV,
    exportMultiBandWAV      
} from './buffer-utils.js';
import { createWebAudioEngine } from './audio-utils.js';
import { RoomManager } from './room-utils.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';


// Add BVH acceleration to THREE.js
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

/**
 * Main Application Objects
 */
const App = {
    // Core Three.js components
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    gui: null,
    
    // Acoustic simulation objects
    RoomManager: null,
    source: null,
    microphone: null,
    
    // Ray visualization
    rayVisualizationGroup: null,
    allVisualizationPaths: [],
    
    // Audio engine
    audioEngine: null,
    lastSuccessfulPaths: null,
    
    // Simulation control
    stopSimulation: false,

    // Simulation parameters
    params: {

        selectedGeometry: 'box',

        // Room parameters
        roomWidth: 8,
        roomHeight: 3,
        roomDepth: 6,
        
        // Acoustic parameters
        numRays: 2000,
        maxBounces: 25,
        absorptionCoefficients: {
            sub: 0.1,      // 20-80 Hz
            low: 0.2,      // 80-250 Hz
            low_mid: 0.3,  // 250-500 Hz
            mid: 0.5,      // 500-2000 Hz
            high_mid: 0.6, // 2000-4000 Hz
            high: 0.7,     // 4000-8000 Hz
            ultra: 0.8     // 8000-16000 Hz
        }, 
        fadePhase: true,

        // Source and microphone positions
        sourceX: -2,
        sourceY: 1.5,
        sourceZ: 0,
        microphoneX: 2,
        microphoneY: 1.5,
        microphoneZ: 0,
        micRadius: 0.1, // Capture radius for microphone
        
        // Visualization
        showRays: true,
        maxRaysToVisualize: 100,
        showRoom: true,
        showSource: true,
        showMicrophone: true,
        
        // Simulation control
        progress: 0,
        isRunning: false,
        
        // Audio parameters
        audioWetLevel: 0.5,
        audioDryLevel: 0.5,
        audioMasterGain: 0.7,
        audioLoop: true,

        // Ray-Radiosity parameters
        useRayRadiosity: true,
        scatteringCoefficient: 0.1,
        histogramResolution: 0.001, // 1ms
        maxSimulationTime: 5.0,     // 5 seconds
        
        // IR parameters
        irDuration: 3.0
    }
};

/**
 * Initialize the Three.js scene and all components
 */
function init() {
    console.log('Initializing Three.js scene...');
    
    // Create scene
    App.scene = new THREE.Scene();
    App.scene.background = new THREE.Color(0x1a1a1a);
    App.scene.fog = new THREE.Fog(0x1a1a1a, 20, 100);
    
    // Setup camera
    setupCamera();
    
    // Setup renderer
    setupRenderer();
    
    // Setup controls
    setupControls();
    
    // Setup lighting
    setupLighting();
    
    // Create room geometry
    App.roomManager = new RoomManager(App.scene);
    App.roomManager.updateMeshGeometry('Cube'); // Create initial cube
    
    
    // Create acoustic objects
    createAcousticObjects();
    
    // Setup GUI
    setupGUI();
    
    // Setup audio engine (async)
    initializeAudioEngine();
    
    // Start render loop
    animate();
    
    console.log('Initialization complete!');
}

/**
 * Setup camera with appropriate position and settings
 */
function setupCamera() {
    const aspect = window.innerWidth / window.innerHeight;
    App.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    App.camera.position.set(10, 8, 10);
    App.camera.lookAt(0, 0, 0);
}

/**
 * Setup WebGL renderer with appropriate settings
 */
function setupRenderer() {
    App.renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        powerPreference: "high-performance"
    });
    App.renderer.setSize(window.innerWidth, window.innerHeight);
    App.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    App.renderer.shadowMap.enabled = true;
    App.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    App.renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    // Append to the container instead of body
    const container = document.getElementById('threejs-container');
    container.appendChild(App.renderer.domElement);
}

/**
 * Setup orbit controls for camera interaction
 */
function setupControls() {
    App.controls = new OrbitControls(App.camera, App.renderer.domElement);
    App.controls.enableDamping = true;
    App.controls.dampingFactor = 0.05;
    App.controls.maxDistance = 50;
    App.controls.minDistance = 1;
    App.controls.maxPolarAngle = Math.PI / 2 + 0.1; // Slightly below horizontal
}

/**
 * Setup scene lighting
 */
function setupLighting() {
    // Ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    App.scene.add(ambientLight);
    
    // Directional light for shadows and definition
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    App.scene.add(directionalLight);
    
    // Point light for additional illumination
    const pointLight = new THREE.PointLight(0xffffff, 0.5, 30);
    pointLight.position.set(-5, 8, 5);
    App.scene.add(pointLight);
    const gridHelper = new THREE.GridHelper(
      100, 
      100, 
      0x444444, 
      0x444444
    );
    gridHelper.position.y = 0.01; // Slightly above floor to avoid z-fighting
    App.scene.add(gridHelper);
}

/**
 * Update your createRoom function to use GeometryManager
 */
function createRoom() {
    // Remove existing room
    if (App.roomManager.getRoomMesh()) {
        App.scene.remove(App.roomManager.getRoomMesh());
        App.roomManager.cleanupCurrentMesh();
    }

    // Update box geometry with current room parameters
    if (App.params.selectedGeometry === 'box') {
        App.geometryManager.availableGeometries.set('box', {
            type: 'primitive',
            factory: () => new THREE.BoxGeometry(
                App.params.roomWidth, 
                App.params.roomHeight, 
                App.params.roomDepth
            ),
            name: 'box'
        });
    }

    // Create geometry using GeometryManager
    const geometry = App.geometryManager.createGeometry(App.params.selectedGeometry);

    // Create room material
    const material = new THREE.MeshPhongMaterial({
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });

    // Create room mesh
    App.roomMesh = new THREE.Mesh(geometry, material);
    App.roomMesh.receiveShadow = true;

    // Add wireframe
    const wireframe = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const wireframeMesh = new THREE.LineSegments(wireframe, wireframeMaterial);
    App.roomMesh.add(wireframeMesh);

    App.scene.add(App.roomMesh);
    
    console.log(`Room created: ${App.params.selectedGeometry}`);
}

/**
 * Create sound source and microphone objects
 */
function createAcousticObjects() {
    // Create sound source
    const sourceGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sourceMaterial = new THREE.MeshStandardMaterial({
        color: 0xff4444,
        emissive: 0x440000,
        metalness: 0.2,
        roughness: 0.8
    });
    
    App.source = new THREE.Mesh(sourceGeometry, sourceMaterial);
    App.source.position.set(
        App.params.sourceX,
        App.params.sourceY,
        App.params.sourceZ
    );
    App.source.castShadow = true;
    App.source.name = 'source';
    App.scene.add(App.source);
    
    // Add source label
    const sourceHelper = new THREE.AxesHelper(0.5);
    App.source.add(sourceHelper);
    
    // Create microphone
    const micGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);
    const micMaterial = new THREE.MeshStandardMaterial({
        color: 0x4444ff,
        metalness: 0.8,
        roughness: 0.2
    });
    
    App.microphone = new THREE.Mesh(micGeometry, micMaterial);
    App.microphone.position.set(
        App.params.microphoneX,
        App.params.microphoneY,
        App.params.microphoneZ
    );
    App.microphone.castShadow = true;
    App.microphone.name = 'microphone';
    App.scene.add(App.microphone);
    
    // Add microphone helper
    const micHelper = new THREE.AxesHelper(0.3);
    App.microphone.add(micHelper);
    
    // ADD: Initialize microphone visualization with radius helper
    updateMicrophoneVisualization();
}

/**
 * Run acoustic ray tracing simulation
 */
async function runSimulation() {
    if (App.params.isRunning) {
        console.warn('Simulation already running');
        return;
    }
    
    try {
        App.params.isRunning = true;
        App.stopSimulation = false;
        App.params.progress = 0;
        
        console.log('Starting acoustic ray tracing simulation...');
        
        // Clear previous ray visualizations
        clearRayVisualization();
        
        // Progress callback for real-time updates
        const progressCallback = (progress, currentPaths) => {
            App.params.progress = progress;
            console.log(`Ray tracing progress: ${progress}%`);
        };
        
        // Ray visualization callback for real-time ray drawing
        const rayVisualizationCallback = (rayGeometry, rayMaterial) => {
            if (!App.rayVisualizationGroup) {
                App.rayVisualizationGroup = new THREE.Group();
                App.rayVisualizationGroup.name = 'rayVisualization';
                App.scene.add(App.rayVisualizationGroup);
            }
            
            // Only add if we haven't exceeded the visualization limit
            if (App.rayVisualizationGroup.children.length < App.params.maxRaysToVisualize) {
                // Use Line2 instead of THREE.Line
                const rayLine = new Line2(rayGeometry, rayMaterial);
                rayLine.computeLineDistances(); // Required for Line2
                App.rayVisualizationGroup.add(rayLine);
            }
        };
        
        // Stop check function
        const stopCheck = () => App.stopSimulation;

        // Prepare Ray-Radiosity parameters
        const rayRadiosityParams = App.params.useRayRadiosity ? {
          enabled: true,
          scatteringCoeff: App.params.scatteringCoefficient,
          histogramResolution: App.params.histogramResolution,
          maxTime: App.params.maxSimulationTime
        } : {
          enabled: false
        };

        const roomMesh = App.roomManager.getRoomMesh();
        if (!roomMesh) {
          console.error('No room mesh available for simulation');
          return;
        }
        
        // Run the ray tracing simulation
        const result = await traceAcousticRays(
            App.microphone.position,
            App.params.micRadius,
            App.source.position,
            roomMesh,
            App.params.numRays,
            App.params.maxBounces,
            App.params.absorptionCoefficients,
            App.params.fadePhase,
            progressCallback,
            stopCheck,
            rayVisualizationCallback,
            App.params.maxRaysToVisualize,
            rayRadiosityParams  // Add RR parameters
        );
        
        // Store results
        App.lastSuccessfulPaths = result.successfulPathsByBand;
        console.log('Simulation complete!');
        Object.keys(result.successfulPathsByBand).forEach(band => {
            console.log(`${band.toUpperCase()} band: ${result.successfulPathsByBand[band].length} paths`);
        });      
    } catch (error) {
        console.error('Simulation failed:', error);
        alert('Simulation failed. Check console for details.');
    } finally {
        App.params.isRunning = false;
        App.params.progress = 100;
    }
}

/**
 * Stop the current simulation
 */
function stopCurrentSimulation() {
    if (App.params.isRunning) {
        App.stopSimulation = true;
        console.log('Stopping simulation...');
    }
}

/**
 * Setup GUI controls
 */
function setupGUI() {
    App.gui = new GUI({width: 300});
    App.gui.title = 'Acoustic Ray Tracer';
    
    const geometryFolder = App.gui.addFolder('Geometry');
    App.roomManager.setupGUI(geometryFolder);

    // Room parameters
    const roomFolder = App.gui.addFolder('Room Parameters');
    roomFolder.add(App.params, 'roomWidth', 3, 20, 0.5).name('Width').onChange(updateRoom);
    roomFolder.add(App.params, 'roomHeight', 2, 10, 0.5).name('Height').onChange(updateRoom);
    roomFolder.add(App.params, 'roomDepth', 3, 20, 0.5).name('Depth').onChange(updateRoom);
    
    // Acoustic parameters
    const acousticsFolder = App.gui.addFolder('Acoustics');
    acousticsFolder.add(App.params, 'numRays', 100, 100000, 100).name('Number of Rays');
    acousticsFolder.add(App.params, 'maxBounces', 1, 50, 1).name('Max Bounces');
    const absorptionCoefficientFolder = acousticsFolder.addFolder('Absorption Coefficients');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'sub', 0, 1, 0.01).name('Sub (20-80Hz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'low', 0, 1, 0.01).name('Low (80-250Hz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'low_mid', 0, 1, 0.01).name('Low-Mid (250-500Hz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'mid', 0, 1, 0.01).name('Mid (500-2kHz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'high_mid', 0, 1, 0.01).name('High-Mid (2k-4kHz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'high', 0, 1, 0.01).name('High (4k-8kHz)');
    absorptionCoefficientFolder.add(App.params.absorptionCoefficients, 'ultra', 0, 1, 0.01).name('Ultra (8k-16kHz)');
    acousticsFolder.add(App.params, 'fadePhase').name('Fake Phase');
    acousticsFolder.add(App.params, 'irDuration', 0.5, 10, 0.1).name('IR Duration (s)');
    const rayRadiosityFolder = acousticsFolder.addFolder('Ray-Radiosity');
    rayRadiosityFolder.add(App.params, 'useRayRadiosity').name('Enable Ray-Radiosity');
    rayRadiosityFolder.add(App.params, 'scatteringCoefficient', 0, 1, 0.01).name('Scattering Coefficient');
    rayRadiosityFolder.add(App.params, 'histogramResolution', 0.0001, 0.01, 0.0001).name('Time Resolution (s)');
    rayRadiosityFolder.add(App.params, 'maxSimulationTime', 1, 10, 0.1).name('Max Simulation Time (s)');
    App.params.hybridBounceThreshold = 3;
    rayRadiosityFolder.add(App.params, 'hybridBounceThreshold', 1, 10, 1).name('Hybrid Bounce Threshold');

    // Position controls
    const positionFolder = App.gui.addFolder('Positions');
    
    const sourceFolder = positionFolder.addFolder('Sound Source');
    sourceFolder.add(App.params, 'sourceX', -100, 100, 0.1).name('X').onChange(updateSourcePosition);
    sourceFolder.add(App.params, 'sourceY', -100, 100, 0.1).name('Y').onChange(updateSourcePosition);
    sourceFolder.add(App.params, 'sourceZ', -100, 100, 0.1).name('Z').onChange(updateSourcePosition);
    
    const micFolder = positionFolder.addFolder('Microphone');
    micFolder.add(App.params, 'microphoneX', -100, 100, 0.1).name('X').onChange(updateMicrophonePosition);
    micFolder.add(App.params, 'microphoneY', -100, 100, 0.1).name('Y').onChange(updateMicrophonePosition);
    micFolder.add(App.params, 'microphoneZ', -100, 100, 0.1).name('Z').onChange(updateMicrophonePosition);
    micFolder.add(App.params, 'micRadius', 0.01, 5, 0.01).name('Capture Radius').onChange(updateMicrophoneVisualization);
    
    // Visualization controls
    const visualFolder = App.gui.addFolder('Visualization');
    visualFolder.add(App.params, 'showRays').name('Show Rays').onChange(toggleRayVisualization);
    visualFolder.add(App.params, 'maxRaysToVisualize', 10, 1000, 10).name('Max Visible Rays');
    visualFolder.add(App.params, 'showRoom').name('Show Room').onChange(toggleRoomVisibility);
    visualFolder.add(App.params, 'showSource').name('Show Source').onChange(toggleSourceVisibility);
    visualFolder.add(App.params, 'showMicrophone').name('Show Microphone').onChange(toggleMicrophoneVisibility);
    const rayVisualizationFolder = visualFolder.addFolder('Ray Colors');
    rayVisualizationFolder.addColor({ directColor: 0xff0000 }, 'directColor')
        .name('Direct Sound').onChange(value => updateRayColors('direct', value));
    rayVisualizationFolder.addColor({ earlyColor: 0x000080 }, 'earlyColor')
        .name('Early Reflections (<80ms)').onChange(value => updateRayColors('early', value));
    rayVisualizationFolder.addColor({ lateColor: 0x87ceeb }, 'lateColor')
        .name('Late Reflections (>80ms)').onChange(value => updateRayColors('late', value));

    // Add this function to main.js:
    function updateRayColors(rayType, colorValue) {
        if (!App.rayVisualizationGroup) return;

        App.rayVisualizationGroup.children.forEach(line => {
            if (line.name.includes(rayType)) {
                line.material.color.setHex(colorValue);
            }
        });
    }
    
    // Simulation controls
    const simulationFolder = App.gui.addFolder('Simulation');
    
    // Bind simulation control functions
    App.params.runSimulation = runSimulation;
    App.params.stopSimulation = stopCurrentSimulation;
    App.params.clearRays = clearRayVisualization;

    App.params.exportRawMultiBandIR = () => {
        if (App.lastSuccessfulPaths && Object.keys(App.lastSuccessfulPaths).length > 0) {
            try {
                const sampleRate = App.audioEngine ? App.audioEngine.audioContext.sampleRate : 44100;
                
                // Create raw multi-band impulse responses (no filtering)
                const rawMultiBandIRs = createMultiBandImpulseResponse(App.lastSuccessfulPaths, sampleRate);
                
                // Export each band as a separate WAV file
                exportMultiBandWAV(rawMultiBandIRs, sampleRate, 'raw-impulse-response');
                
                console.log(`Raw multi-band impulse responses exported at ${sampleRate}Hz`);
                Object.keys(rawMultiBandIRs).forEach(band => {
                    console.log(`  ${band} band: ${rawMultiBandIRs[band].length} samples`);
                });
                
            } catch (error) {
                console.error('Failed to export raw multi-band impulse response:', error);
                alert('Failed to export raw multi-band impulse response. Check console for details.');
            }
        } else {
            alert('No simulation data available. Please run a simulation first.');
        }
    };

    App.params.exportFullBandIR = () => {
        if (App.lastSuccessfulPaths && Object.keys(App.lastSuccessfulPaths).length > 0) {
            try {
                const sampleRate = App.audioEngine ? App.audioEngine.audioContext.sampleRate : 44100;
                
                // Create full-band filtered impulse response
                const fullBandIR = createFullBandImpulseResponse(App.lastSuccessfulPaths, sampleRate);
                
                // Export as WAV
                const wavBuffer = encodeWAV(fullBandIR, sampleRate);
                downloadWAV(wavBuffer, 'fullband-impulse-response.wav');
                
                console.log(`Full-band filtered impulse response exported at ${sampleRate}Hz`);
                
            } catch (error) {
                console.error('Failed to export full-band impulse response:', error);
                alert('Failed to export full-band impulse response. Check console for details.');
            }
        } else {
            alert('No simulation data available. Please run a simulation first.');
        }
    };
    
    simulationFolder.add(App.params, 'runSimulation').name('▶ Run Simulation');
    simulationFolder.add(App.params, 'stopSimulation').name('⏹ Stop Simulation');
    simulationFolder.add(App.params, 'clearRays').name('🗑 Clear Rays');
    simulationFolder.add(App.params, 'exportFullBandIR').name('💾 Export Full Band IR as WAV');
    simulationFolder.add(App.params, 'exportRawMultiBandIR').name('💾 Export Raw Multi-Band IR');
    simulationFolder.add(App.params, 'progress', 0, 100).name('Progress %').listen();
    
    // Audio controls (will be updated when engine is ready)
    const audioFolder = App.gui.addFolder('Audio Controls');
    audioFolder.add({ status: 'Loading audio engine...' }, 'status').name('Status');
}

/**
 * Update microphone visualization to show capture radius
 */
function updateMicrophoneVisualization() {
    // Update microphone position
    updateMicrophonePosition();
    
    // Remove existing radius helper if it exists
    const existingHelper = App.microphone.getObjectByName('radiusHelper');
    if (existingHelper) {
        App.microphone.remove(existingHelper);
        existingHelper.geometry.dispose();
        existingHelper.material.dispose();
    }
    
    // Add new radius helper (wireframe sphere to show capture area)
    const radiusGeometry = new THREE.SphereGeometry(App.params.micRadius, 16, 16);
    const radiusMaterial = new THREE.MeshBasicMaterial({
        color: 0x4444ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const radiusHelper = new THREE.Mesh(radiusGeometry, radiusMaterial);
    radiusHelper.name = 'radiusHelper';
    App.microphone.add(radiusHelper);
}

/**
 * Initialize audio engine asynchronously
 */
async function initializeAudioEngine() {
    try {
        console.log('Initializing Web Audio Engine...');
        App.audioEngine = await createWebAudioEngine();
        console.log('Web Audio Engine initialized successfully');
        
        // Update GUI with audio controls
        updateAudioGUI();
        
    } catch (error) {
        console.error('Failed to initialize audio engine:', error);
    }
}

/**
 * Update room dimensions for box geometry
 */
function updateRoomDimensions() {
    if (App.roomManager && App.roomManager.params.meshType === 'Cube') {
        // Update the room manager's scale to match the room parameters
        App.roomManager.params.scaleX = App.params.roomWidth;
        App.roomManager.params.scaleY = App.params.roomHeight;
        App.roomManager.params.scaleZ = App.params.roomDepth;
        App.roomManager.updateTransforms();
    }
}

/**
 * Update audio controls in GUI (called when audio engine is ready)
 */
function updateAudioGUI() {
    // Remove the existing audio folder and recreate with actual controls
    const existingAudioFolder = App.gui.folders.find(folder => folder._title === 'Audio Controls');
    if (existingAudioFolder) {
        existingAudioFolder.destroy();
    }
    
    // Create new audio folder with actual controls
    const audioFolder = App.gui.addFolder('Audio Controls');
    
    // File upload elements
    const audioUpload = document.createElement('input');
    audioUpload.type = 'file';
    audioUpload.accept = 'audio/*';
    audioUpload.style.display = 'none';
    audioUpload.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file && App.audioEngine) {
            try {
                await App.audioEngine.loadAudioFile(file);
                console.log('Audio file loaded successfully');
            } catch (error) {
                console.error('Failed to load audio file:', error);
                alert('Failed to load audio file. Please check the console for details.');
            }
        }
    });
    document.body.appendChild(audioUpload);
    
    const irUpload = document.createElement('input');
    irUpload.type = 'file';
    irUpload.accept = 'audio/*';
    irUpload.style.display = 'none';
    irUpload.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file && App.audioEngine) {
            try {
                await App.audioEngine.loadImpulseResponseFile(file);
                console.log('Impulse response file loaded successfully');
            } catch (error) {
                console.error('Failed to load impulse response file:', error);
                alert('Failed to load IR file. Please check the console for details.');
            }
        }
    });
    document.body.appendChild(irUpload);
    
    // Bind audio control functions
    App.params.loadAudioFile = () => audioUpload.click();
    App.params.loadIRFile = () => irUpload.click();
    App.params.playAudio = () => {
        if (App.audioEngine) {
            App.audioEngine.play();
        }
    };
    App.params.stopAudio = () => {
        if (App.audioEngine) {
            App.audioEngine.stop();
        }
    };
    App.params.useFullBandIR = () => {
        if (App.audioEngine && App.lastSuccessfulPaths) {
            const sampleRate = App.audioEngine.audioContext.sampleRate;
            const ir = createFullBandImpulseResponse(App.lastSuccessfulPaths, sampleRate);
            App.audioEngine.setImpulseResponse(ir, sampleRate);
            console.log(`Full-band filtered impulse response applied to audio engine`);
        } else {
            console.warn('No impulse response available. Run a simulation first.');
        }
    };
    
    // File and IR controls
    audioFolder.add(App.params, 'loadAudioFile').name('📁 Load Audio File');
    audioFolder.add(App.params, 'loadIRFile').name('📁 Load IR File');
    audioFolder.add(App.params, 'useFullBandIR').name('🔄 Use Full Band IR');
    
    // Playback controls
    const playbackFolder = audioFolder.addFolder('Playback');
    playbackFolder.add(App.params, 'playAudio').name('▶ Play');
    playbackFolder.add(App.params, 'stopAudio').name('⏹ Stop');
    
    // Mix controls
    const mixFolder = audioFolder.addFolder('Mix Controls');
    mixFolder.add(App.params, 'audioWetLevel', 0, 1, 0.01).name('Wet Level (Reverb)')
        .onChange(value => {
            if (App.audioEngine) {
                App.audioEngine.setMix(value, App.params.audioDryLevel);
            }
        });
    
    mixFolder.add(App.params, 'audioDryLevel', 0, 1, 0.01).name('Dry Level (Direct)')
        .onChange(value => {
            if (App.audioEngine) {
                App.audioEngine.setMix(App.params.audioWetLevel, value);
            }
        });
    
    mixFolder.add(App.params, 'audioMasterGain', 0, 1, 0.01).name('Master Gain')
        .onChange(value => {
            if (App.audioEngine) {
                App.audioEngine.setMasterGain(value);
            }
        });
    
    mixFolder.add(App.params, 'audioLoop').name('Loop Audio')
        .onChange(value => {
            if (App.audioEngine) {
                App.audioEngine.setLoop(value);
            }
        });
}

/**
 * Update room geometry when parameters change
 */
function updateRoom() {
    if (App.roomManager) {
        App.roomManager.cleanupCurrentMesh();
    }
    createRoom();
}

/**
 * Update source position
 */
function updateSourcePosition() {
    if (App.source) {
        App.source.position.set(
            App.params.sourceX,
            App.params.sourceY,
            App.params.sourceZ
        );
    }
}

/**
 * Update microphone position
 */
function updateMicrophonePosition() {
    if (App.microphone) {
        App.microphone.position.set(
            App.params.microphoneX,
            App.params.microphoneY,
            App.params.microphoneZ
        );
    }
}

/**
 * Toggle ray visualization visibility
 */
function toggleRayVisualization() {
    if (App.rayVisualizationGroup) {
        App.rayVisualizationGroup.visible = App.params.showRays;
    }
}

/**
 * Clear all ray visualizations
 */
function clearRayVisualization() {
    if (App.rayVisualizationGroup) {
        App.scene.remove(App.rayVisualizationGroup);
        
        // Dispose of geometries and materials (including Line2)
        App.rayVisualizationGroup.traverse((child) => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (child.material.dispose) child.material.dispose();
            }
        });
        
        App.rayVisualizationGroup = null;
        App.allVisualizationPaths = [];
    }
}

/**
 * Toggle room visibility
 */
function toggleRoomVisibility() {
    if (App.roomManager.getRoomMesh()) {
        App.roomManager.getRoomMesh().visible = App.params.showRoom;
    }
}

/**
 * Toggle source visibility
 */
function toggleSourceVisibility() {
    if (App.source) {
        App.source.visible = App.params.showSource;
    }
}

/**
 * Toggle microphone visibility
 */
function toggleMicrophoneVisibility() {
    if (App.microphone) {
        App.microphone.visible = App.params.showMicrophone;
    }
}

/**
 * Handle window resize
 */
function onWindowResize() {
    App.camera.aspect = window.innerWidth / window.innerHeight;
    App.camera.updateProjectionMatrix();
    App.renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update Line2 materials resolution
    if (App.rayVisualizationGroup) {
        App.rayVisualizationGroup.traverse((child) => {
            if (child.material && child.material.resolution) {
                child.material.resolution.set(window.innerWidth, window.innerHeight);
            }
        });
    }
}

/**
 * Main animation loop
 */
function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    App.controls.update();

    // Update room transforms (if needed)
    if (App.roomManager) {
        App.roomManager.updateTransforms();
    }
    
    // Update Line2 materials resolution on window resize
    if (App.rayVisualizationGroup) {
        App.rayVisualizationGroup.traverse((child) => {
            if (child.material && child.material.resolution) {
                child.material.resolution.set(window.innerWidth, window.innerHeight);
            }
        });
    }
    
    // Render scene
    App.renderer.render(App.scene, App.camera);
}

/**
 * Handle page load
 */
window.addEventListener('load', init);
window.addEventListener('resize', onWindowResize);

// Export App object for use by other modules
window.App = App;