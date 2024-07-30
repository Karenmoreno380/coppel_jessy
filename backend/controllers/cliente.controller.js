import { Modelo } from "../models/cliente.model.js";

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}

Modelo.create({
    name: "Alex"
})