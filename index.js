import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

const data = {
    nombre: "Pescar Shop",
    descripcion: "Tienda de articulos de pesca",
    version: "0.1.0",
    autor: "Pescar SA"
}

app.get('/', (req, res) => { console.log(req, res) })

app.listen(PORT, console.log(startMsg))