import { CardActionArea, CardActions, CardContent, Link, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../Context/CartContexto'
import { ItemCount } from '../ItemCount/ItemCount'
import "./Item.css"

export const Item = ({producto,i}) => {
  
  const [stock, setStock] = useState(producto.stock)
  const [comprar, setComprar] = useState(false)
  const onAdd = (count) =>{
    setComprar(true)
    console.log(count);
    // setStock(count)
  }
  // useEffect(() => {
  //   if(producto.stock == 10 & stock == 10){
  //     setComprar(false)
  //     setStock(stock)
      
  //   }  
  // }, [producto])
  
  
  return (
    <Card style={{width:"14rem", height:"29rem", padding:"10px"}}>
      <CardActionArea>
        <CardImg src={producto.img} variant="top" alt={producto.nombre} style={{height:"15rem"}} />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component="div"
          >
            {producto.nombre}
          </Typography>
          <Typography variant='body2' color="text.secondary">
            Precio:{producto.precio}
          </Typography>
          <Typography variant='body2' color="text.secondary">
            Stock:{stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='buttons'>
        <NavLink to={"/product/"+producto.id}>
          <button className='btn btn-warning'>
            Ver detalles
          </button>
        </NavLink>
        
      </CardActions>

    </Card>
  )
}
