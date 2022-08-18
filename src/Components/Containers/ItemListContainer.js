import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({greeting, carrito=false, carritoContent}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams();
  const [carritoTieneNoAlgo, setCarritoNoTieneAlgo] = useState(false)
  
  const getProducts =  () =>{
    const productsColletion = collection(db, 'productos');
    const filterQ = query(productsColletion, where("category", "==" , categoryId || ""))
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
        }
  const perdirProductos = new Promise((res,rej)=>{
   res(carritoContent) 
})
  useEffect(()=>{
    carrito?(
      perdirProductos.then(data =>{
          setProducts(data);
      }))
      : getProducts();
  },[categoryId])
  useEffect(()=>{
    if(carrito && carritoContent.length == 0){
      setCarritoNoTieneAlgo(true);
    }  
  },[carritoContent])
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
