/** @format */

import React, {useContext, useState} from "react";
import style from "./Login.module.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {BallTriangle} from "react-loader-spinner";
import {logNav} from "../../Context/userContext";

export default function Login() {
  let {setUserToken ,setUserEDataProfil} = useContext(logNav);
  let goLogin = useNavigate();
  const [error, setError] = useState(null);
  const [isLoding, setIsLoding] = useState(false);

  // creat function Api
  async function loginSubmit(values) {
    setIsLoding(true);
    let {data} = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        setIsLoding(false);
        setError(err.response.data.message);
      });

    if (data.message === "success") {
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      setUserEDataProfil(data.user)
      setIsLoding(false);
      goLogin("/");
    }
  }

  let validateYup = Yup.object({
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{10,20}$/, "password start wiht uppercase")
      .required("password is required"),
  });

  // creat initialValues
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateYup,
    onSubmit: loginSubmit,
  });
  return (
    <>
      <div className='w-75 m-auto py-4'>
        {error !== null ? (
          <div className='alert alert-danger'>{error}</div>
        ) : (
          ""
        )}

        <h3 className='text-center '>Login Now</h3>

        <form onSubmit={formik.handleSubmit}>
          <label
            className='py-3'
            htmlFor='email'>
            Email:
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            className='form-control'
            id='email'
            type='email'
            name='email'
            placeholder='Email'
          />
          {formik.errors.email && formik.touched.email ? (
            <div className='alert p-2 mt-2 alert-danger'>
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}

          <label
            className='py-3'
            htmlFor='password'>
            password:
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            className='form-control'
            id='password'
            type='password'
            name='password'
            placeholder='password'
          />
          {formik.errors.password && formik.touched.password ? (
            <div className='alert p-2 mt-2 alert-danger'>
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          {isLoding ? (
            <button
              type='button'
              className=' btn bg-main text-white my-3'>
              <BallTriangle
                height={30}
                width={30}
                radius={5}
                color='white'
                ariaLabel='ball-triangle-loading'
                wrapperClass={{}}
                wrapperStyle=''
                visible={true}
              />
            </button>
          ) : (
            <div className='d-flex align-items-center'>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type='submit'
                className=' btn bg-main text-white my-3 mx-2'>
                Login
              </button>
              <Link
                className='btn '
                to={"/Register"}>
                Register Now
              </Link>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
