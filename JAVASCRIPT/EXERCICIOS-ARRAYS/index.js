// 1. O Tamanho da Fila

let filmes = ["Homem-Aranha", "Venom", "Zootopia"];

console.log("Minha lista tem " + filmes.length + " filmes.");

// 2. Carrinho de Compras

let carrinho = ["arroz", "feijão"];
// // Acresenta Macarrão no final da lista
carrinho.push("Macarrão");
// // mostra a lista por inteiro
console.log(carrinho);
// //Acresenta Carne no final da lista
carrinho.push("Carne");
// // Remova o último item da lista
carrinho.pop();
// // mostra a lista por inteiro
console.log(carrinho);

// 3. Fila do Banco

let filaBanco = ["Carlos", "Maria", "João"];
// Adiciona Seu José no início da fila
filaBanco.unshift("Seu José");
console.log(filaBanco);
// // Remove a primeira pessoa e guarda o nome
let atendido = filaBanco.shift();
// // Exibe quem foi atendido
console.log("Atendimento de hoje: " + atendido);
// // Exibe como ficou a fila
console.log(filaBanco);

// 4. Lista de Convidados VIP

let convidados = ["Ana", "Bruno", "Caio"];

let nomeBusca = "Bruno";
if (convidados.includes(nomeBusca)) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}

// 5. Onde está o livro?

let livros = ["Harry Potter", "Senhor dos anéis", "Nárnia"];

let posicao = livros.indexOf("Nárnia");
if (posicao !== -1) {
  console.log("O livro está na posição " + posicao);
} else {
  console.log("Livro não encontrado");
}

// 6. Pódio da Corrida

let corredores = ["Marcos", "Lucas", "Julia", "Sofia", "Pedro"];
console.log(corredores);

let podio = corredores.slice(0, 3);

console.log(podio);

// 7. Listando os Alunos
let alunos = ["Arthur", "Bia", "Catarina", "Diego"];

for (let i = 0; i < alunos.length; i++) {
  console.log("Índice " + i + ": " + alunos[i]);
}

// 8. Contando os Aprovados
let notas = [5, 8, 4, 9, 7];
let quantidadeAprovados = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    quantidadeAprovados++;
  }
}

console.log("Total de aprovados: " + quantidadeAprovados);

// 9. Cadastro Inteligente

let emailsCadastrados = ["admin@email.com", "contato@email.com"];
let novoEmail = "joao@email.com";

if (emailsCadastrados.includes(novoEmail)) {
  console.log("Erro: E-mail já está cadastrado.");
} else {
  emailsCadastrados.push(novoEmail);
  console.log("Cadastro realizado com sucesso!");
  console.log(emailsCadastrados);
}

// 10. Invertendo o Array Manualmente

let numerosOriginais = [10, 20, 30, 40];

let numerosInvertidos = [];

for (let i = numerosOriginais.length - 1; i >= 0; i--) {
  numerosInvertidos.push(numerosOriginais[i]);
}

console.log(numerosOriginais);
console.log(numerosInvertidos);
