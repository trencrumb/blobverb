uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vNormal;
varying float vNoise;
// We are including the 3D noise function here
${glsl_noise_3d}
void main() {
    // *** THE KEY CHANGE IS HERE ***
    // We now use the vertex's full 3D position as input to the noise function.
    // Adding uTime to the input vec3 animates the noise field over time.
    // GLSL automatically adds the float uTime to each component of the vec3.
    float noise = snoise(position * uFrequency + uTime);
    // Add the noise to the vertex position, moving it along the normal
    vec3 newPosition = position + normal * noise * uAmplitude;
    // Pass some values to the fragment shader
    vNormal = normal;
    vNoise = noise;
    // Standard projection
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}