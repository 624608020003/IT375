const fs = require('fs');
const textin = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textin);
//write file

const textOut = `Avocado information: ${textin}\n Create on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written');