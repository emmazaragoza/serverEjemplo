import express  from "express";
import server from "./src/routes/index.js";

const app = express()

app.use('/', server)
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`servidor escuchando en el ${port}`)
})