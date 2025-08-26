import React from 'react';

const featuresData = [
  { img: '/dose.png', title: 'Add Doses', desc: 'Never lose track of your progress.' },
  { img: '/language.png', title: 'Language Support', desc: 'Choose from our collection of 14 languages.' },
  { img: '/track.png', title: 'Medication Tracking', desc: 'Monitor your improvements.' },
  { img: '/update.png', title: 'Update Loved Ones', desc: 'Keep your contacts in the loop.' },
  { img: '/custom.png', title: 'Customize App', desc: 'Pick from a variety of 5 colors, profile uploads, and more.' },
];

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <h2>Features</h2>
      <p>Everything MedMindeRx has to offer</p>
      <div className="features-grid">
        {featuresData.map((feat, idx) => (
          <div className="feature-card" key={idx}>
            <img src={feat.img} alt={feat.title} />
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;