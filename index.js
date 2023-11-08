// Modulos Core NODEJS
const http = require('node:http');
// Datos de Conexion
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = process.env.PORT ?? 3000;
// Modulos de Aplicacion
const nav = require('./app/nav');
// Servidor LOCAL NodeJS
const server = http.createServer((req, res) => {
    const { url, method } = req;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(nav());
    switch(url.toLowerCase()){
    case '/':
    case '/index':
    case '/index.html':
        res.end(`<h1>Página Principal</h1>`);
    break;
    case "/contact":
    case "/contact.html":
        res.end(`<h1>Contactanos</h1>`);
    break;
    case "/about":
        res.end(`<h1>Sobre Nosotros</h1>`);
    break;
    case "/gallery":
        res.end("<h1>Galería de Imágenes</h1>");
    break;
    default:
        res.end(`<h1>Error 404<br> Página ${url} no encontrada</h1>`)
    }
});

server.listen(
    PORT, // Puerto utilizado
    HOST, // Direccion IP o nombre de HOST
    () => console.log(`la aplicacion esta funcionando en la direccion ${HOST}:${PORT}`) // callback
)