/** @format */

import {useContext, useEffect, useState} from "react";
import {CardContext} from "../../Context/CardContext";
import {CirclesWithBar} from "react-loader-spinner";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";


export default function Cart() {
  let {getLoggedUserCard, removeCartItem, updateProductQuantity} =
    useContext(CardContext);

  const [cardDetails, setCardDetails] = useState(null);

  async function updateCount(id, count) {
    let {data} = await updateProductQuantity(id, count);
    setCardDetails(data);
  }

  async function removeItem(id) {
    let {data} = await removeCartItem(id);

    setCardDetails(data);
  }

  async function getCart() {
    let {data} = await getLoggedUserCard();
    setCardDetails(data);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    < div className="min-vh-100">

      {cardDetails ? (
        <div className='pt-5'>
          <div className=' mx-auto my-2 p-3 bg-main-light'>
            <h3>Shopping Cart</h3>
            <h4 className='h6 text-main fw-bold'>
              Cart Items : {cardDetails.numOfCartItems}
            </h4>
            <h4 className='text-main h6 fw-bold'>
              Total Cart price : {cardDetails.data.totalCartPrice} EGP
            </h4>
            {cardDetails.data.products.map((product) => (
              <div
                key={product.product.id}
                className='row p-2 border-bottom'>
                <div className='col-md-2'>
                  <img
                    className='w-100'
                    src={product.product.imageCover}
                    alt='imageCover'
                  />
                </div>
                <div className='col-md-10 pt-5 '>
                  <div className='d-flex justify-content-between align-items-center '>
                    <div>
                      <h3 className='h6'>
                        {product.product.title.split(" ").slice(0, 3).join(" ")}
                      </h3>
                      <h6 className='text-main'>price : {product.price} EGP</h6>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          updateCount(product.product.id, product.count + 1)
                        }
                        className=' btn bor-main  p-1 '>
                        +
                      </button>
                      <span className='mx-2'>{product.count}</span>
                      <button
                        onClick={() =>
                          updateCount(product.product.id, product.count - 1)
                        }
                        className='btn bor-main  p-1 '>
                        -
                      </button>
                    </div>
                  </div>
                  <div className='py-2'>
                    <button
                      onClick={() => removeItem(product.product.id)}
                      className='btn '>
                      <i className=' text-danger m-1 font-sm fas fa-trash-can'></i>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='w-100 d-flex align-items-center justify-content-center '>
              <butoon className='btn bg-main w-25 text-white m-2  '>
                <Link to={'/Addresss'}>  Online Payment</Link>
              
              </butoon>

              <butoon className='btn bg-main w-25 text-white m-2  '>
                Cash on Deliv Payment
              </butoon>
            </div>
          </div>
        </div>
      ) : (
        <section
          id='loding'
          className='d-flex justify-content-center align-items-center w-100 vh-100'>
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
        </section>
      )}
    </div>
  );
}
