(function () {
  const modal = document.querySelector('[data-project-modal]');
  if (!modal) return;
  const close = modal.querySelector('.modal-close');
  const fill = (project) => { modal.querySelector('[data-modal-title]').textContent = project.title; modal.querySelector('[data-modal-category]').textContent = project.category; modal.querySelector('[data-modal-description]').textContent = project.description; modal.querySelector('[data-modal-art]').style.setProperty('--modal-bg', project.background); modal.querySelector('[data-modal-art]').style.setProperty('--modal-accent', project.accent); modal.querySelector('[data-modal-details]').innerHTML = `<div><dt>Year</dt><dd>${project.year}</dd></div><div><dt>Format</dt><dd>${project.format}</dd></div><div><dt>Direction</dt><dd>Edit / visual rhythm</dd></div>`; };
  window.CESModal = { open(project) { fill(project); document.body.classList.add('is-locked'); modal.showModal(); } };
  close.addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => document.body.classList.remove('is-locked'));
  modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
})();
