import '../styles/about.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2>A small studio, built around practical work.</h2>
        </div>

        <div className="about-copy">
          <p>
            Finn Digital is a Dublin-based web and digital service focused on
            helping small businesses improve how they look and work online.
          </p>

          <p>
            I focus on clear websites, easier contact and booking, and practical
            improvements that make sense for the business using them.
          </p>

          <p>
            I am a Third year Computing student at the National College of Ireland, where I have been learning about web development and design. I have a passion for creating simple, effective digital solutions that help small businesses succeed online.
          </p>

          <div className="about-details">
            <span>Dublin based</span>
            <span>Small business focused</span>
            <span>Web design & digital setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;