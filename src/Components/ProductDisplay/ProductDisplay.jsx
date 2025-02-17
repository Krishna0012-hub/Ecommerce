import React, {useContext} from 'react';
import star_icon from "../Assets/star_icon.jpg";
import star_dull_icon_1 from "../Assets/star_dull_icon_1.jpg";
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    
    return (
        <div className='container my-5'>
            <div className='row gx-5'>
                
                <div className='col-12 col-md-6'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='d-flex justify-content-center mb-3'>
                            <img src={product.image} alt="" className="img-thumbnail me-2" style={{ width: '70px', height: '70px', cursor: 'pointer' }} />
                            <img src={product.image} alt="" className="img-thumbnail me-2" style={{ width: '70px', height: '70px', cursor: 'pointer' }} />
                            <img src={product.image} alt="" className="img-thumbnail" style={{ width: '70px', height: '70px', cursor: 'pointer' }} />
                        </div>
                        <div className='w-100 text-center'>
                            <img className='img-fluid border' src={product.image} alt="" style={{ maxHeight: '400px', objectFit: 'contain' }} />
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
                        <span className='ms-2 text-muted'>122 Reviews</span>
                    </div>

                    <div className='mb-3'>
                        <span className='text-decoration-line-through text-muted me-2'>${product.old_price}</span>
                        <span className='fs-4 fw-bold text-danger'>${product.new_price}</span>
                    </div>

                    <p className='text-muted'>
                        A lightweight usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </p>

                    <div className='mb-3'>
                        <h5>Select Size</h5>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-outline-secondary'>S</button>
                            <button className='btn btn-outline-secondary'>M</button>
                            <button className='btn btn-outline-secondary'>L</button>
                            <button className='btn btn-outline-secondary'>XL</button>
                            <button className='btn btn-outline-secondary'>XXL</button>
                        </div>
                    </div>

                    <button className='btn btn-primary w-100 my-3'
                    onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>  
                    <p><span className='fw-bold'>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p><span className='fw-bold'>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
