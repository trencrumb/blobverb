import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { MeshBVHHelper } from 'three-mesh-bvh';

/**
 * Manages room geometry creation, visualization, and BVH helpers
 */
export class RoomManager {
    constructor(scene) {
        this.scene = scene;
        this.roomMesh = null;
        this.bvhHelper = null;
        this.stlLoader = new STLLoader();
        
        // Room parameters
        this.params = {
            meshType: 'Cube',
            wireframe: true,
            showBVH: false,
            bvhDepth: 10,
            bvhShowParents: false,
            
            // Transform parameters
            posX: 0, posY: 0, posZ: 0,
            rotX: 0, rotY: 0, rotZ: 0,
            scaleX: 1, scaleY: 1, scaleZ: 1
        };
    }

    /**
     * Get available mesh types
     */
    getAvailableMeshTypes() {
        return ['Cube', 'Icosphere', 'Dodecahedron', 'Capsule', 'Sphere', 'Cylinder', 'Torus', 'STL'];
    }

    /**
     * Updates or creates the main mesh geometry used for ray tracing.
     * @param {string} type - The type of mesh to create ('Cube', 'Sphere', 'STL', etc.).
     */
    updateMeshGeometry(type) {
        this.params.meshType = type;
        
        // Clean up old mesh and its BVH helper
        this.cleanupCurrentMesh();
        
        // Special case for loading STL files
        if (type === 'STL') {
            this.loadSTLFile();
            return;
        }

        // Create primitive geometries
        const geometry = this.createPrimitiveGeometry(type);
        if (geometry) {
            geometry.computeBoundsTree();
            this.createNewMesh(geometry);
        }
    }

    /**
     * Create primitive geometry based on type
     */
    createPrimitiveGeometry(type) {
        const geometries = {
            Cube: new THREE.BoxGeometry(1, 1, 1),
            Icosphere: new THREE.IcosahedronGeometry(1, 2),
            Dodecahedron: new THREE.DodecahedronGeometry(1, 0),
            Capsule: new THREE.CapsuleGeometry(1, 2, 16, 16),
            Sphere: new THREE.SphereGeometry(1, 32, 16),
            Cylinder: new THREE.CylinderGeometry(1, 1, 2, 32),
            Torus: new THREE.TorusGeometry(1, 0.4, 16, 100)
        };
        
        const geometry = geometries[type];
        if (!geometry) {
            console.error(`Unknown geometry type: ${type}`);
            return null;
        }
        
        // Ensure proper normals for ray tracing
        if (!geometry.attributes.normal) {
            geometry.computeVertexNormals();
        }
        
        return geometry;
    }

    /**
     * Load STL file with file picker
     */
    loadSTLFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.stl';
        input.onchange = e => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                this.stlLoader.load(
                    url, 
                    geometry => {
                        URL.revokeObjectURL(url);
                        
                        // Prepare geometry for ray tracing
                        if (!geometry.attributes.normal) {
                            geometry.computeVertexNormals();
                        }
                        geometry.computeBoundsTree();
                        
                        this.createNewMesh(geometry);
                    }, 
                    undefined, 
                    err => {
                        console.error('An error occurred loading the STL:', err);
                        URL.revokeObjectURL(url);
                    }
                );
            }
        };
        input.click();
    }

    /**
     * Helper function to create a new mesh, add it to the scene, and update the BVH visualizer.
     * @param {THREE.BufferGeometry} geometry - The geometry to use for the new mesh.
     */
    createNewMesh(geometry) {
        const material = new THREE.MeshLambertMaterial({
            color: 0xcccccc,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        
        this.roomMesh = new THREE.Mesh(geometry, material);
        this.roomMesh.name = 'Room';

        // Add a wireframe for better visualization
        const wireframe = new THREE.Mesh(
            geometry, 
            new THREE.MeshBasicMaterial({ 
            color: 0x00ff00, 
            wireframe: true 
            })
        );
        wireframe.visible = this.params.wireframe;
        this.roomMesh.add(wireframe);

        this.scene.add(this.roomMesh);
        this.updateBVHHelper(); // Update the visual helper if active
        
        console.log(`Room mesh created: ${this.params.meshType}`);
    }

    /**
     * Clean up current mesh and BVH helper
     */
    cleanupCurrentMesh() {
        if (this.roomMesh) {
            this.scene.remove(this.roomMesh);
            this.roomMesh.geometry.dispose();
            this.roomMesh.material.dispose();
            
            // Clean up wireframe
            if (this.roomMesh.children.length > 0) {
                this.roomMesh.children[0].geometry.dispose();
                this.roomMesh.children[0].material.dispose();
            }
            
            this.roomMesh = null;
        }
        
        if (this.bvhHelper) {
            this.scene.remove(this.bvhHelper);
            this.bvhHelper.dispose();
            this.bvhHelper = null;
        }
    }

    /**
     * Update wireframe visibility
     */
    setWireframeVisible(visible) {
        this.params.wireframe = visible;
        if (this.roomMesh && this.roomMesh.children.length > 0) {
            this.roomMesh.children[0].visible = visible;
        }
    }

    /**
     * Update BVH helper visualization
     */
    updateBVHHelper() {
        if (this.bvhHelper) {
            this.scene.remove(this.bvhHelper);
            this.bvhHelper.dispose();
            this.bvhHelper = null;
        }
        
        if (this.params.showBVH && this.roomMesh) {
            this.bvhHelper = new MeshBVHHelper(this.roomMesh, this.params.bvhDepth);
            this.bvhHelper.displayParents = this.params.bvhShowParents;
            this.bvhHelper.displayEdges = true; // Show edges for better visualization
            this.scene.add(this.bvhHelper);
            this.bvhHelper.update(); // Force update to apply display settings
        }
    }

    /**
     * Apply transform parameters to room mesh
     */
    updateTransforms() {
        if (!this.roomMesh) return;
        
        this.roomMesh.position.set(this.params.posX, this.params.posY, this.params.posZ);
        this.roomMesh.rotation.set(
            THREE.MathUtils.degToRad(this.params.rotX),
            THREE.MathUtils.degToRad(this.params.rotY),
            THREE.MathUtils.degToRad(this.params.rotZ)
        );
        this.roomMesh.scale.set(this.params.scaleX, this.params.scaleY, this.params.scaleZ);
        this.roomMesh.updateMatrixWorld(true); // Ensure matrix is updated for BVH
    }

    /**
     * Setup GUI controls for room
     */
    setupGUI(gui) {
        // Mesh Type and Wireframe
        gui.add(this.params, 'meshType', this.getAvailableMeshTypes())
            .name('Mesh Type')
            .onChange(type => this.updateMeshGeometry(type));
            
        gui.add(this.params, 'wireframe')
            .name('Show Wireframe')
            .onChange(visible => this.setWireframeVisible(visible));

        // BVH Visualization Folder
        const bvhFolder = gui.addFolder('BVH Visualization');
        bvhFolder.add(this.params, 'showBVH')
            .name('Show BVH')
            .onChange(() => this.updateBVHHelper());
        bvhFolder.add(this.params, 'bvhShowParents')
            .name('Show Parents')
            .onChange(() => this.updateBVHHelper());
        bvhFolder.add(this.params, 'bvhDepth', 1, 50, 1)
            .name('BVH Depth')
            .onChange(() => this.updateBVHHelper());

        // Transform Folders
        const createTransformFolder = (name, props) => {
            const folder = gui.addFolder(name);
            for (const [key, range] of Object.entries(props)) {
                folder.add(this.params, key, ...range)
                    .name(key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))
                    .onChange(() => this.updateTransforms());
            }
            return folder;
        };

        createTransformFolder('Mesh Position', { 
            posX: [-10, 10], 
            posY: [-10, 10], 
            posZ: [-10, 10] 
        });
        
        createTransformFolder('Mesh Rotation', { 
            rotX: [-180, 180], 
            rotY: [-180, 180], 
            rotZ: [-180, 180] 
        });
        
        createTransformFolder('Mesh Scale', { 
            scaleX: [0.1, 50], 
            scaleY: [0.1, 50], 
            scaleZ: [0.1, 50] 
        });
    }

    /**
     * Get current room mesh
     */
    getRoomMesh() {
        return this.roomMesh;
    }

    /**
     * Dispose of all resources
     */
    dispose() {
        this.cleanupCurrentMesh();
    }
}