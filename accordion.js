let panes = null;
panes = document.querySelectorAll('.ds-pane');

function calculateGeometries(panes) {
  debugger
  if (panes.length === 0) return;
  let baseY = 0;
  panes.forEach((pane, index) => {
    const headerHeight = pane.querySelector('button[role="tab"]').offsetHeight;
    const availableHeight = pane.offsetHeight = (panes.length * headerHeight)
    const paneContent = pane.querySelector('.content');
    pane.style.transform = `translateY(${baseY + (headerHeight * index)}px)`;
    paneContent.style.height = `${availableHeight}px`;
    if(pane.getAttribute('aria-expanded')) {
      baseY = availableHeight;
    }
  });
}
calculateGeometries(panes);