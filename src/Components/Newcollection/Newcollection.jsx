import React from 'react';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const Newcollection = () => {
  return (
    <div className='container my-5'>
    <h1 className='text-center mb-4'>POPULAR IN WOMEN</h1>
    <hr className='mb-4'/>
    <div className='row'>
      {new_collections.map((item, i) => (
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
    <div className='row'>
      {new_collections.map((item, i) => (
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

export default Newcollection;
