import AbstractView from "../../../utils/AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome to Gallery Page</h1>
        `;
  }
}
