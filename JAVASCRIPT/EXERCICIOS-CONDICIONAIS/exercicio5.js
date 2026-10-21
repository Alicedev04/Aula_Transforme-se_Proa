// 5. Pode Votar? Crie uma variável idadeParaVoto. Imprima no console "Não pode votar"
// se a idade for menor que 16, "Voto opcional" se tiver entre 16 e 17 anos ou mais de 70
// anos, e "Voto obrigatório" se tiver entre 18 e 70 anos.

let idadeParaVotar = Number(prompt("Digite sua idade"));

if (idadeParaVotar < 16) {
  alert("Não pode votar");
} else if (idadeParaVotar < 18 || idadeParaVotar > 70) {
  alert("Voto opcional");
} else {
  alert("Voto obrigatorio");
}
