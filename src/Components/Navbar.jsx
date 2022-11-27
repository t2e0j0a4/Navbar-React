import React from 'react'

import "./Navbar.css";

import {RiArrowDownSLine} from "react-icons/ri";
import {MdOutlineClose} from "react-icons/md";
import {HiMenuAlt1} from "react-icons/hi";

const Navbar = () => {

    const [menu , setMenu] =  React.useState(false);

  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo"><h1>HOLA!</h1></div>
        <ul className={`app__navbar-links ${menu ? 'top' : ''}`}>
            {menu && <li className="app__navbar-links_sm-close"><MdOutlineClose onClick={()=>{
                setMenu(false);
            }}/></li>}
            <li>
                <a href="#">Home</a>
            </li>
            <li className='li__services'>
                <div><a href="#">Services</a><span><RiArrowDownSLine className='dropdown__arrow' color='white' fontSize='24px'/></span></div>
                <ul className='app__navbar-links_dropdown services__dropdown'>
                    <li>Web Apps</li>
                    <li>Disco Models</li>
                    <li>Quater Smacks</li>
                </ul>
            </li>
            <li className='li__products'>
                <div><a href="#">Products</a><span><RiArrowDownSLine className='dropdown__arrow' color='white' fontSize='24px'/></span></div>
                <ul className="app__navbar-links_dropdown products__dropdown">
                    <li>Smart AI</li>
                    <li>Containers</li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li className='app__navabr-profiles_smallscreen'>
                <span>Login</span>
                <span>Signup</span>
            </li>
        </ul>
        
        <div className="app__navbar-profiles">
            <span className='app__navbar-profiles_login'>Login</span>
            <span className='app__navbar-profiles_signup'>Signup</span>
        </div>
        <div className="app__navbar-smallscreen_menu">
        {menu || <HiMenuAlt1 className='sm__menu' onClick={()=>{
                setMenu(true);
            }}/>}
        </div>
    </nav>
  )
}

export default Navbar