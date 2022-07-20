import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { padding } from '@mui/system';
import React, { useState } from 'react'
import {  CardImg } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ItemCount } from '../../ItemCount/ItemCount';
import "./ItemDetail.css"

export const ItemDetail = ({producto}) => {
  const [comprar, setComprar] = useState(false)

  const style={
    width:"30rem", 
    textAlign:"center",
    height:"600px",
    paddingBottom: "50px",
    paddingTop: "20px",
    marginTop: "50px"
  }
  const img={
    width:"20rem", 
    height:"300px"
  }
  const onAdd = (count)=>{
    setComprar(true)

  }

    console.log(producto);
  return (
    <div className='producto'>
      <Card style={style}>
        <CardActionArea>
          <CardImg src={producto.img} variant="top" alt={producto.nombre} style={img}  />
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
              Stock:{producto.stock}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='buttons mb-2'>
          <div>
            {
              comprar?  <NavLink to={"/cart"}>
                <button className='btn btn-success'>
                  Ir al carrito
                </button>
                </NavLink>:<ItemCount stock={producto.stock} onAdd={onAdd} producto={producto}/>
            }
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
