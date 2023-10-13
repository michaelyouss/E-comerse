/** @format */

import React, {useState} from "react";
import style from "./Register.module.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {FallingLines} from "react-loader-spinner";

export default function Register() {
  let goLogin = useNavigate();
  const [error, setError] = useState(null);
  const [isLoding, setIsLoding] = useState(false);

  // creat function Api
  async function submitRegister(values) {
    setIsLoding(true);
    let {data} = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        setIsLoding(false);
        setError(err.response.data.message);
      });

    if (data.message === "success") {
      setIsLoding(false);
      goLogin("/login");
    }
    // console.log(response);
  }

  // function validate error

  // function validate(values){
  //     let phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  //     let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  // let errors ={};
  // if(!values.name)
  // {
  //     errors.name= 'name is required '
  // }
  // else if(values.name.length < 3)
  // {
  //     errors.name = 'name minLength is 3'
  // }

  // if(!values.phone){
  //     errors.phone = 'phone is required '
  // }else if(!phoneRegex.test(values.phone )){
  //     errors.phone= 'phone namber invalid'
  // }

  // if(!values.email){
  //     errors.email = 'email is required '
  // }else if(!emailRegex.test(values.email )){
  //     errors.email= 'email namber invalid'
  // }
  // return errors;

  // }

  // fremwoork yup
  // let phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  // let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  let validateYup = Yup.object({
    name: Yup.string()
      .min(3, "name minLength is 3")
      .max(10, "name maxLength is 10")
      .required("name is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    phone: Yup.string()
      .matches(
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        "password start wiht uppercase",
      )
      .required("phone is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{10,20}$/, "password start wiht uppercase")
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password and repassword")
      .required("rePassword is required"),
  });

  // creat initialValues
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validateYup,
    onSubmit: submitRegister,
  });
  return (
    <>
      <div className='w-75 m-auto py-4'>
        {error !== null ? (
          <div className='alert alert-danger'>{error}</div>
        ) : (
          ""
        )}

        <h3 className='text-center '>Register Now</h3>

        <form onSubmit={formik.handleSubmit}>
          <label
            className='py-3'
            htmlFor='name'>
            name
          </label>

          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            className='form-control'
            id='name'
            type='text'
            name='name'
            placeholder='Name'
          />
          {formik.errors.name && formik.touched.name ? (
            <div className='alert p-2 mt-2 alert-danger'>
              {formik.errors.name}
            </div>
          ) : (
            ""
          )}

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
            htmlFor='phone'>
            phone:
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            className='form-control'
            id='phone'
            type='tel'
            name='phone'
            placeholder='phone'
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className='alert alert-danger p-2 mt-2'>
              {formik.errors.phone}
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

          <label
            className='py-3'
            htmlFor='rePassword'>
            rePassword:
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            className='form-control'
            id='rePassword'
            type='password'
            name='rePassword'
            placeholder='rePassword'
          />

          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className='alert p-2 mt-2 alert-danger'>
              {formik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          {isLoding ? (
            <button
              type='button'
              className=' btn bg-main text-white my-3'>
              <FallingLines
                color='white'
                width='30'
                visible={true}
                ariaLabel='falling-lines-loading'
              />
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type='submit'
              className=' btn bg-main text-white my-3'>
              Regestr
            </button>
          )}
        </form>
      </div>
    </>
  );
}
