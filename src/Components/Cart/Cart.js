import React, { useContext } from 'react'
import { contexto } from '../Context/CartContexto'

 const Cart = () => {
  const {productos} = useContext(contexto)
  console.log(productos);
  return (
    <div>
        <h1>Este es tu carrito:</h1>
    </div>
  )
}

export default Cart
