import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='container-fluid header-text'>
        <div className='row gy-5'>
            <div className='col-lg-6'>
                <h1>Savor Every Bite. <br /> Delivered Right. </h1>
                <p>Craving something delicious? We've got you covered.From comforting classics to global flavors, our app brings the best dishes straight to your door — hot, fresh, and fast.</p>
                <HashLink to='#ourMenu' className='btn btn-danger'>ORDER NOW</HashLink>
            </div>
            <div className='col-lg-6'>
                <img src={assets.header_img} alt='header_img' className='img-fluid header-img' />
            </div>
        </div>
    </div>
  )
}

export default Header