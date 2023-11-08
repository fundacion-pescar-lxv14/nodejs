// Modulos Core NODEJS
const http = require('node:http');
const { readFile } = require('node:fs');
// Datos de Conexion
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = process.env.PORT ?? 3000;
// Modulos de Aplicacion
const nav = require('./app/nav');
const footer = require('./app/footer');
// Servidor LOCAL NodeJS
const server = http.createServer((req, res) => {
    const { url, method } = req;
    const dir = './public';
    const head =[200, { 'Content-Type': 'text/html; charset=utf-8'}]
    let title = "";
    let notFound = false;
    switch(url.toLowerCase()){
        case '/':
        case '/index':
        case '/index.html':
            title="<h1>Te damos la Bienvenida</h1>";
        break;
        case "/contact":
        case "/contact.html":
            title ="<h1>Contactanos</h1>";
        break;
        case "/about":
            title ="<h1>Sobre Nosotros</h1>";
        break;
        case "/gallery":
            title ="<h1>Galería de Imágenes</h1>";
        break;
        default:
            title =`<h1>Error 404<br> Página ${url} no encontrada</h1>`
            notFound = true;
    }
    if (notFound) {
        res.writeHead(...head);
        res.end(title);
    }
    else readFile(`${dir}/index.html`, (err, data) => {
        if (err){
            res.writeHead(...head);
            res.end(`<h1>Error 500<br> Internal Server Error</h1>`);
        }
        else {
            res.writeHead(...head);
            res.end(
                data.toString()
                .replace("{{Title}}", title)
                .replace("{{nav}}", nav)
                .replace("{{content}}", `Metodo ${method} exitoso en la ruta ${url}`)
                .replace("{{footer}}", footer)
            );
        }
    })
});

server.listen(
    PORT, // Puerto utilizado
    HOST, // Direccion IP o nombre de HOST
    () => console.log(`la aplicacion esta funcionando en la direccion ${HOST}:${PORT}`) // callback
)