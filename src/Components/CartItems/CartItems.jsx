import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from "../Assets/remove_icon.jpg";

const CartItems = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Cart Items</h3>
            <div className="row fw-bold text-center">
                <div className="col-2">Products</div>
                <div className="col-2">Title</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <div className="col-2">Remove</div>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div className="row text-center align-items-center" key={e.id}>
                            <div className="col-2">
                                <img src={e.image} alt={e.name} className="img-fluid" style={{ maxHeight: '80px' }} />
                            </div>
                            <div className="col-2">{e.name}</div>
                            <div className="col-2">${e.new_price}</div>
                            <div className="col-2">
                                <span className="badge bg-primary">{cartItem[e.id]}</span>
                            </div>
                            <div className="col-2">${e.new_price * cartItem[e.id]}</div>
                            <div className="col-2">
                                <img 
                                    src={remove_icon} 
                                    alt="Remove" 
                                    className="img-fluid cursor-pointer" 
                                    style={{ maxHeight: '30px', cursor:'pointer' }} 
                                    onClick={() => removeFromCart(e.id)}
                                />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default CartItems;
