import React, { useContext } from 'react'
import { useState } from 'react'
import { contexto } from '../../Context/CartContexto'
import './ItemCount.css'

export const ItemCount = ({stock,initial = 1,onAdd, producto}) => {
    const {agregarProducto} = useContext(contexto)
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
    const agregarAlCarrito = ()=>{
        onAdd(count) 
        agregarProducto(producto, count)
    }
  return (
    <div className='item-count'>
        <div className='item-count-items'>
        <button onClick={handleSub} className="btn btn-danger">-</button> 
        <h3>{count}</h3> 
        <button onClick={handlerAdd} className="btn btn-success">+</button>
        </div>
        <button onClick={agregarAlCarrito} className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}
