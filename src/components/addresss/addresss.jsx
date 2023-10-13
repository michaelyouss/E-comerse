import React, { useContext } from 'react';
import style from "./addresss.module.css"
import { useFormik } from 'formik';
import { CardContext } from '../../Context/CardContext';




export default function Addresss() {

        
        let {onlinePayment, cartId } =useContext(CardContext)


   async function handelAddreeassSubmit(values) {
        
        let response = await onlinePayment(cartId, 'http://localhost:3000', values)
      console.log(response?.data.session.url);
      window.location.href = response?.data.session.url ;
      }
    
      let formik = useFormik({
        initialValues: {
          details: "",
          phone: "",
          city: "",
        },
        onSubmit: handelAddreeassSubmit,
      });
      return (
        <>
          <div className='py-5'>
            <form className='pt-5' onSubmit={formik.handleSubmit}>
                <label htmlFor="details">details</label>
                <input value={formik.values.details} onChange={formik.handleChange} type="text" className="form-control mb-2" name="details" id="details"></input>
    
                <label htmlFor="phone">phone</label>
                <input value={formik.values.phone} onChange={formik.handleChange} type="text" className="form-control mb-2" name="phone" id="phone"></input>
    
                <label htmlFor="city">city</label>
                <input value={formik.values.city} onChange={formik.handleChange} type="text" className="form-control mb-2" name="city" id="city"></input>

                <button type='submit' className='btn bg-main text-white'>  Pay Now</button>
            </form>
          </div>
        </>
      );

}

