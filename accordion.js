const panes = document.querySelectorAll('.ds-pane');

function panelEventHandler(panes) {
  if (panes.length === 0) return;
  panes.forEach(pane => {
    const panelBtn = pane.querySelector('button');
    panelBtn.addEventListener('click', setPanelAttr);
  });
}

function setPanelAttr() {
  const panel = this.parentElement;
  const panelAttrBool = panel.getAttribute('aria-expanded') == 'true' ? true : false;
  return panel.setAttribute('aria-expanded', !panelAttrBool);
}

panelEventHandler(panes);

