import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="logo" to="/">Yummy</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
            </ul>
            <div className='cart-icon'>
                <GrCart onClick= {()=>navigate('cart')} className='cart-icon'/>
            </div>

           
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar