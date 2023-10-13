/** @format */

import React from "react";
import style from "./CategorySlider.module.css";
import {useQuery} from "react-query";
import axios from "axios";
import Slider from "react-slick";

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let {isError, data} = useQuery("CategorySlider", getCategories);
  console.log(data?.data.data);
  return (
    <>
      <div className='pb-5'>
        {data?.data.data ? (
          <div className='  py-4 overflow-hidden '>
            <Slider {...settings}>
              {data?.data.data.map((caetegory) => (
                <img
                  height={200}
                  key={caetegory._id}
                  src={caetegory.image}
                  className='w-100  '
                  alt=''
                />
              ))}
            </Slider>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
