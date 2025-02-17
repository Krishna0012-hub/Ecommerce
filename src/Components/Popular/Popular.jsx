import React from 'react';
import './Popular.css'
import data_product from '../Assets/all_product';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='container my-5'>
    <h1 className='text-center mb-4'>POPULAR IN WOMEN</h1>
    <hr className='mb-4'/>
    <div className='row'>
      {data_product.map((item, i) => (
        <div key={i} className='col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center'>
          <Item 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        </div>
      ))}
    </div>
  </div>
  );
}

export default Popular;
