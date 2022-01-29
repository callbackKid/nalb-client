import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import './Carousel.css';

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='carousel'
    >
      <SwiperSlide style={{ backgroundColor: 'red' }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'blue' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'black' }}>Slide 3</SwiperSlide>
    </Swiper>
  );
};
