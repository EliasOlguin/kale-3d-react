import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../../../services/FakeApi';
import { ItemDetail } from './ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
   const {productId} = useParams();

  const getItem = new Promise((res,rej)=>{
      setTimeout(() => {
        res(productos)
      }, 1000);
    })
    const [product, setProduct] = useState({})
  
    useEffect(()=>{
        getItem.then(res=>{
        console.log(res);
        if(productId){
          const filter = productos.find(p => p.id == productId)
          setProduct(filter)
        }else{
          setProduct(res)
        }
      }).catch(e=>{
        console.log(e);
      })
    },[])

  return (
    <>  
        <ItemDetail producto={product} />
    </> 
  )
}
