import '../styles/what-i-do.css';

const services = [
  {
    number: '01',
    title: 'Business Websites',
    tagline: 'Clear, fast, easy to use.',
    points: [
      'One-page websites',
      'Mobile-first layouts',
      'Contact and booking links',
    ],
  },
  {
    number: '02',
    title: 'Website Redesigns',
    tagline: 'A better first impression.',
    points: [
      'Cleaner layout',
      'Sharper content hierarchy',
      'Improved mobile experience',
    ],
  },
  {
    number: '03',
    title: 'Bookings & Enquiries',
    tagline: 'Less friction. More action.',
    points: [
      'Booking links',
      'Contact forms',
      'Call and message buttons',
    ],
  },
  {
    number: '04',
    title: 'Digital Setup',
    tagline: 'Small improvements that matter.',
    points: [
      'Review QR codes',
      'Google Business help',
      'Maps and contact links',
    ],
  },
];

function WhatIDo() {
  return (
    <section className="what-i-do">
      <div className="container">
        <div className="what-i-do-heading">
          <p className="section-kicker">What I do</p>

          <h2>
            Small changes that make a business feel more professional online.
          </h2>
        </div>

        <div className="what-i-do-list">
          {services.map((service) => (
            <article className="what-i-do-item" key={service.number}>
              <span className="what-i-do-number">{service.number}</span>

              <div className="what-i-do-main">
                <h3>{service.title}</h3>
                <p className="service-tagline">{service.tagline}</p>
              </div>

              <div className="service-points">
                {service.points.map((point) => (
                  <span key={point}>→ {point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;