// 3. Dias da Semana Crie uma variável chamada diaSemana com um número de 1 a 7.
// Use a estrutura switch para exibir o nome do dia (1 = Domingo, 2 = Segunda, etc.).
//  Se o número estiver fora desse intervalo, exiba "Dia inválido" no console.

let diaDaSemana = prompt("Escolha de 1 a 7: ");

switch (diaDaSemana.toUpperCase()) {
  case "1":
    alert("Domingo");
    break;
  case "2":
    alert("Segunda");
    break;
  case "3":
    alert("Terça");
    break;
  case "4":
    alert("Quarta");
    break;
  case "5":
    alert("Quinta");
    break;
  case "6":
    alert("Sexta");
    break;
  case "7":
    alert("Sabado");
    break;
  default:
    alert("Algo deu errado!");
    break;
}
