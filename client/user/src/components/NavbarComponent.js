class NavigationBar extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <h1>Ethereal</h1>
    `;
  }
}

export default NavigationBar;
