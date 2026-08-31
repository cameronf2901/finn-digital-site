import '../styles/work.css';

import oakEmberPreview from '../assets/images/example.png';
import gritCityPreview from '../assets/images/grit-example.png';

function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Selected work</span>

          <h2>
            Different businesses.
            <br />
            Different approaches.
          </h2>
        </div>

        <div className="projects">
          <article className="featured-project">
            <div className="project-visual">
              <img
                src={oakEmberPreview}
                alt="Oak and Ember café website concept"
                className="project-preview"
              />
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>Website concept</span>
                <span>Café</span>
                <span>2026</span>
              </div>

              <h3>Oak & Ember</h3>

              <p>
                A fictional café concept designed and built from scratch to
                demonstrate responsive layout, menu presentation, brand
                storytelling and local-business contact information.
              </p>

              <div className="project-goals">
                <span>01 — Clear menu presentation</span>
                <span>02 — Strong local identity</span>
                <span>03 — Mobile-friendly layout</span>
              </div>

              <a
                href="https://oak-and-ember-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View live project →
              </a>
            </div>
          </article>

          <article className="featured-project">
            <div className="project-visual">
              <img
                src={gritCityPreview}
                alt="GRIT City streetwear website concept"
                className="project-preview"
              />
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>Website concept</span>
                <span>Streetwear</span>
                <span>2026</span>
              </div>

              <h3>GRIT//CITY</h3>

              <p>
                A fictional footwear and streetwear concept built around a
                darker visual identity, product-led layouts, scroll animation
                and campaign-style branding.
              </p>

              <div className="project-goals">
                <span>01 — Bold product presentation</span>
                <span>02 — Motion-led interactions</span>
                <span>03 — Responsive brand experience</span>
              </div>

              <a
                href="https://cameronf2901-grit-city-x4hf.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View live project →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Work;