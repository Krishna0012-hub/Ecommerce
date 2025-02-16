import React from 'react';
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollection from '../Components/Newcollection/Newcollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import ImageSlider from '../Components/ImageSlider/ImageSlider';


const Shop = () => {
  return (
    <div>
      {/* <ImageSlider/> */}
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <NewsLetter/>  
    </div>
  );
}

export default Shop;
