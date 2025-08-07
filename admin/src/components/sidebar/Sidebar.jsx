import React from 'react';
import './sidebar.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { PiPackageLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
              <NavLink to='/add' className="sidebar-option">
                <IoIosAddCircleOutline className='icon'/>
                <p>Add Items</p>
              </NavLink>
              <NavLink to='/list' className="sidebar-option">
                <FaListCheck className='icon'/>
                <p>List Items</p>
              </NavLink>
              <NavLink to='/orders' className="sidebar-option">
                <PiPackageLight className='icon'/>
                <p>Orders</p>
              </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
