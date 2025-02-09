import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Hero.css';
import hand_icon from '../Assets/hand_icon.jpg';
import arrow_icon1 from '../Assets/arrow_icon1.jpg';
import hello_hand_icon from '../Assets/hello_hand_icon.jpg';

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="text-uppercase fw-bold">New Arrival Only</h2>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <p className="fs-4 fw-bold mb-0">new</p>
            <img src={hello_hand_icon} alt="Hand Icon" className="ms-2" width="40" />
          </div>
          <p className="fs-1 fw-bold">Collections</p>
          <p className="fs-3">For Everyone</p>

          {/* Button */}
          <div className="d-flex align-items-center mt-4">
            <button className="btn btn-primary fw-bold">Latest Collection</button>
            <img src={arrow_icon1} alt="Arrow" className="ms-2" width="30" />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img src={hand_icon} alt="Hand Icon" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
