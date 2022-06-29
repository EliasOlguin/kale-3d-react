import React from 'react'
import { ItemCount } from '../hooks/ItemCount'
import "./ItemListContainer.css"

export const ItemListContainer = ({greting}) => {
  
  const onAdd =(count)=>{
    console.log(count);
  }
  return (
    <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tenetur labore commodi, facere recusandae perspiciatis fugit, veritatis ab enim similique quia fugiat omnis doloremque accusantium aspernatur provident, sit nemo a?</h3>
        <h3>{greting} </h3>

        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}
