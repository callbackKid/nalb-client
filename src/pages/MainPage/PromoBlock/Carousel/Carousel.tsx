import Slider, { Settings } from 'react-slick'
import { carouselImgs } from './media/data'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'swiper/swiper-bundle.css'
import './Carousel.css'

export const Carousel = () => {
  const settings: Settings = {
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    useTransform: true,
    cssEase: 'linear',
  }
  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselImgs.map((image, i) => (
          <div key={i}>
            <img src={image} alt={image} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
