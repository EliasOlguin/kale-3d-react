import React, { createContext, useState } from 'react'

export const contexto = createContext()
const {Provider} = contexto


const CustomProvider = ({children}) => {

  const [productos, setProductos] = useState([])

  const agregarProducto = (producto, count)=>{
    debugger
    const consulta = existeProducto(producto.id)
    console.log(consulta);
    if(!consulta){
      // producto.stock = producto.stock - count
      setProductos([...productos, producto])
      const buscarProdu = productos.find( p => p.id == producto.id)
      buscarProdu.stock = count
      console.log("entre a agregar ");
    }else{
      const existe = productos.find(p => p.id == producto.id)
      existe.stock = existe.stock + count
    }
    console.log(count);
    console.log(producto);
    console.log(productos);
  }
  const existeProducto = (id)=>{
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