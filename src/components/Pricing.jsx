import '../styles/pricing.css';

function Pricing() {
  return (


<section className="pricing" id="pricing">
  <div className="container">
    <div className="section-heading">
      <span className="section-label">Pricing</span>

      <h2>Simple pricing for small businesses.</h2>

      <p className="launch-offer">
        Launch offer — reduced pricing for my first 3 clients.
      </p>
    </div>

    <div className="pricing-grid">
      <article className="pricing-card">
        <h3>Starter</h3>

        <div className="price">
          <span className="old-price">€99</span>
          <span className="new-price">€60</span>
        </div>

        <p>
          A simple digital tidy-up for businesses that already have an online
          presence but need it cleaned up.
        </p>

        <ul>
          <li>Google Business review</li>
          <li>Contact and social checks</li>
          <li>Mobile website review</li>
          <li>Review QR code setup</li>
        </ul>
      </article>

      <article className="pricing-card">
        <h3>Website</h3>

        <div className="price">
          <span className="old-price">€199</span>
          <span className="new-price">€120</span>
        </div>

        <p>
          A clean one-page website designed around your business, services and
          contact information.
        </p>

        <ul>
          <li>Responsive one-page website</li>
          <li>Services or pricing section</li>
          <li>Contact or booking links</li>
          <li>Google Maps integration</li>
          <li>Basic SEO setup</li>
        </ul>
      </article>

      <article className="pricing-card">
        <h3>Pro</h3>

        <div className="price">
          <span className="old-price">€349</span>
          <span className="new-price">€200</span>
        </div>

        <p>
          A larger website for businesses that need more space for services,
          bookings and content.
        </p>

        <ul>
          <li>3–5 page website</li>
          <li>Contact form</li>
          <li>Booking integration</li>
          <li>Gallery or testimonials</li>
          <li>Analytics setup</li>
        </ul>
      </article>
    </div>
  </div>
</section>

)}

export default Pricing;