import mongoose from 'mongoose'; // conecta con mongo
import express from 'express'; // crea servidores locales
import cors from 'cors'; // le da seguridad al servidor
import dotenv from 'dotenv'; //  se utiliza para llamar a cualquier archivo dotenv
import { test } from './backend/controllers/cliente.controller.js';
import { test2 } from './backend/controllers/producto.controller.js';
import { test3 } from './backend/controllers/status.controller.js';
import { test4 } from './backend/controllers/proveedor.controller.js';

dotenv.config();
mongoose.connect(process.env.url) //conecta la base de datos con mongo
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); // crea el servidor
app.use (cors());

app.listen(4005,()=>{ // escucha al servidor 
    console.log ('Funciona mi servidor')
})

test()
test2()
test3()
test4()