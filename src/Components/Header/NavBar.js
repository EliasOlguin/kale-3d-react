import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from '../../assets/kale-3d-logo.jpg'
import './NavBar.css'


export const NavBar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt='logo-kale3d'  />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Sobre nosotros</a>
        <ShoppingBasketIcon fontSize="large" color="primary" className='nav-carrito'/>
      </nav>
    </>
  )
}
