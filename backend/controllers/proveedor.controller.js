import { modeloProv } from "../models/proveedor.model.js";

export const test4 = () =>{
    console.log("funciona el controlador de proveedor")
}

modeloProv.create({
    name:"sonic"
})