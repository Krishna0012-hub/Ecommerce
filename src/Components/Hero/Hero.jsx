import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.jpg'
import arrow_icon1 from '../Assets/arrow_icon1.jpg'
import hello_hand_icon from '../Assets/hello_hand_icon.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2> NEW ARRIVAL ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hello_hand_icon} alt=""/>
                
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon1} alt="404"/>
        </div>
      </div>
      <div className='hero-right'></div>
      <img src={hand_icon} alt=""/>
    </div>
  );
}

export default Hero;
