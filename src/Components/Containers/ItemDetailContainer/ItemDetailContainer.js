import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';


export const ItemDetailContainer = () => {
   const {productId} = useParams();

  
    const [product, setProduct] = useState({})
  
    useEffect(()=>{
      const productsColletion = collection(db, 'productos');
      const refDoc = doc(productsColletion, productId)
      getDoc(refDoc).then(p => {
        const addProduct = p.data()
        addProduct.id = productId
        setProduct(addProduct)
      })
    },[productId])

  return (
    <>  
        <ItemDetail producto={product} />
    </> 
  )
}
