(function () {
  const principles = [
    ['Brand Emotion', 'The first decision is always emotional: what should remain with the viewer after the screen goes dark?', '#0770e3'],
    ['Editing Philosophy', 'Every cut is a choice between momentum and stillness. The right one makes the idea feel inevitable.', '#273d5b'],
    ['Visual Language', 'A coherent system of imagery gives a story its own recognisable voice.', '#af7856'],
    ['Color Philosophy', 'Color is a temperature, a memory and an instruction for how a viewer should feel.', '#cc8e32'],
    ['Contrast Philosophy', 'Light becomes powerful when it has somewhere to fall away from.', '#111111'],
    ['Motion Philosophy', 'Motion should reveal a thought—not compete with it.', '#476e78'],
    ['Transition Philosophy', 'Transitions are punctuation. Used with restraint, they make an edit breathe.', '#815cc9'],
    ['Typography', 'Type is not an overlay. It is a voice with weight, pace and a place in the frame.', '#d03e5f'],
    ['Text Animation', 'Words move like a sentence is spoken: with emphasis, pause and purpose.', '#4b83cc'],
    ['Sound Identity', 'A sonic detail can make an image feel closer, larger or entirely new.', '#6c7351'],
    ['Music Identity', 'The score carries the energy beneath the picture, quietly directing the pulse.', '#b04d3f'],
    ['Pacing', 'Pace is the invisible architecture of attention.', '#3f607a'],
    ['Frame Composition', 'Every edge of a frame should contribute to the story inside it.', '#8d6a38'],
    ['Camera Language', 'How a camera observes changes what an audience believes.', '#44644c'],
    ['Thumbnail Philosophy', 'The first frame is a promise. It must make the right one.', '#ad537a'],
    ['Logo Philosophy', 'A mark arrives at its strongest when the story has earned it.', '#446cb8'],
    ['Export Philosophy', 'The final deliverable respects every screen, every pixel and every detail.', '#434751']
  ];
  const container = document.querySelector('[data-principles]'); const rail = document.querySelector('[data-principle-rail]'); const progress = document.querySelector('.principle-progress span');
  if (!container || !rail) return;
  container.innerHTML = principles.map(([title, copy, color], index) => `<article class="principle" id="principle-${index + 1}" style="--principle-color:${color}"><div class="principle-copy"><span class="principle-index">${String(index + 1).padStart(2, '0')} / ${String(principles.length).padStart(2, '0')}</span><h3>${title}</h3><p>${copy}</p></div><div class="principle-visual" aria-hidden="true"></div></article>`).join('');
  rail.innerHTML = principles.map(([title], index) => `<button type="button" data-principle-target="principle-${index + 1}">${title}</button>`).join('');
  rail.addEventListener('click', (event) => { const button = event.target.closest('[data-principle-target]'); if (button) document.getElementById(button.dataset.principleTarget).scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  const items = [...container.children]; const buttons = [...rail.querySelectorAll('button')];
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (!entry.isIntersecting) return; const index = items.indexOf(entry.target); entry.target.classList.add('in-view'); buttons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index)); progress.style.width = `${((index + 1) / items.length) * 100}%`; buttons[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }), { threshold: .55 });
  items.forEach((item) => observer.observe(item));
})();
