import React from 'react'

export const Item = ({producto,i}) => {
  return (
    <>
    <h2>{producto.nombre} </h2>
    <h3>{producto.precio} </h3>
    <h3>{producto.stock} </h3>        
    </>
  )
}
