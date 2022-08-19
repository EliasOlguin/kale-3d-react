import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalCompoment } from "../../shared/UI/ModalCompoment";
import { ItemListContainer } from "../Containers/ItemListContainer";
import { contexto } from "../Context/CartContexto";
import { CartForm } from "./CartForm/CartForm";

const Cart = () => {
  const { productos, precioTotal } = useContext(contexto);
  const [carrito, setCarrito] = useState(true);
  const [carritoContent, setCarritoContent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (productos.length > 0) {
      setCarritoContent(true);
    } else {
      setCarritoContent(false);
    }
  }, [productos]);
  return (
    <div className="flex">
      <div>
        <ItemListContainer
          greeting={"Este es tu carrito:"}
          carrito={carrito}
          carritoContent={productos}
        />
      </div>
      {carritoContent && (
        <div
          className="d-flex flex-row-reverse"
          style={{ marginRight: "14px" }}
        >
          <div className="card" style={{ width: "12rem" }}>
            <div className="card-body">
              <h5 className="card-title">Precio total:</h5>
              <p className="card-text">${precioTotal}</p>
              <button
                className="btn btn-primary"
                onClick={() => setOpenModal(true)}
              >
                Terminar compra
              </button>
            </div>
          </div>
          <ModalCompoment openPopup={openModal} setOpenPopup={setOpenModal}>
            <CartForm setOpenPopup={setOpenModal}></CartForm>
          </ModalCompoment>
        </div>
      )}
    </div>
  );
};

export default Cart;
