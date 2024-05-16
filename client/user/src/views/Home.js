import AbstractView from "../../../utils/AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <header>
              <div>
                <h1 class="brand">Ethereal</h1>
                <h1>Fotografi</h1>
              </div>
            </header>
            <section class="work-container">
              <h1>Karya Terbaru Kami</h1>
              <div class="work">
                <figure>
                  <img src="/user/src/assets/header-1.jpg" alt="karya 1" />
                </figure>
                <figure>
                  <img src="/user/src/assets/header-1.jpg" alt="karya 1" />
                </figure>
                <figure>
                  <img src="/user/src/assets/header-1.jpg" alt="karya 1" />
                </figure>
                <figure>
                  <img src="/user/src/assets/header-1.jpg" alt="karya 1" />
                </figure>
              </div>
            </section>
            <section class="testimonial">
              <h1>Testimoni</h1>
              <figure class="testimonial-figure">
                <img src=/user/src/assets/user.jpg> 
              </figure> <figure class="testimonial-figure">
                <img src=/user/src/assets/user.jpg> 
              </figure> 
            </section>
        `;
  }
}
