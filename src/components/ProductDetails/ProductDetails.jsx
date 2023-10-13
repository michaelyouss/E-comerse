/** @format */

import axios from "axios";
import React, {useContext} from "react";
import {Query, useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {cartContext} from "../../Context/cartContext";
import {CirclesWithBar} from "react-loader-spinner";
import {Helmet} from "react-helmet";
// import style from "./ProductDetails.module.css"

export default function ProductDetails() {
  const {addProductTocart} = useContext(cartContext);

  async function addProduct(productId) {
    let res = await addProductTocart(productId);

    if (res.status === "success") {
      console.log("yes");
    } else {
      console.log("no");
    }
  }

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let proms = useParams();
  const {isLoading, isError, data} = useQuery("productDetails", () =>
    getProductDetails(proms.id),
  );
  // console.log(data?.data.data);
  return (
    <>
      <Helmet>
        <title>{data?.data.data.title}</title>
      </Helmet>
      <div className='d-flex  vh-100'>
        {isLoading ? (
          <div className='d-flex justify-content-center align-items-center vh-100 w-100 '>
            <CirclesWithBar
              height='100'
              width='100'
              color='#4fa94d'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              outerCircleColor=''
              innerCircleColor=''
              barColor=''
              ariaLabel='circles-with-bar-loading'
            />
          </div>
        ) : (
          <div className='d-flex align-items-center'>
            {data?.data.data ? (
              <div className=' row py-2 '>
                <div className='col-md-4'>
                  <img
                    className='w-100'
                    src={data?.data.data.imageCover}
                    alt=''
                  />
                </div>
                <div className='col-md-8'>
                  <h3>{data?.data.data.title}</h3>
                  <p>{data?.data.data.description}</p>
                  <h6 className='text-main'>{data?.data.data.category.name}</h6>
                  <h6 className='text-main'>
                    ratingsQuantity : {data?.data.data.ratingsQuantity}
                  </h6>
                  {/* <h3>{data?.data.data.id}</h3> */}
                  <div className='d-flex justify-content-between'>
                    <span> Prise : {data?.data.data.price}EGP</span>
                    <span>
                      <i className='fas fa-star rating-color'></i>
                      {data?.data.data.ratingsAverage}
                    </span>
                  </div>
                  <button
                    onClick={() => addProduct(data?.data.data.id)}
                    className='w-100 btn bg-main text-white mt-2'>
                    add to cart
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
}
