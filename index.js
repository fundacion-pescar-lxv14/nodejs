import express from 'express'
import dbConn from './config/db.js';
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

app.use(morgan('dev'));
// Request Body Parser (Middleware)
app.use(express.urlencoded({extended: true}));
// Rutas de la API
app.use("/users", userRouter );
app.use("/posts", postRouter );
// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

app.listen(PORT, console.log(startMsg))