/**
 * Creates an amplitude meter that attaches to a Web Audio API node.
 * This meter does not affect the audio graph's output (it has no destination).
 * It's designed for passive analysis.
 *
 * @param {AudioContext} audioContext - The Web Audio API AudioContext.
 * @param {AudioNode} sourceNode - The node to monitor (e.g., a GainNode, OscillatorNode, or MediaStreamAudioSourceNode).
 * @param {object} [options={}] - Optional configuration.
 * @param {number} [options.fftSize=512] - The FFT size for the AnalyserNode. Affects resolution and performance.
 * @param {number} [options.smoothingTimeConstant=0.3] - Smoothing constant for the analyser.
 *
 * @returns {object} A meter object with the following methods:
 * - getRMS(): Returns the current Root Mean Square amplitude (a float from 0.0 to 1.0).
 * - getPeak(): Returns the current peak amplitude (a float from 0.0 to 1.0).
 * - stop(): Disconnects the analyser to allow for garbage collection. Call this when you're done.
 * - analyserNode: The underlying AnalyserNode, for advanced use.
 */
export function createAmplitudeMeter(audioContext, sourceNode, options = {}) {
  const { fftSize = 512, smoothingTimeConstant = 0.3 } = options;

  // 1. Create an AnalyserNode
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = fftSize;
  analyser.smoothingTimeConstant = smoothingTimeConstant;

  // 2. Create a buffer to hold the time-domain data
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Float32Array(bufferLength);

  // 3. Connect the source node to the analyser
  // This is a "tap" – it gets the data but doesn't output any sound.
  sourceNode.connect(analyser);

  /**
   * Calculates the Root Mean Square of the signal in the buffer.
   * @returns {number} The RMS value, a float between 0.0 and 1.0.
   */
  const getRMS = () => {
    analyser.getFloatTimeDomainData(dataArray);
    let sumOfSquares = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sumOfSquares += dataArray[i] * dataArray[i];
    }
    return Math.sqrt(sumOfSquares / dataArray.length);
  };

  /**
   * Calculates the peak amplitude of the signal in the buffer.
   * @returns {number} The peak value, a float between 0.0 and 1.0.
   */
  const getPeak = () => {
    analyser.getFloatTimeDomainData(dataArray);
    let peak = 0;
     for (let i = 0; i < dataArray.length; i++) {
        const absValue = Math.abs(dataArray[i]);
        if (absValue > peak) {
            peak = absValue;
        }
    }
    return peak;
  };

  /**
   * Cleans up by disconnecting the analyser from the source node.
   */
  const stop = () => {
    sourceNode.disconnect(analyser);
  };
  
  // 4. Return the public interface
  return {
    getRMS,
    getPeak,
    stop,
    analyserNode: analyser, // Expose for advanced usage
  };
}