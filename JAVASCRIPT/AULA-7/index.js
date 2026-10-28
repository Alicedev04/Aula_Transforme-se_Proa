// Função é um determinado bloco de código

// DOM

function OlaMundo() {
  alert("Olá Mundo");
}

// Função com parâmetro  - são variaveis
//que tornam a função dinamica

function saudacao(nome) {
  alert("Olá " + nome);
}

function somar(numero1, numero2) {
  return numero1 + numero2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mostrarResultado() {
  let argumento1 = Number(prompt("Digite o numero 1: "));
  let argumento2 = Number(prompt("Digite o numero 2: "));
  alert("Soma: " + somar(argumento1, argumento2));
}

function mostrarSubtracao() {
  let argumento1 = Number(prompt("Digite o numero 1: "));
  let argumento2 = Number(prompt("Digite o numero 2: "));
  alert("Resultado Sub: " + sub(argumento1, argumento2));
}
