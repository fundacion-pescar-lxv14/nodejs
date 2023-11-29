/** IMPORTACIONES */
// Production (Permanece en el proyecto)
import express from 'express'
import { engine } from 'express-handlebars';
// Development (Solo para desarrollo)
import morgan from 'morgan';
// Database Connection
import dbConn from './config/db.js';
// Application Routers
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'

/** DECLARACIONES */
// Servidor BackEnd
const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`
// Motor de Plantillas
app.engine("hbs", engine({
    defaultLayout: process.cwd()+"/views/index",
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set('views', './views');

/** IMPLEMENTACION */
app.use(morgan('dev'));
// Request Body Parser (Middleware)
app.use(express.urlencoded({extended: true}));
// Rutas de la API
app.use("/", authRouter);
app.use("/users", userRouter );
app.use("/posts", postRouter );
// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

/** EJECUCION */
app.listen(PORT, console.log(startMsg))