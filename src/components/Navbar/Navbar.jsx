import React from 'react'
import "./Navbar.css"
import {  NavLink } from 'react-router-dom';

function Navbar() {
  return( 
  <nav className='navbar'> 
  <div className='navbar-logo'>
 <img src="../logo.png" alt="" />
  </div>
  <NavLink to={"/kasa"}>
      <div>accueil</div>
  </NavLink>
  <NavLink to={"/kasa/about"}>
      <div>a propos</div>
  </NavLink>
 </nav> 
 );
}

export default Navbar;