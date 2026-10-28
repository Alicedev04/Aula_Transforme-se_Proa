function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "maior";
  } else {
    return "menor";
  }
}

console.log(verificarMaioridade(20));

// Segunda forma de fazer
// const maiorIdade = (idade) => {
//   return idade >= 18 ? "maior de idade" : "Menor de idade";
// };

// console.log(maiorIdade());
