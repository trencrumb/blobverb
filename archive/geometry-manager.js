import * as THREE from 'three';
import { GeometryLoader } from './geometry-loader.js';

/**
 * Manages geometry creation, selection, and manipulation for acoustic raytracing
 */
export class GeometryManager {
    constructor() {
        this.geometryLoader = new GeometryLoader();
        this.currentGeometry = null;
        this.availableGeometries = new Map();
        
        // Initialize with default primitive geometries
        this.initializePrimitives();
    }

    /**
     * Initialize available primitive geometries
     */
    initializePrimitives() {
        const primitives = {
            'box': () => new THREE.BoxGeometry(8, 3, 6, 1, 1, 1), // Add segments for better normals
            'sphere': () => new THREE.SphereGeometry(4, 32, 16), // Good resolution
            'cylinder': () => new THREE.CylinderGeometry(3, 3, 6, 32, 1), // Add radial segments
            'cone': () => new THREE.ConeGeometry(3, 6, 32, 1), // Add radial segments
            'torus': () => new THREE.TorusGeometry(3, 1, 16, 32), // Good resolution
            'dodecahedron': () => new THREE.DodecahedronGeometry(3, 0), // Detail 0 for clean faces
            'icosahedron': () => new THREE.IcosahedronGeometry(3, 1), // Detail 1 for smoother surface
            'octahedron': () => new THREE.OctahedronGeometry(3, 0), // Detail 0 for clean faces
            'tetrahedron': () => new THREE.TetrahedronGeometry(3, 0), // Detail 0 for clean faces
            'capsule': () => new THREE.CapsuleGeometry(2, 4, 8, 32) // Good resolution
        };

        Object.entries(primitives).forEach(([name, factory]) => {
            this.availableGeometries.set(name, {
                type: 'primitive',
                factory: factory,
                name: name
            });
        });
    }

    /**
     * Create geometry by name
     * @param {string} geometryName - Name of geometry to create
     * @returns {THREE.BufferGeometry} Created geometry
     */
    createGeometry(geometryName) {
        const geometryData = this.availableGeometries.get(geometryName);
        
        if (!geometryData) {
            throw new Error(`Geometry '${geometryName}' not found`);
        }

        let geometry;
        if (geometryData.type === 'primitive') {
            geometry = geometryData.factory();
        } else if (geometryData.type === 'loaded') {
            geometry = geometryData.geometry.clone();
        }

        if (!geometry.attributes.normal) {
            geometry.computeVertexNormals();
        }
        // Ensure geometry has proper normals and bounds tree
        geometry.computeVertexNormals();
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        // For certain geometries, ensure face normals are computed
        if (geometry.index) {
            // This is an indexed geometry - normals should be fine
            console.log(`Prepared indexed geometry with ${geometry.index.count / 3} faces`);
        } else {
            // Non-indexed geometry
            console.log(`Prepared non-indexed geometry with ${geometry.attributes.position.count / 3} faces`);
        }
        // Validate the geometry has proper normals
        const normalAttribute = geometry.attributes.normal;
        if (!normalAttribute || normalAttribute.count === 0) {
            console.warn('Geometry missing normals, recomputing...');
            geometry.computeVertexNormals();
        }

        this.currentGeometry = geometry;
        return geometry;
    }

    /**
     * Load geometry from file and add to available geometries
     * @param {File} file - File to load
     * @returns {Promise<THREE.BufferGeometry>} Loaded geometry
     */
    async loadGeometryFromFile(file) {
        try {
            const geometry = await this.geometryLoader.loadFromFile(file);
            
            // Process loaded geometry
            geometry.computeVertexNormals();
            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();
            
            // Add to available geometries
            const name = file.name.split('.')[0];
            this.availableGeometries.set(name, {
                type: 'loaded',
                geometry: geometry,
                name: name,
                filename: file.name
            });

            this.currentGeometry = geometry;
            return geometry;
            
        } catch (error) {
            console.error('Failed to load geometry:', error);
            throw error;
        }
    }

    /**
     * Get list of available geometry names
     * @returns {Array<string>} Array of geometry names
     */
    getAvailableGeometryNames() {
        return Array.from(this.availableGeometries.keys());
    }

    /**
     * Get geometry info
     * @param {string} name - Geometry name
     * @returns {Object} Geometry information
     */
    getGeometryInfo(name) {
        const data = this.availableGeometries.get(name);
        if (!data) return null;

        return {
            name: data.name,
            type: data.type,
            filename: data.filename || null,
            vertexCount: data.type === 'loaded' ? data.geometry.attributes.position.count : 'Dynamic'
        };
    }

    /**
     * Remove loaded geometry
     * @param {string} name - Geometry name to remove
     */
    removeGeometry(name) {
        const data = this.availableGeometries.get(name);
        if (data && data.type === 'loaded') {
            data.geometry.dispose();
            this.availableGeometries.delete(name);
            return true;
        }
        return false;
    }

    /**
     * Scale current geometry
     * @param {number} scale - Scale factor
     */
    scaleGeometry(scale) {
        if (this.currentGeometry) {
            this.currentGeometry.scale(scale, scale, scale);
            this.currentGeometry.computeBoundingBox();
            this.currentGeometry.computeBoundingSphere();
        }
    }

    /**
     * Center geometry at origin
     */
    centerGeometry() {
        if (this.currentGeometry) {
            this.currentGeometry.center();
            this.currentGeometry.computeBoundingBox();
            this.currentGeometry.computeBoundingSphere();
        }
    }

    /**
     * Get supported file formats
     * @returns {Array<string>} Supported file extensions
     */
    getSupportedFormats() {
        return this.geometryLoader.supportedFormats;
    }

    /**
     * Get file format recommendations for acoustic simulation
     */
    getFormatRecommendations() {
        return {
            best: ['.stl', '.obj'],
            good: ['.gltf', '.glb'],
            acceptable: ['.fbx'],
            notes: {
                '.fbx': 'May contain complex hierarchies - will extract/merge geometry only'
            }
        };
    }
}