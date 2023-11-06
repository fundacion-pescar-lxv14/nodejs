const http = require('node:http');

const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch(url.toLowerCase()){
    case '/':
        res.write(`<h1>Pagina Principal</h1>`);
        break;
    case "/contact":
        res.write(`<h1>Pagina de Contacto</h1>`);
        break;
    case "/about":
        res.write(`<h1>Pagina Acerca de</h1>`);
        break;
    default:
        res.write(`<h1>Error 404<br> Pagina ${url} no encontrada</h1>`)
    }
});

server.listen(PORT, HOST, () => console.log(`la aplicacion esta funcionando en la direccion ${HOST}:${PORT}`))