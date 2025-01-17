// modulo para trabalhar com argumentos 
const minimint = require('minimist');

const args = minimint(process.argv.slice(2));

console.log(args);

const nome = args['nome'];

console.log(nome);