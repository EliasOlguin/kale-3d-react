import React, { useContext } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { contexto } from '../Context/CartContexto';
import "./CartWidget.css"

export const CartWidget = () => {
  const {getTotal} = useContext(contexto)
  const totalCarrito =()=>{
    const total = getTotal()
    return total
  }
  return (
    <div className='carrito'> 
        <ShoppingBasketIcon fontSize="large" color="primary" className='nav-carrito'/>
        <p> {totalCarrito()} </p>

    </div>
  )
}
