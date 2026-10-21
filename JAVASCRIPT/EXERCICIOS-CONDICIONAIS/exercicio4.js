// 4. Máquina de Lanches Um trailer de lanches

let codigoLanche = prompt("Faça seu pedido entre 1 a 3: ");

switch (codigoLanche.toUpperCase()) {
  case "1":
    alert("Você escolheu Hambúrguer. Valor: R$15,00");
    break;
  case "2":
    alert("Você escolheu Pizza. Valor: R$20,00");
    break;
  case "3":
    alert("Você escolheu Salada. Valor: R$12,00");
    break;
  default:
    alert("Código não encontrado");
    break;
}
