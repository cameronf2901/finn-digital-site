import '../styles/work.css';

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
            <div className="project-placeholder">
              <span>Concept 001</span>
              <strong>Oak & Ember</strong>
              <small>Independent café concept</small>
            </div>
          </div>

          <div className="project-info">
            <div className="project-meta">
              <span>Website concept</span>
              <span>Hospitality</span>
              <span>2026</span>
            </div>

            <h3>Oak & Ember</h3>

            <p>
              A fictional café website concept designed around clear menus,
              opening hours, location details and a strong mobile experience.
            </p>

            <div className="project-goals">
              <span>01 — Clear menu access</span>
              <span>02 — Strong mobile layout</span>
              <span>03 — Easy directions & contact</span>
            </div>

            <span className="project-status">
              Full concept coming soon
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Work;