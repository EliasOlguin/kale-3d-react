import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../../services/FakeApi';
import { Lamparas } from '../../services/Lamparas';
import { Llaveros } from '../../services/Llaveros';
import { Mates } from '../../services/Mates';
import { Figuras } from '../../services/Figuras';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';

export const ItemListContainer = ({greeting}) => {
  
  const [products, setProducts] = useState([])
  
  const {categoryId} = useParams();

  const perdirProductos = new Promise((res,rej)=>{
    setTimeout(() => {
      res(productos)
    }, 2000);
  })
  useEffect(()=>{
      perdirProductos.then(res=>{
        console.log(categoryId);
        if (categoryId){
          const filter = productos.filter((p)=> p.category == categoryId)
          setProducts(filter)
        }else{
          setProducts(res)
        }
        console.log(res);
      }).catch(e=>{
        console.log(e);
      })
  },[categoryId])
  
  const onAdd =(count)=>{
    console.log(count);
  }
  return (
    <div className='container'>
      <h1>{greeting} estos son nuestro productos</h1>
      <div className='productos'>
      <ItemList productos={products}/>
      </div>
    </div>
  )
}
