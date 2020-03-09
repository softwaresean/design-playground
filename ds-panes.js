'use-strict';

class DsPane extends HTMLElement {
  constructor() {
    super();
  }
  get header() {
    if (!this._header) {
      this._header = this.querySelector('button[role="tab"]');
    }
    return this._header;
  }
  get content() {
    if (!this._content) {
      this._content = this.querySelector('.content');
    }
    return this._content;
  }
  createdCallback() {

  }
  attachedCallback() {

  }
  detachedCallback() {

  }
}

customElements.define('ds-pane', DsPane);
