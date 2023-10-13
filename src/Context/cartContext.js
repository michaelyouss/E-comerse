/** @format */

import axios from "axios";
import {createContext} from "react";

export const cartContext = createContext();
export default function CartContextProvider({children}) {

  async function addProductTocart(productId) {
try{
  const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: productId,
      },
      {
        headers:{token:localStorage.getItem('userToken')}

        })

        return data;
}

catch(e){
  console.log('error',e)
}
  }
  // console.log(data);

  return <cartContext.Provider value={{addProductTocart}}>
      {children}
    </cartContext.Provider>
  
}
