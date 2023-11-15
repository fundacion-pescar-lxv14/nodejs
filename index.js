import express from 'express'
import userRouter from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

// Rutas de la API
app.use("/users", userRouter );

// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

app.listen(PORT, console.log(startMsg))