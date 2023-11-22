import express from 'express';
import { data, posts, user } from './data.js';
import {engine} from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

const config = {
    partialDir: 'views/partials/',
    layoutDir: 'views/layouts/',
    defaultLayout: '../index',
    extname: 'hbs'
}

app.engine('hbs', engine(config));
app.set('view engine', 'hbs');
// Perfile de Usuario
app.get('/profile', (req, res) => res.render('index', {...data, user})) // Agregamos la clave user con sus valores
// Publicaciones
app.get('/posts', (req, res) => res.render('index', {...data, ...posts})) // Unificamos las claves de posts
// Ruta General
app.get('*', (req, res) => res.render("index", data))

app.listen(PORT, console.log(startMsg))