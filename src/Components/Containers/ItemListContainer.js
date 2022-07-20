import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { productos } from '../../services/FakeApi';
import "./ItemListContainer.css"
import { ItemList } from './Items/ItemList';
import { db } from "../firebase/firebase";
import { getDocs, collection, query } from "firebase/firestore";
import { Button } from 'bootstrap';

export const ItemListContainer = ({greeting, carrito=false, carritoContent}) => {
  console.log(db);
  
  const [products, setProducts] = useState([])
  
  const {categoryId} = useParams();

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
