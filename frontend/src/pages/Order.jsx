import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Order = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='container mt-5 order'>
      <div className='row'>
        <div className='col-lg-6'>
          <p className='my-2'>Contact Information</p>
          <form></form>
        </div>
      </div>
      
    </div>
  )
}

export default Order