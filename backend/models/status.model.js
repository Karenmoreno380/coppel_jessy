import {Schema, model} from 'mongoose'

export const esquemaStatus = new Schema({ //modelo
    status:{
        type: String
    },
    fechaLLegada:{
        type: String
    }
 })
 

 export const ModeloStatus = new model ('status', esquemaStatus)