import { ModeloStatus } from "../models/status.model.js";

export const test3 = () =>{
    console.log('funciona el controlador del status')
}

ModeloStatus.create({
    status: "bueno",
    fechaLLegada: "2 de marzo"
})