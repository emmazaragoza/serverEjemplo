// importo todas la rutas necesarias
import getProduct from "../routes/gerProducts.js";

// importo y inicializo el mudulo Router de Express
import express from "express";
const server = express()

// este es un middleware que me permite es manejo de rutas, en fundamental para cuando son son muchas
server.use('/get', getProduct)

 


// exporto todo el modulo, que despues lo import en app.js
export default server