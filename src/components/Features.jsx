import React from 'react';

const featuresData = [
  { img: '/icons/stay-logged-in.png', title: 'Add Doses', desc: 'Never lose track of your progress.' },
  { img: '/icons/what-if-calculator.png', title: 'Language Support', desc: 'Choose from our collection of 14 languages.' },
  { img: '/icons/progress-tracking.png', title: 'Medication Tracking', desc: 'Monitor your improvements.' },
  { img: '/icons/gpa-calculator.png', title: 'Update Loved Ones', desc: 'Calculate your GPA easily.' },
  { img: '/icons/all-your-grades.png', title: 'Customize App', desc: 'See every grade in one place.' },
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