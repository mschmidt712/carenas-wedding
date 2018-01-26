import React from 'react';
import Slider from 'react-slick';

import './PhotoCarousel.css';
import Photo1 from '../../assets/photo-1.jpeg';
import Photo2 from '../../assets/photo-2.jpeg';
import Photo3 from '../../assets/photo-3.jpeg';
import Photo4 from '../../assets/photo-4.jpeg';
import RightArrow from './RightArrow.js';
import LeftArrow from './LeftArrow.js';

function PhotoCarousel (props) {
  const settings = {
      arrows: true,
      nextArrow: <RightArrow {...props}/>,
      prevArrow: <LeftArrow {...props}/>,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div><img src={Photo1} alt="Carousel" /></div>
        <div><img src={Photo2} alt="Carousel" /></div>
        <div><img src={Photo3} alt="Carousel" /></div>
        <div><img src={Photo4} alt="Carousel" /></div>
      </Slider>
    </div>
  );
}

export default PhotoCarousel;
