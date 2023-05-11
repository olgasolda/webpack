function createStatistics() {
  let counter = 0;
let isDestroyed = false;

  const listener = () => ++counter;
  document.addEventListener('click', listener);
  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
      return 'Destroyed succsessfully'
    },

    getClicks() {
      if (isDestroyed) return 'Statistics was destroyed'
      return counter
    }
  }
}

window.statistics = createStatistics();