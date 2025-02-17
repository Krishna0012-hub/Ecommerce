import React, {useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    console.log( productId);
    const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <h1>New code is {productId}</h1>
     <Breadcrums product={product} />
     <ProductDisplay product={product} />
     {/* <h1>hnew {productId}</h1> */}
     <DescriptionBox/>
     <RelatedProducts/>
    </div>
  );
}

export default Product;
