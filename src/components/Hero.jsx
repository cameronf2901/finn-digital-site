import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Web design for small businesses</p>

          <h1>
            Websites that make local businesses easier to find, trust and contact.
          </h1>

          <p className="hero-description">
            Finn Digital creates straightforward websites and digital tools
            for small businesses in Dublin.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
                View my work
            </a>

            <a href="#contact" className="button button-secondary">
                Get in touch
            </a>
        </div>
        </div>

        <aside className="hero-note">
          <span className="hero-note-label">Finn Digital</span>

          <div className="hero-note-row">
            <span>Based</span>
            <strong>Dublin</strong>
          </div>

          <div className="hero-note-row">
            <span>Focus</span>
            <strong>Small business</strong>
          </div>

          <div className="hero-note-row">
            <span>Services</span>
            <strong>Web + digital</strong>
          </div>

          <div className="hero-note-row">
            <span>Projects</span>
            <strong>Taking enquiries</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;