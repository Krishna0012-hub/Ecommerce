import React from 'react';
import star_icon from "../Assets/star_icon.jpg";
import star_dull_icon_1 from "../Assets/star_dull_icon_1.jpg";

const ProductDisplay = (props) => {
    const { product } = props;
    
    return (
        <div className='container my-5'>
            <div className='row'>
          
                <div className='col-12 col-md-6'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='d-flex justify-content-center mb-3'>
                            <img src={product.image} alt="" className="img-thumbnail me-2" style={{ width: '70px', height: '70px' }} />
                            <img src={product.image} alt="" className="img-thumbnail me-2" style={{ width: '70px', height: '70px' }} />
                            <img src={product.image} alt="" className="img-thumbnail" style={{ width: '70px', height: '70px' }} />
                        </div>
                        <div>
                            <img className='img-fluid border' src={product.image} alt="" style={{ maxHeight: '400px' }} />
                        </div>
                    </div>
                </div>

                
                <div className='col-12 col-md-6'>
                    <h1 className="mt-4 mt-md-0">{product.name}</h1>
                    <div className='d-flex align-items-center my-3'>
                        <img src={star_icon} alt="" style={{ width: '20px', height: '20px' }} className="me-1" />
                        <img src={star_icon} alt="" style={{ width: '20px', height: '20px' }} className="me-1" />
                        <img src={star_icon} alt="" style={{ width: '20px', height: '20px' }} className="me-1" />
                        <img src={star_dull_icon_1} alt="" style={{ width: '20px', height: '20px' }} className="me-1" />
                        <p className='mb-0 ms-2'>122 Reviews</p>
                    </div>
                    <div className=''>
                        <div>${product.old_price}</div>
                        <div>${product.new_price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
