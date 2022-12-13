// Importo e inicializo el modulo de express Router() que es es que me ayudara a hacer las rutas
import {Router} from "express";
const server = Router()  // lo van a ver mas adelante

// importo las clase desde service que es en donde se hace toda la logica necesaria 
import {getProducts} from '../service/getProducts.js'
 

// ruta que obtiene los productos de una base de datos (DB o db)
server.get('/products', async (req, res) => {
    //funcion asincrona, necesita try-catch 
    try {
        const dataService = getProducts()
        return res.json(dataService)
    } catch (error) {
        console.log(error.message)
    }

} )

//exporto el mudulo con todas las rutas, que despues lo importo en routes/index.js 
export default server