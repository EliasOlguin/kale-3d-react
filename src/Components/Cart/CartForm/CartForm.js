import { Input, InputLabel } from "@mui/material";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { contexto } from "../../Context/CartContexto";
import { db } from "../../firebase/firebase";

export const CartForm = ({ setOpenPopup }) => {
  const { deleteAll, productos } = useContext(contexto);
  const [recibo, setRecibo] = React.useState();
  const initialStateVar = {
    nombre: "",
    apellido: "",
    email: "",
    celular: 0,
  };
  const { watch, control, getValues, setValue, formState, handleSubmit } =
    useForm({
      defaultValues: initialStateVar,
    });
  const { isDirty, isValid, errors } = formState;
  const onRefreshStock = (id, stock) => {
    const productsColletion = doc(db, "productos", id);
    updateDoc(productsColletion, { stock: stock });
  };
  const onTerminarCompra = (e) => {
    productos.map((item) => {
      onRefreshStock(item.id, item.stock);
    });
    const objSubmit = { ...e, date: serverTimestamp() };
    const collectionVentas = collection(db, "Ventas");
    addDoc(collectionVentas, objSubmit).then((data) => {
      setRecibo(data.id);
      //   deleteAll();
    });
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div>
      {recibo ? (
        <div>
          <div className="fs-2 text-center ">
            {" "}
            Tu recibo de compra es el siguente: {recibo}! Muchas gracias por tu
            compra.
          </div>
          <div
            className="d-flex flex-row-reverse"
            style={{ marginRight: "14px" }}
          >
            <NavLink to={"/"}>
              <button className="btn btn-primary" onClick={deleteAll}>
                Ir al inicio
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onTerminarCompra)}>
          <div className="w-full" style={{ width: "500px" }}>
            <div className="fs-2 text-center ">Terminar la compra</div>
            <div>
              <Controller
                control={control}
                name="nombre"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Nombre:</InputLabel>
                    <Input fullWidth {...field} />
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="apellido"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Apellido:</InputLabel>
                    <Input fullWidth {...field} />
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Email:</InputLabel>
                    <Input fullWidth {...field} type="email" />
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="celular"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Celular:</InputLabel>
                    <Input fullWidth {...field} type="number" />
                  </>
                )}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="m-3">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => setOpenPopup(false)}
                >
                  Cancelar
                </button>
              </div>
              <div className="m-3">
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!isDirty && !isValid}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
