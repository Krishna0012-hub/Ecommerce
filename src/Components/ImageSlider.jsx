// src/Components/ImageSlider.js
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSlider = () => {
  const slides = [
    { id: 1, image: 'https://via.placeholder.com/800x400?text=Slide+1' },
    { id: 2, image: 'https://via.placeholder.com/800x400?text=Slide+2' },
    { id: 3, image: 'https://via.placeholder.com/800x400?text=Slide+3' }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt={`Slide ${slide.id}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
