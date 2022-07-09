import React from 'react'
import { Item } from './Item'
import "./Item.css"

export const ItemList = ({productos}) => {
  return (
      <div className='list row'>
        <div className='col-md-4'>
          {
            productos.map((producto,i)=>{
              return <Item producto={producto} key={i} />
            })
          }
        </div>
      </div>
  )
}
