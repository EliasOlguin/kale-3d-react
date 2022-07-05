import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail';

const producto = {
    id:0, nombre:"Soporte de joysticks", precio:1800, stock:10, img:"assets/soporteJoystick.jpg",descripcion:"Soporte para controles de ps4/ps5/xbos/mando generico. Una altura de 15cm y pintado a mano"
}

export const ItemDetailContainer = () => {

    const getItem = new Promise((res,rej)=>{
        setTimeout(() => {
          res(producto)
        }, 2000);
      })
      const [product, setProduct] = useState({})
    
      useEffect(()=>{
         getItem.then(res=>{
          console.log(res);
          setProduct(res)
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
