const fs = require('node:fs');
/* Sincronica */
const path = "./public"
// Lectura de Archivos
const html = fs.readFileSync(`${path}/index.html`);
console.log("\nBuffer: \n", html);
console.log("\nContenido: \n", html.toString());

// Escritura de Archivos
const file =`${path}/fs.sync.md`
const data = `## NodeJS:
* __Ruta de instalacion__: ${process.argv[0]}
* __Archivo ejecutable__: ${process.argv[1]}
* __Modulo__: File System
* __Operacion__: writeFileSync
* __Contenido__: ${process.argv[2]}`;

fs.writeFileSync(file, data);
console.log("\nMODULO FILE SYSTEM\n", fs)
console.log("\nPROCESS ARGuments Values\n", process.argv)