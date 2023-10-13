/** @format */

import React from "react";
// import style from "./MainSlider.module.css"
import slide1 from "../../Assets/slider-1.jpg";
import slide2 from "../../Assets/slider-2.jpg";
import slide3 from "../../Assets/slider-3.jpg";
import slide4 from "../../Assets/slider-4.jpg";
import slide5 from "../../Assets/slider-5.jpg";
import Slider from "react-slick";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    Default: 2000,
  };
  return (
    <>
      <div className='row g-0 overflow-hidden py-5 '>
        <div className=' col-md-9 py-3  '>
          <Slider {...settings}>
            <img
              //   className='w-100'
              height={400}
              src={slide1}
              alt='slide1'
            />
            <img
              //   className='w-100'
              height={400}
              src={slide2}
              alt='slide2'
            />
            <img
              //   className='w-100'
              height={400}
              src={slide3}
              alt='slide3'
            />
            <img
              //   className='w-100'
              height={400}
              src={slide5}
              alt='slide5'
            />
            <img
              //   className='w-100'
              height={400}
              src={slide4}
              alt='slide4'
            />
          </Slider>
        </div>
        <div className='  col-md-3 py-3'>
          <img
            className='w-100'
            height={200}
            src={slide4}
            alt='slide4'
          />
          <img
            className='w-100'
            height={200}
            src={slide2}
            alt='slide2'
          />
        </div>
      </div>
    </>
  );
}
