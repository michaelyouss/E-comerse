/** @format */

import React, {useContext, useEffect} from "react";
// import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";
import {logNav} from "../../Context/userContext";
import {Offline, Online} from "react-detect-offline";

export default function Layout() {
  let {setUserToken} = useContext(logNav);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  });

  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet> </Outlet>
      </div>

      <Offline>
        <div className='network'>
          <i className='fas fa-wifi'></i>
          you are offline (surprise!)
        </div>
      </Offline>

      <Footer />
    </>
  );
}
