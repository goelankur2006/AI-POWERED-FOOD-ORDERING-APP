import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault
  }

  return (
    <div className='container mt-5 order'>
      <div className='row'>
        <div className='col-lg-6'>
          <form className='mb-5 form'>
            <h4 className='my-2 contact-info'>Contact Information</h4>
            <div><input type="text" placeholder='Full Name' className='form-control' required/></div>
            <div><input type='email' placeholder='Email' className='form-control' required/></div>
            <div><input type='text' placeholder='Phone No.' className='form-control' required/></div>
    
            <h4 className='my-2 delivery-info'>Delivery Information</h4>
            <div>
              <input type="text" placeholder='House No.' className='form-control' required/>
              <input type="text" placeholder='Street No.'className='form-control'  required/>
            </div>
            <div>
              <input type="text" placeholder='Locality'className='form-control'  required/>
              <input type="text" placeholder='Colony' className='form-control' required/>
            </div>
            <input type="text" placeholder='City' className='form-control' required/>
            <input type="text" placeholder='State' className='form-control'  required/>
            <div><input type='text' placeholder='Pincode' className='form-control' required/></div>
            <button type='submit' onClick={()=>handleSubmit()} className='btn btn-success'>Save</button>
          </form>
        </div>
        <div className='col-lg-6'>
          <button onClick={()=> navigate('payment')} className='btn btn-danger payment-btn'>Proceed to Payment</button>
        </div>
      </div>
      
    </div>
  )
}

export default Order