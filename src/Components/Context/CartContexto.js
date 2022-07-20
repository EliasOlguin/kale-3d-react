import React, { createContext, useState } from 'react'

export const contexto = createContext()
const {Provider} = contexto


const CustomProvider = ({children}) => {

  const [productos, setProductos] = useState([])

  const agregarProducto = (producto, count)=>{
    
    const consulta = existeProducto(producto.id)
    console.log(consulta);
    if(!consulta){
      producto.stock = count
      setProductos([...productos, producto])
      console.log("entre a agregar ");
    }else{
      let existe = productos.find(p => p.id == producto.id)
      existe.stock = existe.stock + count
    }
    console.log(count);
    console.log(producto);
    console.log(productos);
  }
  const existeProducto = (id)=>{
    const existe = productos.find( p => p.id == id)
    const estado = existe?true:false
    return estado
  }
  const deleteProducto = (producto) =>{
    console.log("borre a ", producto);
      const arrDel = productos.filter(p => p.id == !producto.id)
      setProductos(arrDel)
  }
  const clearProductos = () =>{
    setProductos([])
  }
    return (
      <Provider value={{productos, agregarProducto, deleteProducto}}>
        {children}
      </Provider>
    )
}

export default CustomProvider