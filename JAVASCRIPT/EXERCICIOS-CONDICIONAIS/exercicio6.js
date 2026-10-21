// 6. Classificação de Triângulos Crie três variáveis
// representando as medidas dos lados
// de um triângulo (ladoA, ladoB e ladoC).

let ladoA = Number(prompt("Digite o primeiro numero: "));
let ladoB = Number(prompt("Digire o segundo numero: "));
let LadoC = Number(prompt("Digite o terceiro numero: "));

if (ladoA === ladoB && ladoB === LadoC) {
  alert("Triângulo Equilátero");
} else if (ladoA !== ladoB || ladoB !== LadoC || ladoA !== LadoC) {
  alert("Triângulo Escaleno");
} else {
  alert("Triângulo Isósceles");
}
