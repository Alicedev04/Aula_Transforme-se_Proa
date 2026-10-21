// 1. Par ou Ímpar Crie uma variável com um número inteiro.
// Faça um programa que verifique se esse número é par ou ímpar
// e exiba o resultado no console.

let numero = Number(prompt("Digite um numero: "));

if (numero % 2 === 0) {
  alert("O número é par");
} else {
  alert("O número é impar");
}
