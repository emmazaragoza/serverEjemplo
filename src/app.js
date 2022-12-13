import  express from "express";
const server = express()

// importo el archivo de index que contiene todas las rutas del proyecto.
import rutas from "./routes/index.js" ;
server.use('/', rutas)




module.exports = server