import {Schema, model} from 'mongoose'

export const esquemaProd = new Schema({ //modelo
    name:{
        type: String
    },
    cantidad:{
        type: Number
    }
 })
 

 export const ModeloProd = new model ('productos', esquemaProd)