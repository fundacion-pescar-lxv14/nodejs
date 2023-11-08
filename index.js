// Modulos Core NODEJS
const http = require('node:http');
const { readFile } = require('node:fs');
// Datos de Conexion
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = process.env.PORT ?? 3000;
// Modulos de Aplicacion
const Content = require('./app/content');
// Servidor LOCAL NodeJS
const server = http.createServer((req, res) => {
    let 
        file = "index.html",
        notFound = false,
        counter = 0,
        title = "";

    const
        dir = './public',
        head = { 
            'Content-Type': "text/html; charset=utf-8",
            'desarrollador': "Cristian Racedo & compañia"
        }
    switch(req.url.toLowerCase()){
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
        case "/styles":
        case "/styles.css":
        case "/styles/default.css":
        case "/css/styles.css":
            file = "styles/default.css";
            head['Content-Type'] = "text/css; charset=utf-8";
        break;
        default:
            title =`<h1>Error 404<br> Página ${req.url} no encontrada</h1>`
            notFound = true;
    }
    if (notFound) {
        res.writeHead(404, head);
        res.end(title);
    }
    else readFile(`${dir}/${file}`, (err, data) => {
        if (err){
            res.writeHead(500, head);
            res.end(`<h1>Error 500<br> Internal Server Error</h1>`);
        }
        else {
            res.writeHead(200, head);
            res.end(Content(data,{ title, ...req })) 
        }
    })
});

server.listen(
    PORT, // Puerto utilizado
    HOST, // Direccion IP o nombre de HOST
    () => console.log(`la aplicacion esta funcionando en la direccion ${HOST}:${PORT}`) // callback
)