//Obter elemento HTML pelo ID
// getElementById("id do elemento") retorna um elemento HTML

const elemento = document.getElementById("texto1");

// console.log(elemento);

// Obter elementos pela classe (mais de um elemento)
// getEelementsByClassName("nome da classe") retorna uma coleção de elementos (HTMLCollection)

const textos = document.getElementsByClassName("texts");

// console.log(textos);

// Obter elementos pelo nome da tag
// getElementsByTagName("nome da tag") retorna uma coleção de elementos (HTMLCollection)

const paragrafos = document.getElementsByTagName("p");

// console.log(paragrafos);

// Obter elementos com alta precisão (mais moderno)
// querySelector("seletor CSS") retorna o primeiro elemento que corresponde ao seletor CSS

const seletor = document.querySelector(".texts");

// console.log(seletor);

// Obter varios elementos com querySelector

const elementosQuery = document.querySelectorAll(".texts");

// console.log(elementosQuery);

// acessando elementos filhos
// children retorna uma coleção de elementos filhos (HTMLCollection)
// childNodes retorna uma coleção de todos os nós filhos (NodeList), incluindo elementos, texto e comentários

const div1 = document.querySelector(".div1");

console.log(div1.children);
console.log(div1.childNodes);

// InnerHTML - Permite com que você modifique o HTML
//  de um elemento, incluindo tags HTML

// div1.innerHTML = "<p>Elemento criado </p>";
// div1.innerHTML += "<p>Outro elemento criado</p>";

const paragrafo1 = document.getElementById("paragrafo");

// textContent - Permite com que você modifique o texto de um elemento, sem incluir tags HTML
paragrafo1.textContent = "Mudando o texto";

// Definindo atributos de elementos HTML

const elementoH2 = document.getElementsByTagName("h2");

elementoH2[0].setAttribute("class", "elementoNovo");
elementoH2[0].setAttribute("id", "ElementoH2");
elementoH2[0].removeAttribute("id");

console.log(elementoH2[0]);

// Obtendo valores dos atributos

console.log(div1.getAttribute("class"));
