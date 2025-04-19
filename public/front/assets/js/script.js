document.addEventListener('DOMContentLoaded', function() {
      // Define the allowed overall price range.
      const MIN_PRICE = 0;
      const MAX_PRICE = 1000000;
      // Get references to the input fields and Ok button.
      const priceInputMin = document.getElementById('price-min');
      const priceInputMax = document.getElementById('price-max');
      const okButton = document.getElementById('price-ok');
      // Get references to slider elements.
      const scale = document.querySelector('.scale');
      const bar = document.querySelector('.bar');
      const toggleMin = document.querySelector('.range-toggle-min');
      const toggleMax = document.querySelector('.range-toggle-max');
      // Returns the left offset and width of the scale element.
      function getScaleDimensions() {
        const rect = scale.getBoundingClientRect();
        return {
          left: rect.left,
          width: rect.width
        };
      }
      // Given a price value, return the x‑position (in pixels) on the scale.
      function valueToPosition(value) {
        const {
          width
        } = getScaleDimensions();
        return ((value - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * width;
      }
      // Convert a position on the scale (in pixels) to a price value.
      function positionToValue(pos) {
        const {
          width
        } = getScaleDimensions();
        return MIN_PRICE + (pos / width) * (MAX_PRICE - MIN_PRICE);
      }
      // Update the positions of the toggles and the bar based on the input values.
      function updateUI() {
        let minVal = parseInt(priceInputMin.value.replace(/\s/g, ''), 10) || MIN_PRICE;
        let maxVal = parseInt(priceInputMax.value.replace(/\s/g, ''), 10) || MAX_PRICE;
        // Clamp the values within the allowed range.
        minVal = Math.max(MIN_PRICE, Math.min(minVal, MAX_PRICE));
        maxVal = Math.max(MIN_PRICE, Math.min(maxVal, MAX_PRICE));
        if (minVal > maxVal) {
          [minVal, maxVal] = [maxVal, minVal];
        }
        priceInputMin.value = minVal;
        priceInputMax.value = maxVal;
        const posMin = valueToPosition(minVal);
        const posMax = valueToPosition(maxVal);
        const toggleWidth = toggleMin.offsetWidth;
        // Position the toggles so that their centers align with the computed positions.
        toggleMin.style.left = (posMin - toggleWidth / 2) + 'px';
        toggleMax.style.left = (posMax - toggleWidth / 2) + 'px';
        updateBar();
      }
      // Update the green bar to span between the centers of the two toggles.
      function updateBar() {
        const toggleWidth = toggleMin.offsetWidth;
        const posMin = parseFloat(toggleMin.style.left) + toggleWidth / 2;
        const posMax = parseFloat(toggleMax.style.left) + toggleWidth / 2;
        bar.style.left = posMin + 'px';
        bar.style.width = (posMax - posMin) + 'px';
      }
      // Add dragging functionality to a toggle.
      function addDrag(toggle, isMin) {
        toggle.addEventListener('mousedown', function(e) {
          e.preventDefault();
          const toggleWidth = toggle.offsetWidth;
          const {
            left: scaleLeft,
            width: scaleWidth
          } = getScaleDimensions();
          // As the mouse moves, update the toggle’s center position.
          function onMouseMove(e) {
            let newCenter = e.clientX - scaleLeft;
            // Constrain the toggle so that:
            // - The min toggle does not go left of 0 or past the max toggle.
            // - The max toggle does not go right of the scale or before the min toggle.
            if (isMin) {
              newCenter = Math.max(0, newCenter);
              const maxCenter = parseFloat(toggleMax.style.left) + toggleWidth / 2;
              newCenter = Math.min(newCenter, maxCenter);
            } else {
              newCenter = Math.min(scaleWidth, newCenter);
              const minCenter = parseFloat(toggleMin.style.left) + toggleWidth / 2;
              newCenter = Math.max(newCenter, minCenter);
            }
            // Update the toggle’s left position.
            toggle.style.left = (newCenter - toggleWidth / 2) + 'px';
            // Update the corresponding input field.
            const newValue = Math.round(positionToValue(newCenter));
            if (isMin) {
              priceInputMin.value = newValue;
            } else {
              priceInputMax.value = newValue;
            }
            updateBar();
          }

          function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          }
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });
      }
      // Enable dragging on both toggles.
      addDrag(toggleMin, true);
      addDrag(toggleMax, false);
      // When clicking the Ok button, update the slider positions from the inputs.
      okButton.addEventListener('click', updateUI);
      // Also update when an input loses focus.
      priceInputMin.addEventListener('blur', updateUI);
      priceInputMax.addEventListener('blur', updateUI);
      // On initial load (and on window resize) update the UI.
      updateUI();
      window.addEventListener('resize', updateUI);
    });