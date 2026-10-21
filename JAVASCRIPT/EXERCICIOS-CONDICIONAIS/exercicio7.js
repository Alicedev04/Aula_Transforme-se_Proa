// 7. Calculadora Básica

let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let operador = prompt("Escolha entre os operadores: +, -, * ou /");

switch (operador) {
  case "+":
    alert("Resultado: " + (numero1 + numero2));
    break;
  case "-":
    alert("Resultado: " + (numero1 - numero2));
    break;
  case "*":
    alert("Resultado: " + numero1 * numero2);
    break;
  case "/":
    alert("Resultado: " + numero1 / numero2);
    if (numero2 == 0) {
      alert("Erro: Não é possível dividir por zero!");
    } else {
      alert("Resultado: " + numero1 / numero2);
    }
}
