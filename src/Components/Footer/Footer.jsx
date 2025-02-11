import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Company Info */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We provide the best fashion collections at affordable prices. 
              Shop your style with us!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/shop" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light fs-5"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-light fs-5"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-light fs-5"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light fs-5"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Fashion Store. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
