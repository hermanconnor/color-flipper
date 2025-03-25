'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const tabsContainer = document.querySelector('.tabs');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const colorCode = document.getElementById('color-code');
  const copyBtn = document.getElementById('copy-btn');
  const generateBtn = document.getElementById('generate-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  let currentFormat = 'hex';
  let currentColor = '#6D28D9';

  body.style.backgroundColor = currentColor;

  function generateHexColor() {
    // Generate a random number between 0 and 16777215 (inclusive),
    // which is the total number of possible hex color combinations
    const randomNumber = Math.floor(Math.random() * 16777216);
    // Convert the random number to its hexadecimal representation
    // and pad with leading zeros if necessary.
    const hexString = randomNumber.toString(16).padStart(6, '0');

    return `#${hexString}`;
  }

  function generateRgbColor() {
    // Generate random values for red, green, and blue (0-255 inclusive)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function generateHslColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  function generateColor() {
    switch (currentFormat) {
      case 'hex':
        return generateHexColor();
      case 'rgb':
        return generateRgbColor();
      case 'hsl':
        return generateHslColor();
      default:
        return generateHexColor();
    }
  }

  function updateColor(color) {
    currentColor = color;
    body.style.backgroundColor = color;
    colorCode.textContent = color;
  }

  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(currentColor);
      showToast(`${currentColor} copied to clipboard!`);
    } catch (err) {
      showToast('Failed to copy. Please try again.');
      console.error('Failed to copy: ', err);
    }
  }

  // EVENT LISTENERS
  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;
    const button = target.closest('button');

    if (button) {
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      currentFormat = button.dataset.format;

      const newColor = generateColor();
      updateColor(newColor);
    }
  });

  copyBtn.addEventListener('click', copyToClipboard);

  generateBtn.addEventListener('click', () => {
    const newColor = generateColor();
    updateColor(newColor);
  });

  // KEYBOARD ACCESSIBILITY
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === generateBtn) {
      const newColor = generateColor();
      updateColor(newColor);
    }

    if (e.key === 'Enter' && document.activeElement === copyBtn) {
      copyToClipboard();
    }
  });
});
