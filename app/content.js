const nav = require('./nav');
const footer = require('./footer');
const Content = (data, { counter, title, method, url }) =>
    data.toString()
    .replace("{{Title}}", title)
    .replace("{{nav}}", nav)
    .replace("{{content}}", `
        <p class="p-3 ${method}">Metodo ${method} exitoso en la ruta ${url}</p>
        <p>Esta sitio fue visitado ${counter} cantidad de veces</p>`)
    .replace("{{footer}}", footer);

module.exports = Content;