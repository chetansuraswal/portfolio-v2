(function () {
  const progress = document.querySelector('.page-progress span');
  const navLinks = [...document.querySelectorAll('.nav-menu a')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach((section) => observer.observe(section));
  const toggle = document.querySelector('.nav-toggle'); const menu = document.querySelector('.nav-menu');
  if (toggle && menu) { toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); menu.classList.toggle('is-open', !open); }); menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); })); }
})();
