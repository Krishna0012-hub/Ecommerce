import React from 'react';
import banner from '../Assets/banner_1.jpg';
// import { FaTruck, FaMoneyBillWave, FaUndo } from 'react-icons/fa'; 

export const Banner = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center" style={{ backgroundColor: "rgb(240, 240, 240)", padding: "20px", borderRadius: "10px" }}>
        
        <div className="col-md-5">
          <h1 className="display-4" style={{ fontWeight: "bold" }}>Lowest Prices <br /> Best Quality Shopping</h1>
          <div className="d-flex justify-content-start my-3">
            <div className="me-4 text-center">
              {/* <FaTruck size={30} className="text-primary" /> */}
              <p>Free Delivery</p>
            </div>
            <div className="me-4 text-center">
              {/* <FaMoneyBillWave size={30} className="text-success" /> */}
              <p>Cash on Delivery</p>
            </div>
            <div className="text-center">
              {/* <FaUndo size={30} className="text-warning" /> */}
              <p>Easy Returns</p>
            </div>
          </div>
          {/* <button className="btn btn-primary mt-3" style={{ backgroundColor: "#8338ec", border: "none" }}>
            Download the Meesho App
          </button> */}
        </div>
        
        <div className="col-md-6">
          <img src={banner} alt="Banner" className="img-fluid" style={{ borderRadius: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
