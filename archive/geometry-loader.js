import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Utility class for loading external geometry files
 */
export class GeometryLoader {
    constructor() {
        this.stlLoader = new STLLoader();
        this.objLoader = new OBJLoader();
        this.gltfLoader = new GLTFLoader();
        this.fbxLoader = new FBXLoader();
        this.supportedFormats = ['.stl', '.obj', '.gltf', '.glb', '.fbx'];
    }

    /**
     * Load geometry from file
     * @param {File} file - File object from input
     * @returns {Promise<THREE.BufferGeometry>} Loaded geometry
     */
    async loadFromFile(file) {
        const extension = this.getFileExtension(file.name);
        const url = URL.createObjectURL(file);
        
        try {
            switch (extension) {
                case '.stl':
                    return await this.loadSTL(url);
                case '.obj':
                    return await this.loadOBJ(url);
                case '.gltf':
                case '.glb':
                    return await this.loadGLTF(url);
                case '.fbx':
                    return await this.loadFBX(url);
                default:
                    throw new Error(`Unsupported file format: ${extension}`);
            }
        } finally {
            URL.revokeObjectURL(url);
        }
    }

    /**
     * Load STL file
     */
    async loadSTL(url) {
        return new Promise((resolve, reject) => {
            this.stlLoader.load(
                url, 
                (geometry) => {
                    console.log('STL loaded successfully:', geometry);
                    resolve(geometry);
                }, 
                (progress) => {
                    console.log('STL loading progress:', (progress.loaded / progress.total * 100) + '%');
                }, 
                reject
            );
        });
    }

    /**
     * Load OBJ file
     */
    async loadOBJ(url) {
        return new Promise((resolve, reject) => {
            this.objLoader.load(
                url, 
                (object) => {
                    // Extract geometry from first mesh
                    const mesh = object.children.find(child => child.isMesh);
                    if (mesh) {
                        console.log('OBJ loaded successfully:', mesh.geometry);
                        resolve(mesh.geometry);
                    } else {
                        reject(new Error('No mesh found in OBJ file'));
                    }
                }, 
                (progress) => {
                    console.log('OBJ loading progress:', (progress.loaded / progress.total * 100) + '%');
                }, 
                reject
            );
        });
    }

    /**
     * Load GLTF file
     */
    async loadGLTF(url) {
        return new Promise((resolve, reject) => {
            this.gltfLoader.load(
                url, 
                (gltf) => {
                    // Extract geometry from first mesh in the scene
                    const mesh = this.findFirstMesh(gltf.scene);
                    if (mesh) {
                        console.log('GLTF loaded successfully:', mesh.geometry);
                        resolve(mesh.geometry);
                    } else {
                        reject(new Error('No mesh found in GLTF file'));
                    }
                }, 
                (progress) => {
                    console.log('GLTF loading progress:', (progress.loaded / progress.total * 100) + '%');
                }, 
                reject
            );
        });
    }

    /**
     * Load FBX file
     */
    async loadFBX(url) {
        return new Promise((resolve, reject) => {
            this.fbxLoader.load(
                url, 
                (object) => {
                    // FBX files can have complex hierarchies - find the first mesh
                    const mesh = this.findFirstMesh(object);
                    if (mesh) {
                        console.log('FBX loaded successfully:', mesh.geometry);
                        
                        // FBX geometries might need processing
                        const geometry = mesh.geometry;
                        
                        // Ensure it's a BufferGeometry
                        let bufferGeometry;
                        if (geometry.isGeometry) {
                            // Convert legacy Geometry to BufferGeometry if needed
                            bufferGeometry = new THREE.BufferGeometry().fromGeometry(geometry);
                        } else {
                            bufferGeometry = geometry;
                        }
                        
                        // Merge geometries if the FBX contains multiple meshes
                        const allMeshes = [];
                        this.collectMeshes(object, allMeshes);
                        
                        if (allMeshes.length > 1) {
                            console.log(`FBX contains ${allMeshes.length} meshes, merging...`);
                            const mergedGeometry = this.mergeGeometries(allMeshes);
                            resolve(mergedGeometry);
                        } else {
                            resolve(bufferGeometry);
                        }
                    } else {
                        reject(new Error('No mesh found in FBX file'));
                    }
                }, 
                (progress) => {
                    if (progress.lengthComputable) {
                        console.log('FBX loading progress:', (progress.loaded / progress.total * 100) + '%');
                    }
                }, 
                (error) => {
                    console.error('FBX loading error:', error);
                    reject(error);
                }
            );
        });
    }

    /**
     * Recursively find the first mesh in an object hierarchy
     * @param {THREE.Object3D} object - Root object to search
     * @returns {THREE.Mesh|null} First mesh found
     */
    findFirstMesh(object) {
        if (object.isMesh) {
            return object;
        }
        
        for (const child of object.children) {
            const mesh = this.findFirstMesh(child);
            if (mesh) {
                return mesh;
            }
        }
        
        return null;
    }

    /**
     * Collect all meshes from object hierarchy
     * @param {THREE.Object3D} object - Root object to search
     * @param {Array<THREE.Mesh>} meshArray - Array to collect meshes into
     */
    collectMeshes(object, meshArray) {
        if (object.isMesh) {
            meshArray.push(object);
        }
        
        for (const child of object.children) {
            this.collectMeshes(child, meshArray);
        }
    }

    /**
     * Merge multiple geometries into a single BufferGeometry
     * @param {Array<THREE.Mesh>} meshes - Array of meshes to merge
     * @returns {THREE.BufferGeometry} Merged geometry
     */
    mergeGeometries(meshes) {
        const geometries = meshes.map(mesh => {
            let geometry = mesh.geometry;
            
            // Convert to BufferGeometry if needed
            if (geometry.isGeometry) {
                geometry = new THREE.BufferGeometry().fromGeometry(geometry);
            }
            
            // Apply mesh transform to geometry
            geometry = geometry.clone();
            geometry.applyMatrix4(mesh.matrixWorld);
            
            return geometry;
        });
        
        // Use BufferGeometryUtils for proper merging
        try {
            const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
            console.log(`Successfully merged ${geometries.length} geometries`);
            return mergedGeometry;
        } catch (error) {
            console.warn('Failed to merge geometries, using first geometry:', error);
            return geometries[0];
        }
    }

    /**
     * Get file extension from filename
     * @param {string} filename - Filename to extract extension from
     * @returns {string} File extension including the dot
     */
    getFileExtension(filename) {
        return filename.toLowerCase().substring(filename.lastIndexOf('.'));
    }

    /**
     * Check if file format is supported
     * @param {string} filename - Filename to check
     * @returns {boolean} True if supported
     */
    isSupported(filename) {
        const ext = this.getFileExtension(filename);
        return this.supportedFormats.includes(ext);
    }

    /**
     * Get detailed information about supported formats
     * @returns {Object} Format information
     */
    getFormatInfo() {
        return {
            '.stl': {
                name: 'STL',
                description: 'Stereolithography format',
                supports: 'Geometry only'
            },
            '.obj': {
                name: 'OBJ',
                description: 'Wavefront OBJ format',
                supports: 'Geometry and basic materials'
            },
            '.gltf': {
                name: 'glTF',
                description: 'GL Transmission Format',
                supports: 'Geometry, materials, animations, scenes'
            },
            '.glb': {
                name: 'glTF Binary',
                description: 'Binary GL Transmission Format',
                supports: 'Geometry, materials, animations, scenes'
            },
            '.fbx': {
                name: 'FBX',
                description: 'Autodesk FBX format',
                supports: 'Geometry, materials, animations, rigging'
            }
        };
    }
}