const Social = require('./social');
const links = require('./links');
const d = new Date();

const footer = () =>
`<div class="social">${ Social(links) }</div>
<p>&copy;Todos los derechos reservados
    ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}
</p>`

module.exports = footer;