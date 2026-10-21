// > Maior
// < - Menor
// == - Igualdade
// === - Igualdade + tipo da variavel
// != - Diferente
// !== - Diferença + tipo da variável

// let idade = Number(prompt("Digite sua idade: "));

// Somente será executado o comando SE a condição dor verdadeira
// if (idade > 18) {
//   alert("Você é maior de idade!");
// } else {
//   alert("Você é menor de idade.");
// }

// Condição ? seForVerdadeiro : seForFalso
// let idade = prompt("Digite sua idade: ");

// alert(idade > 18? "Maior de idade" : "Menor de idade");

// Dia da semana

let diaDaSemana = prompt("Digite o dia da semana");

// toLowerCase() - Método que transforme toda a string em  minusculo
// toUpperCase() - Médotodo que transforma toda a string em maiusculo
if (diaDaSemana.toLowerCase() == "segunda") {
  alert("Hoje é dia de Kahoot");
} else if (diaDaSemana.toLowerCase() == "terca") {
  alert("Hoje veremos Harry Potter");
} else if (diaDaSemana.toLocaleLowerCase() == "quarta") {
  alert("Veremos laços de repetição");
} else {
  alert("Algo deu errado!");
}
