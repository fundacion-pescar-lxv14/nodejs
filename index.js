import express from 'express';
import { data, posts, user } from './data.js';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`


// Perfile de Usuario
app.get('/profile', (req, res) => res.render('index', {...data, user})) // Agregamos la clave user con sus valores
// Publicaciones
app.get('/posts', (req, res) => res.render('index', {...data, ...posts})) // Unificamos las claves de posts
// Ruta General
app.get('*', (req, res) => res.render("index", data))

app.listen(PORT, console.log(startMsg))