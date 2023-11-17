import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

const data = {
    nombre: "Pescar Shop",
    descripcion: "Tienda de articulos de todo tipo",
    version: "0.1.0",
    autor: "Pescar SA"
}
// Motor de Plantillas
app.set("view engine", "pug")
app.use("/", express.static("views"))

app.get('/', (req, res) => { 
  res.render('index', data)  
})

app.listen(PORT, console.log(startMsg))