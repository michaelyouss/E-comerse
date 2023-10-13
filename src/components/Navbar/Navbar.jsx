/** @format */

import React, {useContext} from "react";
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";
import logo from "../../Assets/logo.png";
import {logNav} from "../../Context/userContext";
import {useNavigate} from "react-router-dom";


export default function Navbar() {
 

  let {userToken, setUserToken} = useContext(logNav);

  const navGate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navGate("/Login");
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 end-0 z-3'>
        <div className='container-fluid'>
          <div>
            <img
              src={logo}
              alt='fresh market logo'
              width={50}
            />
            <Link
              className='navbar-brand'
              to='#'>
              FreshCart
            </Link>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {userToken !== null ? (
                <>
                  <li className='nav-item'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='Products'>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='Categories'>
                      Categories
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='Brands'>
                      Brands
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='cart'>
                      cart
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='Profile'>
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className='navbar-nav mس-auto mb-2 mb-lg-0 d-flex align-self-center '>
              <li className='nav-item d-flex  align-self-center'>
                <i className='fa-brands fa-facebook mx-2 text-center align-items-center d-flex'></i>
                <i className='fa-brands fa-twitter mx-2 text-center align-items-center d-flex'></i>
                <i className='fa-brands fa-instagram mx-2 text-center align-items-center d-flex'></i>
                <i className='fab fa-youtube mx-2 text-center align-items-center d-flex'></i>
               
              </li>

              {userToken !== null ? (
                <>
                  <li className='nav-item'>
                    <span
                      className='nav-link cursor-pointer'
                      onClick={() => logOut()}>
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='/register'>
                      Register
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to='/Login'>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
