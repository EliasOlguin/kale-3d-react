import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react'
import {  CardImg } from 'react-bootstrap'
import { ItemCount } from '../../ItemCount/ItemCount';
import "./ItemDetail.css"

export const ItemDetail = ({producto}) => {
  const style={
    width:"30rem", 
    textAlign:"center",
    height:"500px"
  }
  const img={
    width:"20rem", 
    height:"300px"
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
      </Card>
      <div>
        <ItemCount stock={producto.stock} producto={producto}/>
      </div>
    </div>
  )
}
