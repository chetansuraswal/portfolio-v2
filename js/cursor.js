(function () {
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;
  let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
  document.body.classList.add('has-cursor');
  document.addEventListener('pointermove', (event) => { mouseX = event.clientX; mouseY = event.clientY; dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`; });
  const moveRing = () => { ringX += (mouseX - ringX) * .16; ringY += (mouseY - ringY) * .16; ring.style.transform = `translate(${ringX}px, ${ringY}px)`; requestAnimationFrame(moveRing); };
  moveRing();
  document.querySelectorAll('a, button, .magnetic').forEach((element) => {
    element.addEventListener('pointerenter', () => document.body.classList.add('cursor-hover'));
    element.addEventListener('pointerleave', () => document.body.classList.remove('cursor-hover'));
  });
})();
