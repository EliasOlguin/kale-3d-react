import { CardActionArea, CardActions, CardContent, Link, Typography } from '@mui/material'
import { Button } from 'bootstrap'
import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Item.css"

export const Item = ({producto,i}) => {
  
  return (
    // <div>
    //       <img src={producto.img} alt={producto.img} />
    //       <h2>{producto.nombre} </h2>
    //       <h4>{producto.precio} </h4>
    //       <h4>{producto.stock} </h4>      
    //       <Link to={"/product/"+producto.id} > Ver más </Link>
    // </div>
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
            Stock:{producto.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={"/product/"+producto.id}>
          <button className='btn btn-primary'>
            Ver detalles
          </button>
        </NavLink>
      </CardActions>

    </Card>
  )
}
