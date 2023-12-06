import mongoose from 'mongoose';
import dotenv from 'dotenv';

const dbConn = (URI) => mongoose.connect(URI)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.log(err))

export default dbConn;