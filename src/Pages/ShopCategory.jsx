import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  console.log('Banner Path:', props.banner);  // Debugging purpose
  
  return (
    <div className='shop-category'>
      <h2>{props.category} Collection</h2>
      <img src={props.banner} alt="Banner" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
}

export default ShopCategory;
