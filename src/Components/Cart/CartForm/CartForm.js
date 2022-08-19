import { Input, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { FormControl } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'

export const CartForm = () => {
    const initialStateVar = {
        nombre: "",
        apellido:"",
        email: "",
        celular: 0
    }
    const { watch, control, getValues, setValue} = useForm({
        defaultValues: initialStateVar});
    const onTerminarCompra = () => {

    }
  return (
    <div >
        <form onSubmit={onTerminarCompra}>
            <div className='w-full' style={{width: "500px" }}>
                <Controller 
                name='nombre'
                rules={{required:true}}
                control={control}
                render={({field})=>{
                    <div>
                        <TextField label="Outlined secondary" color="secondary" focused />
                    </div>
                }}
                />
            </div>
        </form>
    </div>
  )
}
