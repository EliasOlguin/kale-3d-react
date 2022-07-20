import React from 'react'
import { ItemCart } from '../../Cart/ItemCart/ItemCart'
import { Item } from './Item'
import "./Item.css"

export const ItemList = ({productos, carrito}) => {
  return (
      <div className='list row'>
          {
            productos.map((producto,i)=>{
              return carrito? <ItemCart producto={producto} key={i} />:<Item producto={producto} key={i} />
            })
          }
      </div>
  )
}
