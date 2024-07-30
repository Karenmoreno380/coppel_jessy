import { esquema } from "./cliente.model.js";
import {model} from 'mongoose'

export const modeloProv = new model('Proveedor', esquema)