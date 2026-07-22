(function () {
  const fallbackProjects = [
    { id: 'neon-arc', number: '01', title: 'Neon Arc', category: 'Brand launch film', description: 'A charged launch narrative for a performance-led footwear label.', year: '2026', format: 'Launch / 60 sec', background: 'radial-gradient(circle at 78% 20%, #e77865, transparent 30%), linear-gradient(132deg, #172341, #842f4f)', accent: '#ec9b63' },
    { id: 'horizon', number: '02', title: 'Horizon', category: 'Hospitality campaign', description: 'A sun-washed film about the quiet rituals of going somewhere new.', year: '2025', format: 'Campaign / 45 sec', background: 'radial-gradient(circle at 40% 63%, #edc87e, transparent 20%), linear-gradient(135deg, #6b4935, #d77947)', accent: '#f8c978' },
    { id: 'orbit', number: '03', title: 'Orbit 01', category: 'Technology film', description: 'Complex technology made tactile through rhythm, motion and form.', year: '2025', format: 'Product / 90 sec', background: 'radial-gradient(circle at 75% 32%, #7a5eff, transparent 28%), linear-gradient(126deg, #0a101d, #283858)', accent: '#a994ff' },
    { id: 'altra', number: '04', title: 'Altra', category: 'Fashion editorial', description: 'A controlled study in contrast, movement and the architecture of fabric.', year: '2024', format: 'Editorial / 30 sec', background: 'radial-gradient(circle at 30% 70%, #d4c8b2, transparent 22%), linear-gradient(135deg, #191919, #71604f)', accent: '#e5d3b7' },
    { id: 'aether', number: '05', title: 'Aether', category: 'Automotive campaign', description: 'A restrained visual language for a new kind of electric movement.', year: '2024', format: 'Campaign / 60 sec', background: 'radial-gradient(circle at 80% 20%, #24a2c2, transparent 25%), linear-gradient(135deg, #061218, #274b57)', accent: '#7edff4' }
  ];
  const track = document.querySelector('[data-project-track]');
  const renderProjects = (projects) => { if (!track) return; track.innerHTML = projects.map((project) => `<article class="project-card magnetic" style="--project-bg:${project.background};--project-accent:${project.accent}"><div class="project-art" aria-hidden="true"></div><span class="project-number">${project.number} / 05</span><div class="project-body"><p class="project-category">${project.category}</p><h3 class="project-title">${project.title}</h3><p class="project-description">${project.description}</p><button class="project-open" type="button" data-project-id="${project.id}">Project details <span>↗</span></button></div></article>`).join(''); track.querySelectorAll('[data-project-id]').forEach((button) => button.addEventListener('click', () => { const project = projects.find((item) => item.id === button.dataset.projectId); if (project && window.CESModal) window.CESModal.open(project); })); };
  renderProjects(fallbackProjects);
  if (location.protocol !== 'file:') fetch('data/projects.json').then((response) => response.ok ? response.json() : Promise.reject()).then((projects) => renderProjects(projects)).catch(() => {});
  if (track) { let isDown = false, originX = 0, originScroll = 0; track.addEventListener('pointerdown', (event) => { isDown = true; originX = event.clientX; originScroll = track.scrollLeft; track.classList.add('is-dragging'); track.setPointerCapture(event.pointerId); }); track.addEventListener('pointermove', (event) => { if (isDown) track.scrollLeft = originScroll - (event.clientX - originX); }); const end = () => { isDown = false; track.classList.remove('is-dragging'); }; track.addEventListener('pointerup', end); track.addEventListener('pointercancel', end); }
  const showreel = document.querySelector('[data-showreel]');
  if (showreel) {
    const video = showreel.querySelector('video');
    showreel.addEventListener('click', () => {
      const active = showreel.classList.toggle('is-playing');
      showreel.setAttribute('aria-label', active ? 'Pause showreel' : 'Play showreel');
      showreel.querySelector('b').textContent = active ? 'Pause showreel' : 'Play showreel';
      showreel.querySelector('.play-control i').textContent = active ? 'Ⅱ' : '▶';
      if (video) { if (active) video.play().catch(() => {}); else video.pause(); }
    });
  }
})();
