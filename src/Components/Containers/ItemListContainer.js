import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../../services/FakeApi';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';
import { db } from "../firebase/firebase";
import { getDocs, collection, query } from "firebase/firestore";

export const ItemListContainer = ({greeting, carrito=false, carritoContent}) => {
  console.log(db);
  
  const [products, setProducts] = useState([])
  
  const {categoryId} = useParams();

  const perdirProductos = new Promise((res,rej)=>{
    setTimeout(() => {
      carrito? res(carritoContent):res(productos)
    }, 2000);
  })
  useEffect(()=>{

      // const productsColletion = collection(db, "productos")
      // getDocs(productsColletion)
      // .then(data => console.log(data))

      perdirProductos.then(res=>{
        console.log(categoryId);
        if (categoryId){
          const filter = productos.filter((p)=> p.category === categoryId)
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
      <h1>{greeting} </h1>
      <div className='productos'>
      <ItemList productos={products} carrito={carrito} />
      </div>
    </div>
  )
}
