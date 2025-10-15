import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
    acceleratedRaycast,
    computeBoundsTree,
    disposeBoundsTree,
    CONTAINED,
    INTERSECTED,
    NOT_INTERSECTED,
    MeshBVHHelper
} from 'three-mesh-bvh';

// Setup Three.js extensions for BVH
THREE.Mesh.prototype.raycast = acceleratedRaycast;
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;

export class SculptingModule {
    constructor(options = {}) {
        // Configuration
        this.params = {
            size: options.size || 0.1,
            brush: options.brush || 'clay',
            intensity: options.intensity || 50,
            maxSteps: options.maxSteps || 10,
            invert: options.invert || false,
            symmetrical: options.symmetrical !== undefined ? options.symmetrical : true,
            flatShading: options.flatShading || false,
            depth: options.depth || 10,
            displayHelper: options.displayHelper || false,
        };

        // State
        this.targetMesh = null;
        this.brush = null;
        this.symmetryBrush = null;
        this.bvhHelper = null;
        this.brushActive = false;
        this.mouseState = false;
        this.lastMouseState = false;
        this.rightClick = false;
        this.enabled = true;
        
        // Internal vectors for calculations
        this.mouse = new THREE.Vector2();
        this.lastMouse = new THREE.Vector2();
        this.lastCastPose = new THREE.Vector3();
        this.normalZ = new THREE.Vector3(0, 0, 1);
        
        // Scene and camera references (set during init)
        this.scene = null;
        this.camera = null;
        this.controls = null;
        
        // Raycaster for mouse interactions
        this.raycaster = new THREE.Raycaster();
        
        // Event handlers bound to this instance
        this.boundHandlers = {
            pointerMove: this.handlePointerMove.bind(this),
            pointerDown: this.handlePointerDown.bind(this),
            pointerUp: this.handlePointerUp.bind(this),
            wheel: this.handleWheel.bind(this),
            contextMenu: (e) => e.preventDefault()
        };
    }

    /**
     * Initialize the sculpting module with scene, camera, and controls
     */
    init(scene, camera, controls) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        
        // Create brush indicators
        this.createBrushCursors();
        
        // Add event listeners
        this.attachEventListeners();
        
        return this;
    }

    /**
     * Create a sculptable mesh with the given geometry
     * If no geometry is provided, creates a default icosahedron
     */
    createSculptableMesh(geometry = null, material = null) {
        // Dispose of existing mesh if it exists
        if (this.targetMesh) {
            this.disposeMesh();
        }

        // Create default geometry if none provided
        if (!geometry) {
            geometry = new THREE.IcosahedronGeometry(1, 100);
            geometry.deleteAttribute('uv');
            geometry = BufferGeometryUtils.mergeVertices(geometry);
        }

        // Setup geometry for dynamic updates
        geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
        geometry.attributes.normal.setUsage(THREE.DynamicDrawUsage);
        geometry.computeBoundsTree({ setBoundingBox: false });

        // Create material if none provided
        if (!material) {
            material = new THREE.MeshMatcapMaterial({
                flatShading: this.params.flatShading
            });
        }

        // Create mesh
        this.targetMesh = new THREE.Mesh(geometry, material);
        this.targetMesh.frustumCulled = false;
        this.scene.add(this.targetMesh);

        // Setup BVH helper
        this.setupBVHHelper();

        return this.targetMesh;
    }

    /**
     * Set an existing mesh as the sculpting target
     */
    setTargetMesh(mesh) {
        this.targetMesh = mesh;
        
        // Ensure geometry is ready for sculpting
        const geometry = mesh.geometry;
        geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
        geometry.attributes.normal.setUsage(THREE.DynamicDrawUsage);
        
        if (!geometry.boundsTree) {
            geometry.computeBoundsTree({ setBoundingBox: false });
        }
        
        mesh.frustumCulled = false;
        
        // Setup BVH helper
        this.setupBVHHelper();
        
        return this.targetMesh;
    }

    /**
     * Create brush cursor visuals
     */
    createBrushCursors() {
        const brushSegments = [new THREE.Vector3(), new THREE.Vector3(0, 0, 1)];
        for (let i = 0; i < 50; i++) {
            const nexti = i + 1;
            const x1 = Math.sin(2 * Math.PI * i / 50);
            const y1 = Math.cos(2 * Math.PI * i / 50);
            const x2 = Math.sin(2 * Math.PI * nexti / 50);
            const y2 = Math.cos(2 * Math.PI * nexti / 50);

            brushSegments.push(
                new THREE.Vector3(x1, y1, 0),
                new THREE.Vector3(x2, y2, 0)
            );
        }

        // Main brush
        this.brush = new THREE.LineSegments(
            new THREE.BufferGeometry().setFromPoints(brushSegments),
            new THREE.LineBasicMaterial({ color: 0xfb8c00 })
        );
        this.scene.add(this.brush);

        // Symmetry brush
        this.symmetryBrush = this.brush.clone();
        this.scene.add(this.symmetryBrush);
    }

    /**
     * Setup BVH helper for debugging
     */
    setupBVHHelper() {
        if (!this.bvhHelper) {
            this.bvhHelper = new MeshBVHHelper(this.targetMesh, this.params.depth);
            if (this.params.displayHelper) {
                this.scene.add(this.bvhHelper);
            }
        } else {
            this.bvhHelper.mesh = this.targetMesh;
        }
        this.bvhHelper.update();
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        window.addEventListener('pointermove', this.boundHandlers.pointerMove);
        window.addEventListener('pointerdown', this.boundHandlers.pointerDown, true);
        window.addEventListener('pointerup', this.boundHandlers.pointerUp);
        window.addEventListener('wheel', this.boundHandlers.wheel);
        window.addEventListener('contextmenu', this.boundHandlers.contextMenu);
    }

    /**
     * Remove event listeners
     */
    detachEventListeners() {
        window.removeEventListener('pointermove', this.boundHandlers.pointerMove);
        window.removeEventListener('pointerdown', this.boundHandlers.pointerDown, true);
        window.removeEventListener('pointerup', this.boundHandlers.pointerUp);
        window.removeEventListener('wheel', this.boundHandlers.wheel);
        window.removeEventListener('contextmenu', this.boundHandlers.contextMenu);
    }

    /**
     * Event Handlers
     */
    handlePointerMove(e) {
        if (!this.enabled) return;
        
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.brushActive = true;
    }

    handlePointerDown(e) {
        if (!this.enabled) return;
        
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.mouseState = Boolean(e.buttons & 3);
        this.rightClick = Boolean(e.buttons & 2);
        this.brushActive = true;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        this.raycaster.firstHitOnly = true;

        const res = this.raycaster.intersectObject(this.targetMesh);
        if (this.controls) {
            this.controls.enabled = res.length === 0;
        }
    }

    handlePointerUp(e) {
        if (!this.enabled) return;
        
        this.mouseState = Boolean(e.buttons & 3);
        if (e.pointerType === 'touch') {
            this.brushActive = false;
        }
    }

    handleWheel(e) {
        if (!this.enabled) return;
        
        let delta = e.deltaY;
        if (e.deltaMode === 1) delta *= 40;
        if (e.deltaMode === 2) delta *= 40;

        this.params.size += delta * 0.0001;
        this.params.size = Math.max(Math.min(this.params.size, 0.25), 0.025);
        
        // Update GUI if it exists
        if (this.guiControllers) {
            this.guiControllers.size.updateDisplay();
        }
    }

    /**
     * Perform sculpting stroke
     */
    performStroke(point, brushObject, brushOnly = false, accumulatedFields = {}) {
        if (!this.targetMesh) return;

        const {
            accumulatedTriangles = new Set(),
            accumulatedIndices = new Set(),
            accumulatedTraversedNodeIndices = new Set(),
        } = accumulatedFields;

        const inverseMatrix = new THREE.Matrix4();
        inverseMatrix.copy(this.targetMesh.matrixWorld).invert();

        const sphere = new THREE.Sphere();
        sphere.center.copy(point).applyMatrix4(inverseMatrix);
        sphere.radius = this.params.size;

        // Collect intersected vertices
        const indices = new Set();
        const tempVec = new THREE.Vector3();
        const normal = new THREE.Vector3();
        const indexAttr = this.targetMesh.geometry.index;
        const posAttr = this.targetMesh.geometry.attributes.position;
        const normalAttr = this.targetMesh.geometry.attributes.normal;
        const triangles = new Set();
        const bvh = this.targetMesh.geometry.boundsTree;

        bvh.shapecast({
            intersectsBounds: (box, isLeaf, score, depth, nodeIndex) => {
                accumulatedTraversedNodeIndices.add(nodeIndex);

                const intersects = sphere.intersectsBox(box);
                const { min, max } = box;
                if (intersects) {
                    for (let x = 0; x <= 1; x++) {
                        for (let y = 0; y <= 1; y++) {
                            for (let z = 0; z <= 1; z++) {
                                tempVec.set(
                                    x === 0 ? min.x : max.x,
                                    y === 0 ? min.y : max.y,
                                    z === 0 ? min.z : max.z
                                );
                                if (!sphere.containsPoint(tempVec)) {
                                    return INTERSECTED;
                                }
                            }
                        }
                    }
                    return CONTAINED;
                }
                return intersects ? INTERSECTED : NOT_INTERSECTED;
            },

            intersectsTriangle: (tri, index, contained) => {
                const triIndex = index;
                triangles.add(triIndex);
                accumulatedTriangles.add(triIndex);

                const i3 = 3 * index;
                const a = i3 + 0;
                const b = i3 + 1;
                const c = i3 + 2;
                const va = indexAttr.getX(a);
                const vb = indexAttr.getX(b);
                const vc = indexAttr.getX(c);

                if (contained) {
                    indices.add(va);
                    indices.add(vb);
                    indices.add(vc);
                    accumulatedIndices.add(va);
                    accumulatedIndices.add(vb);
                    accumulatedIndices.add(vc);
                } else {
                    if (sphere.containsPoint(tri.a)) {
                        indices.add(va);
                        accumulatedIndices.add(va);
                    }
                    if (sphere.containsPoint(tri.b)) {
                        indices.add(vb);
                        accumulatedIndices.add(vb);
                    }
                    if (sphere.containsPoint(tri.c)) {
                        indices.add(vc);
                        accumulatedIndices.add(vc);
                    }
                }
                return false;
            }
        });

        // Compute average normal
        const localPoint = new THREE.Vector3();
        localPoint.copy(point).applyMatrix4(inverseMatrix);

        const planePoint = new THREE.Vector3();
        let totalPoints = 0;
        indices.forEach(index => {
            tempVec.fromBufferAttribute(normalAttr, index);
            normal.add(tempVec);

            if (!brushOnly) {
                totalPoints++;
                tempVec.fromBufferAttribute(posAttr, index);
                planePoint.add(tempVec);
            }
        });
        normal.normalize();
        brushObject.quaternion.setFromUnitVectors(this.normalZ, normal);

        if (totalPoints) {
            planePoint.multiplyScalar(1 / totalPoints);
        }

        if (brushOnly) return;

        // Perform vertex adjustment
        const targetHeight = this.params.intensity * 0.0001;
        const plane = new THREE.Plane();
        plane.setFromNormalAndCoplanarPoint(normal, planePoint);

        indices.forEach(index => {
            tempVec.fromBufferAttribute(posAttr, index);

            const dist = tempVec.distanceTo(localPoint);
            const negated = this.params.invert !== this.rightClick ? -1 : 1;
            let intensity = 1.0 - (dist / this.params.size);

            if (this.params.brush === 'clay') {
                intensity = Math.pow(intensity, 3);
                const planeDist = plane.distanceToPoint(tempVec);
                const clampedIntensity = negated * Math.min(intensity * 4, 1.0);
                tempVec.addScaledVector(normal, clampedIntensity * targetHeight - negated * planeDist * clampedIntensity * 0.3);
            } else if (this.params.brush === 'normal') {
                intensity = Math.pow(intensity, 2);
                tempVec.addScaledVector(normal, negated * intensity * targetHeight);
            } else if (this.params.brush === 'flatten') {
                intensity = Math.pow(intensity, 2);
                const planeDist = plane.distanceToPoint(tempVec);
                tempVec.addScaledVector(normal, -planeDist * intensity * this.params.intensity * 0.01 * 0.5);
            }

            posAttr.setXYZ(index, tempVec.x, tempVec.y, tempVec.z);
            normalAttr.setXYZ(index, 0, 0, 0);
        });

        if (indices.size) {
            posAttr.needsUpdate = true;
        }
    }

    /**
     * Update normals for affected triangles
     */
    updateNormals(triangles, indices) {
        if (!this.targetMesh) return;

        const tempVec = new THREE.Vector3();
        const tempVec2 = new THREE.Vector3();
        const indexAttr = this.targetMesh.geometry.index;
        const posAttr = this.targetMesh.geometry.attributes.position;
        const normalAttr = this.targetMesh.geometry.attributes.normal;

        const triangle = new THREE.Triangle();
        triangles.forEach(tri => {
            const tri3 = tri * 3;
            const i0 = tri3 + 0;
            const i1 = tri3 + 1;
            const i2 = tri3 + 2;

            const v0 = indexAttr.getX(i0);
            const v1 = indexAttr.getX(i1);
            const v2 = indexAttr.getX(i2);

            triangle.a.fromBufferAttribute(posAttr, v0);
            triangle.b.fromBufferAttribute(posAttr, v1);
            triangle.c.fromBufferAttribute(posAttr, v2);
            triangle.getNormal(tempVec2);

            if (indices.has(v0)) {
                tempVec.fromBufferAttribute(normalAttr, v0);
                tempVec.add(tempVec2);
                normalAttr.setXYZ(v0, tempVec.x, tempVec.y, tempVec.z);
            }
            if (indices.has(v1)) {
                tempVec.fromBufferAttribute(normalAttr, v1);
                tempVec.add(tempVec2);
                normalAttr.setXYZ(v1, tempVec.x, tempVec.y, tempVec.z);
            }
            if (indices.has(v2)) {
                tempVec.fromBufferAttribute(normalAttr, v2);
                tempVec.add(tempVec2);
                normalAttr.setXYZ(v2, tempVec.x, tempVec.y, tempVec.z);
            }
        });

        indices.forEach(index => {
            tempVec.fromBufferAttribute(normalAttr, index);
            tempVec.normalize();
            normalAttr.setXYZ(index, tempVec.x, tempVec.y, tempVec.z);
        });

        normalAttr.needsUpdate = true;
    }

    /**
     * Update method to be called in render loop
     */
    update() {
        if (!this.enabled || !this.targetMesh) return;

        if ((this.controls && this.controls.active) || !this.brushActive) {
            this.brush.visible = false;
            this.symmetryBrush.visible = false;
            this.lastCastPose.setScalar(Infinity);
        } else {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            this.raycaster.firstHitOnly = true;

            const hit = this.raycaster.intersectObject(this.targetMesh, true)[0];
            if (hit) {
                this.brush.visible = true;
                this.brush.scale.set(this.params.size, this.params.size, 0.1);
                this.brush.position.copy(hit.point);

                this.symmetryBrush.visible = this.params.symmetrical;
                this.symmetryBrush.scale.set(this.params.size, this.params.size, 0.1);
                this.symmetryBrush.position.copy(hit.point);
                this.symmetryBrush.position.x *= -1;

                if (this.controls) {
                    this.controls.enabled = false;
                }

                if (this.lastCastPose.x === Infinity) {
                    this.lastCastPose.copy(hit.point);
                }

                if (!(this.mouseState || this.lastMouseState)) {
                    this.performStroke(hit.point, this.brush, true);
                    if (this.params.symmetrical) {
                        hit.point.x *= -1;
                        this.performStroke(hit.point, this.symmetryBrush, true);
                        hit.point.x *= -1;
                    }
                    this.lastMouse.copy(this.mouse);
                    this.lastCastPose.copy(hit.point);
                } else {
                    // Multi-step stroke for smooth sculpting
                    const mdx = (this.mouse.x - this.lastMouse.x) * window.innerWidth * window.devicePixelRatio;
                    const mdy = (this.mouse.y - this.lastMouse.y) * window.innerHeight * window.devicePixelRatio;
                    let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    let castDist = hit.point.distanceTo(this.lastCastPose);

                    const step = this.params.size * 0.15;
                    const percent = Math.max(step / castDist, 1 / this.params.maxSteps);
                    const mstep = mdist * percent;
                    let stepCount = 0;

                    const changedTriangles = new Set();
                    const changedIndices = new Set();
                    const traversedNodeIndices = new Set();
                    const sets = {
                        accumulatedTriangles: changedTriangles,
                        accumulatedIndices: changedIndices,
                        accumulatedTraversedNodeIndices: traversedNodeIndices,
                    };

                    while (castDist > step && mdist > this.params.size * 200 / hit.distance) {
                        this.lastMouse.lerp(this.mouse, percent);
                        this.lastCastPose.lerp(hit.point, percent);
                        castDist -= step;
                        mdist -= mstep;

                        this.performStroke(this.lastCastPose, this.brush, false, sets);

                        if (this.params.symmetrical) {
                            this.lastCastPose.x *= -1;
                            this.performStroke(this.lastCastPose, this.symmetryBrush, false, sets);
                            this.lastCastPose.x *= -1;
                        }

                        stepCount++;
                        if (stepCount > this.params.maxSteps) break;
                    }

                    if (stepCount > 0) {
                        this.updateNormals(changedTriangles, changedIndices);
                        this.targetMesh.geometry.boundsTree.refit(traversedNodeIndices);

                        if (this.bvhHelper && this.bvhHelper.parent !== null) {
                            this.bvhHelper.update();
                        }
                    } else {
                        this.performStroke(hit.point, this.brush, true);
                        if (this.params.symmetrical) {
                            hit.point.x *= -1;
                            this.performStroke(hit.point, this.symmetryBrush, true);
                            hit.point.x *= -1;
                        }
                    }
                }
            } else {
                if (this.controls) {
                    this.controls.enabled = true;
                }
                this.brush.visible = false;
                this.symmetryBrush.visible = false;
                this.lastMouse.copy(this.mouse);
                this.lastCastPose.setScalar(Infinity);
            }
        }

        this.lastMouseState = this.mouseState;
    }

    /**
     * Add GUI controls
     */
    setupGUI(gui, folderName = 'Sculpting') {
        const folder = gui.addFolder(folderName);
        
        this.guiControllers = {
            brush: folder.add(this.params, 'brush', ['normal', 'clay', 'flatten']),
            size: folder.add(this.params, 'size').min(0.025).max(0.25).step(0.005),
            intensity: folder.add(this.params, 'intensity').min(1).max(100).step(1),
            maxSteps: folder.add(this.params, 'maxSteps').min(1).max(25).step(1),
            symmetrical: folder.add(this.params, 'symmetrical'),
            invert: folder.add(this.params, 'invert'),
            flatShading: folder.add(this.params, 'flatShading').onChange(value => {
                if (this.targetMesh) {
                    this.targetMesh.material.flatShading = value;
                    this.targetMesh.material.needsUpdate = true;
                }
            })
        };

        // BVH Helper controls
        const helperFolder = folder.addFolder('BVH Helper');
        helperFolder.add(this.params, 'depth').min(1).max(20).step(1).onChange(d => {
            if (this.bvhHelper) {
                this.bvhHelper.depth = parseFloat(d);
                this.bvhHelper.update();
            }
        });
        helperFolder.add(this.params, 'displayHelper').onChange(display => {
            if (!this.bvhHelper) return;
            
            if (display) {
                this.scene.add(this.bvhHelper);
                this.bvhHelper.update();
            } else {
                this.scene.remove(this.bvhHelper);
            }
        });

        // Utility functions
        folder.add({ 
            rebuildBVH: () => {
                if (this.targetMesh) {
                    this.targetMesh.geometry.computeBoundsTree({ setBoundingBox: false });
                    if (this.bvhHelper) {
                        this.bvhHelper.update();
                    }
                }
            }
        }, 'rebuildBVH');

        folder.open();
        
        return folder;
    }

    /**
     * Enable/disable sculpting
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) {
            this.brush.visible = false;
            this.symmetryBrush.visible = false;
        }
    }

    /**
     * Dispose of resources
     */
    dispose() {
        this.detachEventListeners();
        this.disposeMesh();
        
        if (this.brush) {
            this.brush.geometry.dispose();
            this.brush.material.dispose();
            this.scene.remove(this.brush);
        }
        
        if (this.symmetryBrush) {
            this.symmetryBrush.geometry.dispose();
            this.symmetryBrush.material.dispose();
            this.scene.remove(this.symmetryBrush);
        }
        
        if (this.bvhHelper) {
            this.scene.remove(this.bvhHelper);
        }
    }

    /**
     * Dispose of the target mesh
     */
    disposeMesh() {
        if (this.targetMesh) {
            this.targetMesh.geometry.disposeBoundsTree();
            this.targetMesh.geometry.dispose();
            if (this.targetMesh.material.dispose) {
                this.targetMesh.material.dispose();
            }
            this.scene.remove(this.targetMesh);
            this.targetMesh = null;
        }
    }
}