// Array é uma variavel que armazena
// diversos dados

// Arrays iniciam sempre no indice 0
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "Maria", "João"];

// .length - retorna o tamanho da lista  Array
console.log(nomes.length);

// push() - adiciona o ultimo elemento no array
nomes.push("Gustavo");

// pop() - remove o ultimo elemento do array
console.log(nomes.pop());

console.log(nomes);

// Unshift() - Adiciona valores no inicio da Array
nomes.unshift("Ryan - Giovanni");

// Shift() - remove o primeiro elemento do array
console.log(nomes.shift());

console.log(nomes);

// includes() - verificar se existe um elemento no Array
// retorna true ou false
console.log(nomes.includes(1));

// IndexOf - retorna um indece especifico
// de determinado elemento. Retorna -1 se não achar.
console.log(nomes.indexOf("Ana"));

// slice() - copia o array sem modificar o original
console.log(numeros.slice(0, 4));

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[1]);
}
