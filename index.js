import dotenv from "dotenv";
// Modulo Externos
import express, { urlencoded } from "express";
import dbConn from "./config.js";
// Rutas de Aplicacion
import mainRouter from "./routes/main.js";
import productsRouter from "./routes/products.js";
// Variables de Entorno
dotenv.config();
// Declaraciones
const app = express();
const PORT = process.env.APP_PORT ?? 3000;
const URI = process.env.APP_URI ?? 'mongodb://localhost:27017/ecommerce';
// Conexion con Base de Datos
dbConn(URI);
// Configuracion Aplicacion
app.use(urlencoded({extended: true}));
app.use(express.json());
// Implementacion de Rutas
app.use("/", mainRouter)
app.use("/products", productsRouter)
// Inicio de Aplicacion
app.listen( PORT, () => console.log("Servidor corriendo en el puerto "+PORT)
);
export default app;