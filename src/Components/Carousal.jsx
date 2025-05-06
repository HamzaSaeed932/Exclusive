import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '2px', width: '100%' }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot" />
    ),
  };

  return (
    <div className="relative w-[892px] mx-auto h-[344px] mt-10 ml-11 overflow-hidden">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>
            <img src={`/${num}.jpg`} alt={`Slide ${num}`} className="w-full h-[344px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
