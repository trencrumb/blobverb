// --- 1. RT60 Calculation ---

/**
 * Calculates the RT60 reverberation time using the Sabine formula.
 * @param {number} volumeM3 The volume of the room in cubic meters (m^3).
 * @param {number} surfaceAreaM2 The total surface area of the room in square meters (m^2).
 * @param {number} absorptionCoefficient The average absorption coefficient (0 to 1).
 * @returns {number} The calculated RT60 time in seconds.
 */
function calculateRt60Sabine(volumeM3, surfaceAreaM2, absorptionCoefficient) {
    if (absorptionCoefficient <= 0) {
        console.warn("Warning: Absorption coefficient must be > 0. Returning Infinity.");
        return Infinity;
    }
    const totalAbsorption = surfaceAreaM2 * absorptionCoefficient;
    if (totalAbsorption === 0) {
        console.warn("Warning: Total absorption is zero. Reverb time is infinite.");
        return Infinity;
    }
    // Sabine's formula: RT60 = (0.161 * V) / A
    return (0.161 * volumeM3) / totalAbsorption;
}


// --- 2. Reverb Tail Generation ---

/**
 * Generates a reverb tail with a linear attack and exponential decay, including
 * frequency-dependent damping for a more realistic sound.
 * @param {object} options
 * @param {number} options.rt60 The RT60 time in seconds for low frequencies.
 * @param {number} options.durationS The total duration of the audible reverb tail.
 * @param {number} options.attackTimeS The duration of the linear attack.
 * @param {number} [options.hfDamping=0.5] Multiplier for high-frequency decay time. 
 * 0.5 means highs decay twice as fast as lows. 1.0 means no damping.
 * @param {number} [options.cutoffFreq=3000] Crossover frequency in Hz for the damping filter.
 * @param {number} [options.startOffsetS=0.0] Silence before the reverb starts.
 * @param {number} [options.sampleRate=44100] The sample rate of the output audio.
 * @returns {Float32Array} A 1D Float32Array containing the generated audio signal.
 */
function generateReverbTail({ 
    rt60, 
    durationS, 
    attackTimeS, 
    hfDamping = 0.5,
    cutoffFreq = 3000,
    startOffsetS = 0.0, 
    sampleRate = 44100,
    gain = 0.1

}) {
    // --- Calculate sample counts ---
    const totalSamples = Math.floor((startOffsetS + durationS) * sampleRate);
    const offsetSamples = Math.floor(startOffsetS * sampleRate);
    let attackSamples = Math.floor(attackTimeS * sampleRate);
    const activeDurationSamples = Math.floor(durationS * sampleRate);

    if (attackSamples >= activeDurationSamples) {
        attackSamples = activeDurationSamples;
    }
    const decaySamples = activeDurationSamples - attackSamples;

    // --- Generate white noise source ---
    const noise = new Float32Array(activeDurationSamples);
    for (let i = 0; i < activeDurationSamples; i++) {
        noise[i] = Math.random() * 2 - 1;
    }
    
    // --- Filter the noise into low and high frequency bands ---
    const lowPassNoise = new Float32Array(activeDurationSamples);
    const highPassNoise = new Float32Array(activeDurationSamples);
    
    // Simple 1st-order IIR low-pass filter (RC filter)
    const alpha = 1.0 - Math.exp(-2 * Math.PI * cutoffFreq / sampleRate);
    let lastY = 0;
    for (let i = 0; i < activeDurationSamples; i++) {
        lastY = lastY + alpha * (noise[i] - lastY);
        lowPassNoise[i] = lastY;
        highPassNoise[i] = noise[i] - lowPassNoise[i]; // High-pass is original minus low-pass
    }
    
    // --- Create TWO envelopes: one for low freqs, one for high freqs ---
    const lowEnvelope = new Float32Array(activeDurationSamples);
    const highEnvelope = new Float32Array(activeDurationSamples);

    // Part A: Linear Attack (same for both)
    for (let i = 0; i < attackSamples; i++) {
        const attackVal = i / (attackSamples > 1 ? attackSamples - 1 : 1);
        lowEnvelope[i] = attackVal;
        highEnvelope[i] = attackVal;
    }

    // Part B: Exponential Decay (different for each band)
    // Low-frequency decay
    if (rt60 > 0 && decaySamples > 0) {
        const lambdaDecayLow = Math.log(1000) / rt60;
        for (let i = 0; i < decaySamples; i++) {
            const time = i / sampleRate;
            lowEnvelope[attackSamples + i] = Math.exp(-lambdaDecayLow * time);
        }
    }
    // High-frequency decay (faster)
    const rt60_hf = rt60 * hfDamping;
    if (rt60_hf > 0 && decaySamples > 0) {
        const lambdaDecayHigh = Math.log(1000) / rt60_hf;
        for (let i = 0; i < decaySamples; i++) {
            const time = i / sampleRate;
            highEnvelope[attackSamples + i] = Math.exp(-lambdaDecayHigh * time);
        }
    }

    // --- Apply each envelope to its corresponding noise band and sum them ---
    const reverbSignal = new Float32Array(activeDurationSamples);
    let maxAmp = 0.0;
    for (let i = 0; i < activeDurationSamples; i++) {
        const lowComponent = lowPassNoise[i] * (lowEnvelope[i] * gain);
        const highComponent = highPassNoise[i] * (highEnvelope[i] * gain);
        const val = lowComponent + highComponent;
        reverbSignal[i] = val;
        if (Math.abs(val) > maxAmp) {
            maxAmp = Math.abs(val);
        }
    }
    
    // --- Normalize the combined signal to prevent clipping ---
    if (maxAmp > 1.0) {
        for (let i = 0; i < activeDurationSamples; i++) {
            reverbSignal[i] /= maxAmp;
        }
    }

    // --- Place the final signal into the output buffer ---
    const outputBuffer = new Float32Array(totalSamples).fill(0);
    outputBuffer.set(reverbSignal, offsetSamples);

    return outputBuffer;
}


// --- 3. Web Audio API and DOM Interaction ---

// Use a global variable for the AudioContext
let audioContext;

/**
 * Plays an audio buffer using the Web Audio API.
 * @param {Float32Array} audioData The audio data to play.
 * @param {number} sampleRate The sample rate of the audio data.
 */
function playAudioBuffer(audioData, sampleRate) {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API is not supported in this browser", e);
            alert("Sorry, your browser does not support the Web Audio API.");
            return;
        }
    }
    
    // Resume context if it's suspended (autoplay policies)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const audioBuffer = audioContext.createBuffer(1, audioData.length, sampleRate);
    audioBuffer.copyToChannel(audioData, 0);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
}

/**
 * Draws the waveform of an audio buffer onto a canvas.
 * @param {HTMLCanvasElement} canvas The canvas element to draw on.
 * @param {Float32Array} audioData The audio data to visualize.
 */
function plotWaveform(canvas, audioData) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const halfHeight = height / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, halfHeight);
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 1;

    const step = Math.ceil(audioData.length / width);
    for (let i = 0; i < width; i++) {
        let min = 1.0;
        let max = -1.0;
        for (let j = 0; j < step; j++) {
            const datum = audioData[(i * step) + j];
            if (datum < min) min = datum;
            if (datum > max) max = datum;
        }
        ctx.lineTo(i, (1 + min) * halfHeight);
        ctx.lineTo(i, (1 + max) * halfHeight);
    }
    ctx.stroke();
}

/** @param sampleRate {number} */
/** @param channelBuffers {Float32Array[]} */
function audioBufferToWav(sampleRate, channelBuffers) {
  const totalSamples = channelBuffers[0].length * channelBuffers.length;

  const buffer = new ArrayBuffer(44 + totalSamples * 2);
  const view = new DataView(buffer);

  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  /* RIFF identifier */
  writeString(view, 0, "RIFF");
  /* RIFF chunk length */
  view.setUint32(4, 36 + totalSamples * 2, true);
  /* RIFF type */
  writeString(view, 8, "WAVE");
  /* format chunk identifier */
  writeString(view, 12, "fmt ");
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, 1, true);
  /* channel count */
  view.setUint16(22, channelBuffers.length, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * 4, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, channelBuffers.length * 2, true);
  /* bits per sample */
  view.setUint16(34, 16, true);
  /* data chunk identifier */
  writeString(view, 36, "data");
  /* data chunk length */
  view.setUint32(40, totalSamples * 2, true);

  // floatTo16BitPCM
  let offset = 44;
  for (let i = 0; i < channelBuffers[0].length; i++) {
    for (let channel = 0; channel < channelBuffers.length; channel++) {
      const s = Math.max(-1, Math.min(1, channelBuffers[channel][i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      offset += 2;
    }
  }

  return buffer;
}


// --- Main execution block ---
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const downloadButton = document.getElementById('DownloadButton');
    const logOutput = document.getElementById('logOutput');
    const canvas = document.getElementById('waveformCanvas');
    
    // Set canvas resolution to its display size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    downloadButton.addEventListener('click', () => {
        if(reverbTailAudio) {
            const wavBuffer = audioBufferToWav(48000, [reverbTailAudio]);
            const blob = new Blob([wavBuffer], { type: 'audio/wav' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'impulse_response.wav';
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            alert("Please generate the reverb tail first.");
        }
    });

    let reverbTailAudio = null;

    
    generateButton.addEventListener('click', () => {
        // Room and Material Parameters
        const roomParams = {
            volumeM3: 14137.17,
            surfaceAreaM2: 2827.0,
            avgAbsorptionCoeff: 0.3
        };

        // Audio Generation Parameters
        const audioParams = {
            sampleRate: 48000,
            startOffsetS: .08,
            attackTimeS: .04,
            reverbDurationS: 10,
            hfDamping: .1,
            cutoffFreq: 2500,
            gain: 0.9
        };

        // --- Step 1: Calculate RT60 ---
        const rt60Seconds = calculateRt60Sabine(
            roomParams.volumeM3,
            roomParams.surfaceAreaM2,
            roomParams.avgAbsorptionCoeff
        );
        
        // --- Step 2: Generate the audio buffer ---
        reverbTailAudio = generateReverbTail({
            rt60: rt60Seconds,
            durationS: audioParams.reverbDurationS,
            attackTimeS: audioParams.attackTimeS,
            startOffsetS: audioParams.startOffsetS,
            sampleRate: audioParams.sampleRate,
            hfDamping: audioParams.hfDamping,
            cutoffFreq: audioParams.cutoffFreq
        });

        // --- Log results ---
        let logMessage = `Room Parameters:\n`;
        logMessage += `  - Volume: ${roomParams.volumeM3} m^3\n`;
        logMessage += `  - Surface Area: ${roomParams.surfaceAreaM2} m^2\n`;
        logMessage += `  - Avg. Absorption Coefficient: ${roomParams.avgAbsorptionCoeff}\n`;
        logMessage += '----------------------------------------\n';
        logMessage += `Calculated RT60: ${rt60Seconds.toFixed(2)} seconds\n`;
        logMessage += '----------------------------------------\n';
        logMessage += `  - High-Freq Damping: ${audioParams.hfDamping}\n`;
        logMessage += `  - High-Freq RT60: ${(rt60Seconds * audioParams.hfDamping).toFixed(2)} seconds\n`;
        logMessage += '----------------------------------------\n';
        logMessage += `Generated ${reverbTailAudio.length} samples.`;
        logOutput.textContent = logMessage;
        
        // --- Step 3: Plot and Play ---
        plotWaveform(canvas, reverbTailAudio);
        playAudioBuffer(reverbTailAudio, audioParams.sampleRate);
    });
});