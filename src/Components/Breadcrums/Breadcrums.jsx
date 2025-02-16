import React from 'react';

const Breadcrums = (props) => {

    const {product} = props;
  return (
    <div>
      HOME {product.category}
      {/* product name {product.name} */}
    </div>
  );
}

export default Breadcrums;
