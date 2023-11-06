const { parse, join, resolve } = require('node:path');

const stringPath = process.argv[1]
const relativePath = "./public/styles/default.css"
const dir = 'public' 
const file = 'index.html' 

console.log("\nRuta Desestructurada: \n", parse(stringPath))
console.log("\nRuta Formato Texto: \n", join(dir, file))
console.log("\nRuta Absoluta\n", resolve(relativePath))