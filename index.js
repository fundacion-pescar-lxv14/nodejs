import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

// Rutas de la API
/**
 * posts/ -> Muestra todos los productos
 * posts/:id -> Muestra el producto con el id elegido
 * posts/category/:category -> muestra los productos de la categoria elegida
 * posts/category/:category/:id -> muestra el producto de la categoria elegida con el id elegido
 */

app.listen(PORT, console.log(startMsg))