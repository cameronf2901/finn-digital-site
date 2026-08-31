import '../styles/work.css';
import oakEmberPreview from '../assets/images/example.png';

function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work-heading">
          <p className="section-kicker">Selected work</p>

          <h2>Simple websites built around how real businesses work.</h2>
        </div>

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
              <span>Hospitality</span>
              <span>2026</span>
            </div>

            <h3>Oak & Ember</h3>

            <p>
            A fictional café concept designed and built from scratch to demonstrate
            responsive layout, menu presentation, brand storytelling and local-business
            contact information.
            </p>


            <div className="project-goals">
              <span>01 — Clear menu access</span>
              <span>02 — Strong mobile layout</span>
              <span>03 — Easy directions & contact</span>
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
      </div>
    </section>
  );
}

export default Work;