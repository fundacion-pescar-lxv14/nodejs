import express from 'express';
import { data } from './data.js';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

// Motor de Plantillas
app.set("view engine", "pug")
app.use("/", express.static("views"))

app.get('/', (req, res) => { 
  const content = {
    title: 'Home',
    description: 'Home page'
  }
  res.render('index', {...data, ...content})  
})

app.listen(PORT, console.log(startMsg))