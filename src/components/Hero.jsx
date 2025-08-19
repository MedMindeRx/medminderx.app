import React from 'react';
import hero from '/hero.png';
import appstore from '/appstore.png';

const Hero = () => (
  <section className="hero" id="hero">
    <div className="container hero-container">
      <div className="hero-text">
        <h1 style={{ fontSize: '54px' }}>Medication Made Manageable.</h1>
        <p style={{ fontSize: '24px' }}>Stay ahead of your health: track, predict, and plan with MedMindeRx.</p>
        <div className="hero-buttons">
          <a href="#download"><img src={appstore} alt="App Store" style={{ width: "70%", height: "40%"}}/> </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="MedMindeRx App" style={{ width: "95%", marginLeft: "60px" }} />
      </div>
    </div>
  </section>
);

export default Hero;