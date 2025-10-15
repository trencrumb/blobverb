/**
 * EnvelopeFollower smooths a float value (e.g. amplitude) using attack/release times.
 * Usage:
 *   const env = new EnvelopeFollower({ attack: 0.01, release: 0.2, sampleRate: 60 });
 *   env.process(inputValue); // returns smoothed value
 */

// clamping helper
const clamp = (val, min=0.000001, max=1) => Math.min(Math.max(val, min), max);

export class EnvelopeFollower {
  constructor({ attack = 0.01, release = 0.2, sampleRate = 60 } = {}) {
    this.attack = attack;
    this.release = release;
    this.sampleRate = sampleRate;
    this.value = 0;
  }

  process(input) {
    const dt = 1 / this.sampleRate;
    const attackCoeff = Math.exp(-dt / this.attack);
    const releaseCoeff = Math.exp(-dt / this.release);

    if (input > this.value) {
      this.value = attackCoeff * this.value + (1 - attackCoeff) * input;
    } else {
      this.value = releaseCoeff * this.value + (1 - releaseCoeff) * input;
    }
    return clamp(this.value);
  }

  reset(val = 0) {
    this.value = val;
  }
}