// Continua execultando o codigo, sem pausas.
const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo.txt', 'Oi', function(err){
    setTimeout(function() {
        console.log('Arquivo Criado')
    },1000);
});

console.log('Fim');
