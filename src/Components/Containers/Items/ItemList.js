import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
  return (
    <>
        {
          productos.map((producto,i)=>{
            return <Item producto={producto} key={i} />
          })
        }
    </>
  )
}
