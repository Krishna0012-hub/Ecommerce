import React from 'react';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Related Products</h2>
      <hr />
      <div className="row g-4">
        {all_product.map((item, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
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

export default RelatedProducts;
