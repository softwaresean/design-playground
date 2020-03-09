let panes = null;
panes = document.querySelectorAll('.ds-pane');

function calculateGeometries(panes) {
  if (panes.length === 0) return;
  panes.forEach((pane, index) => {
    const panelBtn = pane.querySelector('button');
    panelBtn.addEventListener('click', () => {
      const dspane = panelBtn.parentElement;
      dspane.getAttribute('aria-expanded') == 'true' ?
      dspane.setAttribute('aria-expanded', false) :
      dspane.setAttribute('aria-expanded', true)
    });
  });
}
calculateGeometries(panes);