import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <p className="section-kicker">Contact</p>

        <h2>Have a website that could be better?</h2>

        <p>
          Tell me a little about your business and what you'd like to improve.
        </p>

        <a
          className="contact-button"
          href="mailto:cameronf015@gmail.com"
        >
          Send me an email →
        </a>
      </div>
    </section>
  );
}

export default Contact;