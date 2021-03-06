import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { productos } from '../../services/FakeApi';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({greeting, carrito=false, carritoContent}) => {
  console.log(db);
  
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("")
  
  const {categoryId} = useParams("");

  const perdirProductos = new Promise((res,rej)=>{
      carrito? res(carritoContent):res(productos)  
  })
  const [carritoTieneNoAlgo, setCarritoNoTieneAlgo] = useState(false)
  useEffect(()=>{
    if(carrito && carritoContent.length === 0){
      setCarritoNoTieneAlgo(true)
    }  
  },[carritoContent])
  useEffect(()=>{
    if(carritoContent){
      perdirProductos.then(res=>{
      setProducts(res)
      console.log(res);
    }).catch(e=>{
      console.log(e);
    })
    }
},[carritoContent])
  useEffect(()=>{
      categoryId?setCategory(categoryId.toString()):console.log(categoryId);
      const productsColletion = collection(db, 'productos');
      const filterQ = query(productsColletion, where("category", "==" , category))

      getDocs(categoryId?filterQ:productsColletion)
      .then(data => {
        const list = data.docs.map((p) =>{
          return {
            id:p.id,
            ...p.data()}})
            console.log(categoryId);
            console.log(list);
          setProducts(list)
      })
      .catch(e=>{
        console.log(e);
      })
  },[categoryId])
  
  const onAdd =(count)=>{
    console.log(count);
  }
  return (
    <div className='container'>
      {
        carritoTieneNoAlgo?
        <>
          <h1>Oops, te olvidaste de llevarte alguno de nuestros productos!</h1>
          <NavLink to={"/"}>
            <button className="btn btn-primary"> Volver al incio</button>
          </NavLink>
        </>
        :<>
        <h1>{greeting} </h1>
        <div className='productos'>
          <ItemList productos={products} carrito={carrito} />
        </div>
        </>
      }
    </div>
  )
}
