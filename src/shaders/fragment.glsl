precision mediump float;

varying vec3 vNormal;
varying float vNoise;
uniform float uAlpha;

void main() {
    // Remap noise from [-1, 1] into [0, 1] so we can drive the color ramp.
    float mixFactor = vNoise * 0.5 + 0.5;
    vec3 color1 = vec3(0.0, 0.8, 0.9);
    vec3 color2 = vec3(0.9, 0.2, 0.8);
    vec3 finalColor = mix(color1, color2, mixFactor);
    gl_FragColor = vec4(finalColor, uAlpha);
}