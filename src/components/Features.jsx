import React from 'react';
import dose from '/dose.png';
import language from '/language.png';
import track from '/track.png';
import update from '/update.png';
import custom from '/custom.png';

const featuresData = [
  { img: dose, title: 'Add Doses', desc: 'Never lose track of your progress.' },
  { img: language, title: 'Language Support', desc: 'Choose from our collection of 14 languages.' },
  { img: track, title: 'Medication Tracking', desc: 'Monitor your improvements.' },
  { img: update, title: 'Update Loved Ones', desc: 'Keep your contacts in the loop.' },
  { img: custom, title: 'Customize App', desc: 'Pick from a variety of 5 colors, profile uploads, and more.' },
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