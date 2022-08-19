import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const agregarProducto = (producto, count) => {
    const consulta = existeProducto(producto.id);
    if (!consulta) {
      producto.cantidad = count;
      setPrecioTotal(precioTotal + producto.precio * count);
      setProductos([...productos, producto]);
      producto.stock = producto.stock - count;
    } else {
      setPrecioTotal(precioTotal + producto.precio * count);
      producto.stock = producto.stock - count;
      let existe = productos.find((p) => p.id == producto.id);
      existe.cantidad = existe.cantidad + count;
    }
  };
  const existeProducto = (id) => {
    const existe = productos.find((p) => p.id == id);
    return existe ? true : false;
  };
  const deleteProducto = (producto) => {
    const arrDel = productos.filter((p) => p.id !== producto.id);
    setProductos(arrDel);
  };
  const getTotal = () => {
    return productos.length;
  };
  const deleteAll = () => {
    setProductos([]);
  };
  return (
    <Provider
      value={{
        productos,
        agregarProducto,
        deleteProducto,
        getTotal,
        precioTotal,
        deleteAll,
      }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
