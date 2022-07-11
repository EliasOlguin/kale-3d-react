import { CardActionArea, CardActions, CardContent, Link, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import "./Item.css"

export const Item = ({producto,i}) => {
  const [stock, setStock] = useState(producto.stock)
  const [comprar, setComprar] = useState(false)
  const onAdd = (count) =>{
    setComprar(true)
    setStock(count)
  }
  // useEffect(() => {
  //   if(producto.stock == 10 & stock == 10){
  //     setComprar(false)
  //     setStock(stock)
      
  //   }  
  // }, [producto])
  
  
  return (
    <Card style={{width:"18rem"}}>
      <CardActionArea>
        <CardImg src={producto.img} variant="top" alt={producto.nombre}  />
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
      <CardActions className='col'>
        <NavLink to={"/product/"+producto.id}>
          <button className='btn btn-warning'>
            Ver detalles
          </button>
        </NavLink>
        <div>
          {
            comprar?  <NavLink to={"/cart"}>
              <button className='btn btn-success'>
                Ir al carrito
              </button>
              </NavLink>:<ItemCount stock={producto.stock} onAdd={onAdd}/>
          }
        </div>
        
      </CardActions>

    </Card>
  )
}
