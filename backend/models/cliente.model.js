import {Schema, model} from 'mongoose'


export const esquema = new Schema({ //modelo
    name:{
        type: String
    }
 })
 

 export const Modelo = new model ('Clientes', esquema)