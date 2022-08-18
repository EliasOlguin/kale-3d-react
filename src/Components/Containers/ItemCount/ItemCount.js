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
    <div className='item-count col-12'>
        <div className='item-count-items '>
        <button onClick={handleSub} className="btn btn-primary col-4">  -  </button> 
        <h3 className='col-4'>{count}</h3> 
        <button onClick={handlerAdd} className="btn btn-primary col-4">  +  </button>
        </div>
        <button onClick={agregarAlCarrito} className="btn btn-success mt-2">Agregar al carrito</button>
    </div>
  )
}
