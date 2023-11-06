const { readFile, appendFile } = require('node:fs');
/* Asincrona */
const path = "./public"
// Lectura de Archivos
const file = process.argv[2]
readFile(`${path}/${file}`, (err, data) => {
    if (err) throw err; // interrumpe la ejecucion del codigo
    console.log("\nError: \n", err) // undefined si la operacion es exitosa
    console.log("\nBuffer:\n", data) // cadena hexadecimal de datos
})

// Escritura de Archivos
const data = "\n* " + process.argv.join("\n* ") + "\n___";
appendFile(`${path}/fs.async.md`, data, (err) => {
    if (err) throw err;
    console.log("\nLos datos han sido agregados correctamente\n")
})