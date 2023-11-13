const url = require('node:url');

const example = process.argv[2] || "https://alumni.education/users";
const objectURL = url.parse(example);

console.log(objectURL);