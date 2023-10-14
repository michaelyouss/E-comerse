/** @format */

import React from "react";
import style from "./Footer.module.css";
import amazone from "../../Assets/amazone.png"
import master from "../../Assets/master.png"
import paypal from "../../Assets/pay pal.png"
import app from "../../Assets/AAp.png"
import google from "../../Assets/go.png"

export default function Footer() {
  return (
    <>
      <div className='py-2 bg-light overflow-hidden'>

        <div className="container-fluid">
        <h2>Get the FreshCart app</h2>
        <p>We Will Send You link Open it on Your phone to download the app.</p>

        <div className="row g-4">
          <div className="col-lg-9">
          <input
            className='form-control '
            id='password'
            type='text'
            name='text'
            placeholder='Emil...'
          />
          </div>
          <div className=" col-lg-3">
            <button className=' w-100 btn bg-main text-white '>Shara App Link</button>
          </div>
        </div>
        <hr/>
        <div className="row g-4">
          <div className="col-lg-6">
            <h2 className="h4 d-inline me-2">Payment Partners</h2>
            
            <img className="logo-brand" src={amazone} alt=""/>
            <img className="logo-brand" src={master} alt=""/>
            <img className="logo-brand" src={paypal} alt=""/>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
          <h2 className="h4 d-inline me-2">Get deliveries with FreshCart</h2>
          <img className="logo-brand" src={app} alt=""/>
            <img className="logo-brand" src={google} alt=""/>
          </div>
        </div>
        </div>
<hr/>
      </div>
    </>
  );
}
