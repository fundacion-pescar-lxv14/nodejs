import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

app.get('/', (req, res) => {
    res.status(200).send("<h1>Bienvenido a Pescar Shop</h1>")
})

app.post('/', (req, res) => {
    res.status(200).send("<h1>Solicitud Recibida exitosamente</h1>")
})

app.get("*", (req, res) => {
    res.status(404).send(`<h1>Error 404: <br><small>No se encontro la ruta ${req.url}</small> </h1>`)	
})

app.listen(PORT, console.log(startMsg))