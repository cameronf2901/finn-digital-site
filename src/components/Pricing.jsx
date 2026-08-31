import '../styles/pricing.css';

const packages = [
  {
    name: 'Starter',
    price: '€99',
    description: 'For businesses that need a digital tidy-up.',
    features: [
      'Online presence audit',
      'Google Business recommendations',
      'Review QR code',
      'Contact link cleanup',
      'Mobile usability check',
    ],
  },
  {
    name: 'Website',
    price: '€199',
    description: 'For businesses that need a simple, modern website.',
    features: [
      'One-page responsive website',
      'Services or pricing section',
      'Contact and booking links',
      'Google Maps integration',
      'Basic SEO setup',
    ],
  },
  {
    name: 'Pro',
    price: '€349',
    description: 'For businesses that need a stronger online presence.',
    features: [
      '3–5 page website',
      'Contact or enquiry form',
      'Booking integration',
      'Gallery or testimonials',
      'Analytics setup',
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-heading">
          <p className="section-kicker">Pricing</p>
          <h2>Clear pricing, without the agency markup.</h2>
        </div>

        <div className="pricing-grid">
          {packages.map((item) => (
            <article className="pricing-item" key={item.name}>
              <div className="pricing-top">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>

              <p>{item.description}</p>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>→ {feature}</li>
                ))}
              </ul>

            
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;