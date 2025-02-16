import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.jpg';
import hello_hand_icon from '../Assets/hello_hand_icon.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Lowest Prices</h2>
        <h2>Best Quality Shopping</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hello_hand_icon} alt="Hand Icon" />
        </div>
        <button className="hero-latest-btn">
          Download the App
        </button>
      </div>

      <div className="col-md-6 text-center">
        <img src={hand_icon} alt="Hand Icon" className="img-fluid rounded" />
      </div>
    </div>
  );
};

export default Hero;
