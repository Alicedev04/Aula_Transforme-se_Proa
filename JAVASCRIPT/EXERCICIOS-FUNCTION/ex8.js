function aplicarDesconto(preco, porcentagem) {
  let desconto = (preco * porcentagem) / 100;
  return preco - desconto;
}

console.log(aplicarDesconto(100, 20));
