import React, { useContext, useState } from 'react'
import { ItemListContainer } from '../Containers/ItemListContainer';
import { contexto } from '../Context/CartContexto'

 const Cart = () => {
  const {productos} = useContext(contexto)
  const [carrito, setCarrito] = useState(true)
  console.log(productos);
  return (
    <div>
      <div>
        <ItemListContainer greeting={"Este es tu carrito:"} carrito={carrito} carritoContent={productos} />
      </div>
    </div>
  )
}

export default Cart
