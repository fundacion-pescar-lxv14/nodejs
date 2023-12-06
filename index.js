import dotenv from "dotenv";
import express from "express";
import dbConn from "./config.js";

import mainRouter from "./routes/main.js";
import productsRouter from "./routes/products.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT ?? 3000;
const URI = process.env.APP_URI ?? 'mongodb://localhost:27017/ecommerce';

dbConn(URI);

app.use("/", mainRouter)
app.use("/products", productsRouter)

app.listen( PORT, () => console.log("Servidor corriendo en el puerto "+PORT)
);
export default app;