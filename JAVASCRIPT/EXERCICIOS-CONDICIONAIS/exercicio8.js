// 8. Cálculo de IMC Crie as variáveis peso (em kg) e altura (em metros).
// Calcule o IMC
// utilizando a fórmula: peso dividido pela altura vezes a altura.

let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  alert("Você está abaixo do peso");
} else if ((imc >= 18, 5 && imc <= 24.9)) {
  alert("Você está no Peso Normal");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Você está Sobrepeso");
} else if (imc >= 30) {
  alert("Você está com Obsidade");
} else {
  alert("Algo deu errado, tente novamente");
}
