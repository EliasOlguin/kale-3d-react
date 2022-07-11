import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock,initial = 1,onAdd}) => {

    const [count, setCount] = useState(initial)

    const handlerAdd = () =>{
        if(count < stock){
            setCount( count + 1)
        }
        
    }
    const handleSub= ()=>{
        if(count > 1){
            setCount(count - 1)
        }
        
    }
  return (
    <div className='item-count'>
        <div className='item-count-items'>
        <button onClick={handleSub}>-</button> 
        <h3>{count}</h3> 
        <button onClick={handlerAdd}>+</button>
        </div>
        <button onClick={()=>{onAdd(count)}}><h3>Agregar al carrito</h3></button>
    </div>
  )
}
