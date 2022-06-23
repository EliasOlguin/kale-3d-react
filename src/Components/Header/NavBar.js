import React from 'react'

import logo from '../../assets/kale-3d-logo.jpg'
import './NavBar.css'
import { CartWidget } from './CartWidget';


export const NavBar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt='logo-kale3d'  />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
        <CartWidget />
      </nav>
    </>
  )
}
