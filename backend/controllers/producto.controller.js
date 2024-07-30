import { ModeloProd } from '../models/producto.model.js'

export const test2 = ()=>{
    console.log ('Funciona el controlador de admin')
}
ModeloProd.create({
    name:"Pantalla",
    cantidad: 5
})