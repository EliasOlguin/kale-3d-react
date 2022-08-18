import { CardActionArea, CardActions, CardContent, Link, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../Context/CartContexto'
import "./ItemCart.css"

export const ItemCart = ({producto,i}) => {
  const {deleteProducto} = useContext(contexto)
  const [stock, setStock] = useState(producto.cantidad)
  const [comprar, setComprar] = useState(false)
  const onAdd = (count) =>{
    setComprar(true)
    console.log(count);
    // setStock(count)
  }
  const handleDelete = (produ) => {
    deleteProducto(produ)
  }
  // useEffect(() => {
  //   if(producto.stock == 10 & stock == 10){
  //     setComprar(false)
  //     setStock(stock)
      
  //   }  
  // }, [producto])
  
  
  return (
    <Card style={{width:"14rem", height:"29rem", padding:"10px", margin: "10px"}}>
      <CardActionArea>
        <CardImg src={producto.img} variant="top" alt={producto.nombre} style={{height:"15rem"}}  />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component="div"
          >
            {producto.nombre}
          </Typography>
          <Typography variant='body2' color="text.secondary">
            Precio:${producto.precio}
          </Typography>
          <Typography variant='body2' color="text.secondary">
            Cantidad:{stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='buttons'>
          <button className='btn btn-danger' onClick={()=>handleDelete(producto)}>
            Borrar del carrito
          </button>
      </CardActions>

    </Card>
  )
}