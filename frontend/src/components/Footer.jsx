import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";


const Footer = () => {
  return (
    <div>
      <footer>
      <div className='row '>
        <div className='col-md-3 footer'>
          <p><HiOutlineLocationMarker color='red' className='icon'/>&nbsp;Address</p>
          <p>A-108</p>
          <p>Mohali</p>
        </div>
        <div className='col-md-3 footer'>
          <p><FaPhone color='red' className='icon'/>&nbsp;Contact</p>
          <p>Phone: +123456789</p>
          <p>Email: yummy@gmail.com</p>
        </div>
        <div className='col-md-3 footer'>
          <p><FaRegClock color='red' className='icon'/> &nbsp;Opening Hours</p>
          <p>9AM to 10PM</p>
        </div>
        <div className='col-md-3 footer'>
          <p>Follow Us</p>
          <p><FaXTwitter color='red' className='icons' /> &nbsp;&nbsp;&nbsp;&nbsp; <FaFacebook color='red' className='icons' /> &nbsp;&nbsp;&nbsp;&nbsp; <IoLogoInstagram color='red' className='icons' /> &nbsp;&nbsp;&nbsp;&nbsp; <IoLogoWhatsapp color='red' className='icons' /> </p>
        </div>
      </div>
      <hr />
      <p className='copyright'>copyright@2025 yummy</p>
      </footer>
    </div>
  )
}

export default Footer