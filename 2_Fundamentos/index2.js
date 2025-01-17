// 'herh' --> ignora
// '5'   --> transformar numero
//  5   --> retornar o valor
let value;

function tranformer(value) {
  if (!Number.isNaN(Number(value))) {
    console.log(value);
  } else {
    console.log("Não é um numero");
  }
}

value = "asdads";
tranformer(value);
//console.log(!Number.isNaN(Number(value)));
//             "Number.isNaN" -> verifica se o "Number(value)" é um NaN.
//             "value = 2" --> 2 não é um NaN então "Number.IsNaN" é falso.
//             "!Number.isNaN" --> Altera a condição, se for falso torna-se verdadeiro,
//              se for verdadeiro, torna-se falso
