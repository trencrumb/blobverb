// log-slider.js

/**
 * A collection of utility functions for converting between decibels,
 * linear gain, and a slider's linear position.
 */
export const logScale = {
  /**
   * Converts a linear gain value (e.g., 0.5) to decibels.
   * @param {number} gain - Linear gain factor.
   * @returns {number} The value in decibels.
   */
  gainToDb: (gain) => 20 * Math.log10(gain),

  /**
   * Converts a decibel value to a linear gain factor.
   * @param {number} db - The value in decibels.
   * @returns {number} The linear gain factor.
   */
  dbToGain: (db) => Math.pow(10, db / 20),
};


/**
 * Initializes a logarithmic dB slider.
 * @param {object} options - The configuration object.
 * @param {HTMLInputElement} options.sliderEl - The slider input element.
 * @param {HTMLElement} options.outputEl - The element to display the dB value.
 * @param {number} [options.minDb=-60] - The minimum dB value (practical -infinity).
 * @param {number} [options.maxDb=12] - The maximum dB value.
 * @param {number} [options.defaultDb=0] - The initial dB value.
 * @returns {object} A controller object with methods to interact with the slider.
 */
export function initLogSlider(options) {
  // 1. Destructure and set default options
  const {
    sliderEl,
    outputEl,
    minDb = -60,
    maxDb = 12,
    defaultDb = 0
  } = options;

  if (!sliderEl || !outputEl) {
    throw new Error('sliderEl and outputEl must be provided.');
  }

  const sliderMin = parseFloat(sliderEl.min);
  const sliderMax = parseFloat(sliderEl.max);

  // 2. Define the core mapping functions using the provided dB range
  const minGain = logScale.dbToGain(minDb);
  const maxGain = logScale.dbToGain(maxDb);

  /**
   * Converts a linear slider value to its corresponding dB value.
   */
  function sliderValueToDb(value) {
    if (value == sliderMin) {
      return -Infinity;
    }
    const percentage = (value - sliderMin) / (sliderMax - sliderMin);
    const gain = minGain * Math.pow(maxGain / minGain, percentage);
    return logScale.gainToDb(gain);
  }

  /**
   * Converts a dB value to the corresponding linear slider position.
   */
  function dbToSliderValue(db) {
    if (db === -Infinity) {
      return sliderMin;
    }
    const gain = logScale.dbToGain(db);
    const percentage = Math.log(gain / minGain) / Math.log(maxGain / minGain);
    const value = sliderMin + (sliderMax - sliderMin) * percentage;
    return value;
  }

  // 3. Define the update handler
  function updateDisplay() {
    const dbValue = sliderValueToDb(parseFloat(sliderEl.value));
    if (dbValue === -Infinity) {
      outputEl.textContent = '-∞ dB';
    } else {
      const sign = dbValue > 0 ? '+' : '';
      outputEl.textContent = `${sign}${dbValue.toFixed(1)} dB`;
    }
  }

  // 4. Set up the event listener and initial state
  sliderEl.addEventListener('input', updateDisplay);

  // --- API / Controller ---
  // We return an object that allows programmatic control.
  const controller = {
    /**
     * Sets the slider's value to the given dB level.
     * @param {number} db - The target decibel value.
     */
    setDb(db) {
      sliderEl.value = dbToSliderValue(db);
      // Manually trigger the 'input' event to update the display
      sliderEl.dispatchEvent(new Event('input', { bubbles: true }));
    },

    /**
     * Gets the current dB value of the slider.
     * @returns {number} The current decibel value.
     */
    getDb() {
      return sliderValueToDb(parseFloat(sliderEl.value));
    },

    /**
     * Gets the current linear gain value of the slider.
     * @returns {number} The current linear gain value.
     */
    getGain() {
      return logScale.dbToGain(this.getDb());
    },

    /**
     * Removes the event listener to clean up.
     */
    destroy() {
      sliderEl.removeEventListener('input', updateDisplay);
    }
  };
  
  // Set the initial default value
  controller.setDb(defaultDb);

  return controller;
}