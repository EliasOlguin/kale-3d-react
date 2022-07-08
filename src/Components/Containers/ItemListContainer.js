import React, { useEffect, useState } from 'react'
import { productos } from '../../services/FakeApi';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';

export const ItemListContainer = () => {
  const titulo = {
    style:{"text-aling":"center;"}
  }
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
      <h1 style={titulo}>Productos</h1>
      <ItemList productos={products}/>
    </div>
  )
}
