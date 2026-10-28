function isPar(numero) {
  if (numero % 2 === 0) {
    return "O numero é Par";
  } else {
    return "O numero é ímpar";
  }
}

console.log(isPar(3));

// Segunda forma de fazer
// const isPar = (numero) => {
//   return numero % 2 === 0 ? "Número par" : "Número impar";
// };
