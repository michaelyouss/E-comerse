/** @format */

import axios from "axios";
import { useState } from "react";
import {createContext, useEffect} from "react";


export let CardContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
  token: userToken,
};

function addToCard(id) {
  return axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id,
      },
      {
        headers,
      },
    )
    .then((response) => response)
    .catch((error) => error);
}

function getLoggedUserCard() {
  return axios
    .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers,
    })
    .then((response) => response)
    .catch((err) => err);
}

function removeCartItem(productId) {
  return axios
    .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers,
    })
    .then((response) => response)
    .catch((err) => err);
}

function updateProductQuantity(productId, count) {
  return axios
    .put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: count,
      },
      {
        headers,
      },
    )
    .then((response) => response)
    .catch((err) => err);
}



function onlinePayment(cartId, url, values) {
  return axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
      {
        shippingAddress:values
      },
      {
        headers,
      },
    )
    .then((response) => response)
    .catch((err) => err);
}

export default function CardContextProvider(props) {

 const[cartId,sutCartId] = useState(null)

  async function getCart(){
   let {data} =await getLoggedUserCard()
   sutCartId(data?.data._id)
   console.log('mmm',data?.data._id);
  }

  useEffect(()=>{
    getCart()
  },[])
  return (
    <CardContext.Provider
      value={{
        cartId,
        addToCard,
        getLoggedUserCard,
        removeCartItem,
        updateProductQuantity,
        onlinePayment,
      }}>
      {props.children}
    </CardContext.Provider>
  );
}
