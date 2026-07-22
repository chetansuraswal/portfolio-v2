(function () {
  const loader = document.querySelector('[data-loader]');
  const count = loader && loader.querySelector('.loader-count');
  if (!loader) return;
  let value = 0;
  const timer = window.setInterval(() => {
    value = Math.min(value + (value < 75 ? 7 : 2), 100);
    if (count) count.textContent = String(value).padStart(2, '0');
    if (value === 100) {
      window.clearInterval(timer);
      window.setTimeout(() => loader.classList.add('is-complete'), 180);
    }
  }, 30);
})();
