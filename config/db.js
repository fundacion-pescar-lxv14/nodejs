// Importacion del ORM
import mongoose from 'mongoose';
// Indicador de Recurso Universal (Servidor MongoDB)
const APP_URI = process.env.APP_URI ?? 'mongodb://localhost:27017/pescar_shop'
// Conexion con Servidor de Base de Datos
const dbConn = mongoose.connect(APP_URI)
.then(() => console.log('conectado con la base de datos'))
.catch(err => console.log(err));
// Exportacion de la Conexion
export default dbConn;