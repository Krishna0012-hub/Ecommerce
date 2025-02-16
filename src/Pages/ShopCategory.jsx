import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
 
  return (
    <div className='container my-5'>
      <h2 className="text-center mb-4">{props.category} Collection</h2>
      <div className="text-center mb-4">
        <img src={props.banner} alt="Banner" className="img-fluid w-50" />
      </div>
      <p className="text-center mb-4">
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className='row g-4'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Item 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
