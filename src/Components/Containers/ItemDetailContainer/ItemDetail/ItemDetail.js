import React from 'react'
import "./ItemDetail.css"

export const ItemDetail = ({producto}) => {
    console.log(producto);
  return (
    <div className='producto'>
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt="soporte de joystick"/>
        <h3>Descripción: {producto.descripcion}</h3>
        <h4>Precio: {producto.precio}</h4>
        <h4>Stock: {producto.stock}</h4>
    </div>
  )
}
