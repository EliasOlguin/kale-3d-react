import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount/ItemCount';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';

const productos=[
  {id:1, nombre:"Lampara Lunar", precio:5000, stock:5},
  {id:2, nombre:"Lampara Jupiter", precio:5000, stock:5},
  {id:3, nombre:"Llavero personalizado", precio:500, stock:100},
  {id:4, nombre:"Figura de acción", precio:1800, stock:3},
  {id:5, nombre:"Mate personalizado", precio:2000, stock:5},
] 

export const ItemListContainer = ({greting}) => {

  const perdirProductos = new Promise((res,rej)=>{
    setTimeout(() => {
      res(productos)
    }, 2000);
  })
  const [products, setProducts] = useState([])

  useEffect(()=>{
    perdirProductos.then(res=>{
      console.log(res);
      setProducts(res)
    }).catch(e=>{
      console.log(e);
    })
  },[])
  
  const onAdd =(count)=>{
    console.log(count);
  }
  return (
    <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tenetur labore commodi, facere recusandae perspiciatis fugit, veritatis ab enim similique quia fugiat omnis doloremque accusantium aspernatur provident, sit nemo a?</h3>
        <h3>{greting} </h3>

        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <ItemList productos={products}/>
    </div>
  )
}
