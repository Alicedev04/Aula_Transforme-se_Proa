const h1 = document.getElementById("texto1");

// Estilos atráves do atributo style
h1.style.color = "Red";
h1.style.border = "2px solid green";
h1.style.backgroundColor = "yellow";

// Estilos atráves de classes (classList - add, remove, toggle)
const h12 = document.getElementById("texto2");

// Adiciona uma nova classe
h12.classList.add("red");

//
const h13 = document.getElementById("texto3");

h13.setAttribute(
  "style",
  "color: red; border: 2px solid green; background-color: yellow;",
);

// Criando elementos
// Elemento div criado pelo JS
const div = document.createElement("div");

// Texto de dentro do elemento div
div.innerHTML = "Div criada pelo JS";

// Estilos do elemento div
div.style.backgroundColor = "red";
div.style.width = "200px";
div.style.height = "200px";
div.style.color = "white";

document.body.appendChild(div);
