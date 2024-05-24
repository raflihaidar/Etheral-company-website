import AbstractView from "../../../utils/AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <header>
        <section>
          <div class="tagline">
            <h1>Capturing Moments,</h1>
            <h1>Creating Memories.</h1>
          </div>
          <div class="sub-tagline">
            <p>Every moment, turning ordinary scenes into extraordinary memories</p>
          </div>
        </section>
      </header>
      
      <section class="about-us">
        <div class="description">
          <div class="title">
            <h1>About Us.</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
            tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
            neque magna condimentum augue. Cras interdum blandit eros id eleifend.
            Sed lacinia augue ut lobortis aliquet.   Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Praesent rutrum,tortor quis pretium laoreet, 
            neque sem vestibulum lorem, quis convallis neque magna condimentum augue. 
            Cras interdum blandit eros id eleifend. Sed lacinia augue ut lobortis aliquet.
          </p>
        </div>
        <figure>
          <img src="/user/src/assets/about-us.jpg" alt="About us image" />
        </figure>
        <div class="reason">
          <div class="title">
            <h1>Why</h1>
            <h1>Ethereal Photography?</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
            tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
            neque magna condimentum augue. Cras interdum blandit eros id eleifend.
            Sed lacinia augue ut lobortis aliquet.
          </p>
        </div>
      </section>
      
      <section class="services">
        <ul class="card-container">
          <li>
            <figure>
              <img src="/user/src/assets/camera.png" alt="Potrait Photograpy"/>
            </figure>
            <p class="card-title">Potrait Photograpy</p>
            <p class="card-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet,
            </p>
          </li>
          <li>
            <figure>
              <img src="/user/src/assets/camera.png" alt="Product Photograpy"/>
            </figure>
            <p class="card-title">Product Photograpy</p>
            <p class="card-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet,
            </p>
          </li>
          <li>
            <figure>
              <img src="/user/src/assets/video.png" alt="Wedding Photograpy"/>
            </figure>
            <p class="card-title">Wedding Photograpy</p>
            <p class="card-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet,
            </p>
          </li>
        </ul>
        <div class="title">
          <h1>Our Services</h1>
        </div>
      </section>
      
      <section class="portfolio-container">
        <div class="gallery">
          <div class="title">
            <h1>Portfolio</h1>
          </div>
          <div class="portfolio-gallery">
            <figure class="image-grid-col-2 image-grid-row-2">
              <img src="/user/src/assets/model-1.jpeg" alt="karya 1" />
            </figure>
            <figure class="image-grid-col-2">
              <img src="/user/src/assets/model-2.jpeg" alt="karya 2" />
            </figure>
            <figure class="image-grid-col-2 image-grid-row-2">
              <img src="/user/src/assets/model-3.jpeg" alt="karya 3" />
            </figure>
            <figure>
              <img src="/user/src/assets/model-4.jpeg" alt="karya 4" />
            </figure>
            <figure>
              <img src="/user/src/assets/model-5.jpeg" alt="karya 5" />
            </figure>
          </div>
        </div>
        <button>See More</button>
      </section>
      
      <section class="testimonial">
        <h1>Testimoni.</h1>
        <div class="testimonial-list">
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
          <div class="testimonial-figure">
            <div class="testimonial-header">
              <img src="/user/src/assets/user.jpg" alt="user" />
              <div class="testimonial-profile">
                <p>Maulana Haqi</p>
                <p>maulanahaqi@mail.com</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum,
              tortor quis pretium laoreet, neque sem vestibulum lorem, quis convallis
              neque magna condimentum augue. Cras interdum blandit eros id eleifend.
              Sed lacinia augue ut lobortis aliquet.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}
