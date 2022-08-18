import React, { createContext, useState } from 'react'

export const contexto = createContext()
const {Provider} = contexto


const CustomProvider = ({children}) => {

  const [productos, setProductos] = useState([])

  const agregarProducto = (producto, count)=>{
    const consulta = existeProducto(producto.id)
    console.log(consulta);
    debugger
    if(!consulta){
      producto.cantidad = count
      setProductos([...productos, producto]);
      producto.stock = producto.stock - count
      console.log("entre a agregar ");
    }else{
      producto.stock = producto.stock - count
      let existe = productos.find(p => p.id == producto.id)
      existe.cantidad = existe.cantidad + count
    }
  }
  const existeProducto = (id)=>{
    debugger
    const existe = productos.find( p => p.id == id)
    return existe?true:false
  }
  const deleteProducto = (producto) =>{
    console.log("borre a ", producto);
      const arrDel = productos.filter(p => p.id !== producto.id)
      setProductos(arrDel)
  }
  const getTotal = () =>{
    return productos.length
  }
  const clearProductos = () =>{
    setProductos([])
  }
    return (
      <Provider value={{productos, agregarProducto, deleteProducto, getTotal}}>
        {children}
      </Provider>
    )
}

export default CustomProvider