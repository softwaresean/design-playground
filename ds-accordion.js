'use-strict';

class DsAccordion extends HTMLElement {
  constructor() {
    super();
    
  }
  connectedCallback	() {
    this._panes = null;
  }
  attachedCallback() {
    this._panes = this.querySelectorAll('ds-pane');
    this._calculateGeometries();
  }
  disconnectedCallback() {
    this._panes = null;
  }
  _calculateGeometries() {
    if (this._panes.length === 0) return;
    this._headerHeight = this._panes[0].header.offsetHeight;
    this._availableHeight = this.offsetHeight - (this._panes.length * this._headerHeight);
    let baseY = 0
    this._panes.forEach((pane, index) => {
        pane.style.transform = `translateY(${baseY + (this._headerHeight * index)}px)`;
        pane.content.style.height = `${this._availableHeight}px`;
        if(pane.getAttribute('aria-expanded')) {
          baseY = this._availableHeight;
        }
    });
  }
}

customElements.define('ds-accordion', DsAccordion);
