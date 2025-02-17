import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#description" data-bs-toggle="tab">Description</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews" data-bs-toggle="tab">Reviews (122)</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="description">
              <p>
                An e-commerce clothes website is an online platform that allows customers to browse, select, and purchase clothing and fashion accessories from the comfort of their own homes. 
                It serves as a virtual storefront for fashion brands, retailers, or independent sellers, offering a wide range of apparel, including casual wear, formal attire, activewear, 
                and accessories like shoes, bags.
              </p>
            </div>
            <div className="tab-pane fade" id="reviews">
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
