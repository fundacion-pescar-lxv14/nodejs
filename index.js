import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`
/* METODO GET */
// Busca el contenido en la carpeta public
app.use('/', express.static('public'))
// Si No encuentra la ruta, continua con las siguientes
app.get('/products', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/products.html')
})
app.get('/services', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/services.html')
})
app.get('/contact', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/contact.html')
})
/* METODO POST */
// Notifica la recepcion del mensaje
app.post('/', (req, res) => {
    res.status(200).send("<h1>Solicitud Recibida exitosamente</h1>")
})
// Si no hay coincidencia con las rutas anteriores
app.get("*", (req, res) => {
    res.status(404).send(`<h1>Error 404: <br><small>No se encontro la ruta ${req.url}</small> </h1>`)	
})

app.listen(PORT, console.log(startMsg))