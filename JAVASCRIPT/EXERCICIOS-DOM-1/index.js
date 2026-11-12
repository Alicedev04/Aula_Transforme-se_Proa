// 1. Mensagem de Boas-Vindas
function atv1() {
  const titulo = document.createElement("h1");

  titulo.setAttribute("id", "titulo");
  titulo.textContent = "Olá, Visitante!";
  document.body.appendChild(titulo);
}

atv1();

// 2. O Parágrafo Estilizado

function atv2() {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Aviso importante!";
  paragrafo.style.backgroundColor = "Red";
  paragrafo.style.fontSize = "24px";
  document.body.appendChild(paragrafo);
}

atv2();

function atv3() {
  const imagem = document.createElement("img");
  imagem.setAttribute(
    "src",
    "https://escolaeducacao.com.br/wp-content/uploads/2023/11/Maine-Coon.png",
  );
  imagem.setAttribute("alt", "Foto dinâmica");
  document.body.appendChild(imagem);
}

atv3();

// 4. O Botão Temático

function atv4() {
  const div = document.createElement("div");
  div.textContent = "Modo Escuro Ativado";
  div.style.backgroundColor = "#000";
  div.style.color = "#fff";
  document.body.appendChild(div);
}

atv4();

// 5. Gerando uma Lista com Laço de Repetição

function atv5() {
  let compras = ["Maça", "Banana", "Uva"];
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  for (let i = 0; i < compras.length; i++) {
    const li = document.createElement("li");
    li.textContent = compras[i];
    ul.appendChild(li);
  }
}

atv5();

// 6. Criando um Cartão de Produto

function atv6() {
  let produto = { nome: "tenis", preco: 200 };
  const div = document.createElement("div");
  div.setAttribute("id", "vitrine");
  div.innerHTML = `<h2>${produto.nome}</h2><p>preço: R$ ${produto.preco.toFixed(2)}</p>`;
  document.body.appendChild(div);
}
atv6();

// 7. Criar e Destruir

const atividade7 = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "propaganda");

  div.textContent = "Compre agora!";
  document.body.appendChild(div);

  // Simulando fechamento do anúncio

  const removerDiv = document.getElementById("propaganda");
  removerDiv.remove();
};

// 8. Censurando Senhas
const atividade8 = () => {
  for (let i = 0; i < 3; i++) {
    const paragrafo = document.createElement("p");
    paragrafo.setAttribute("class", "segredo");
    paragrafo.textContent = "Senha123";
    document.body.appendChild(paragrafo);
  }

  const paragrafos = document.querySelectorAll(".segredo");

  paragrafos.forEach((elemento) => {
    elemento.textContent = "*****";
  });
};

// 9. O Fura-Fila VIP
const atividade9 = () => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "fila");
  document.body.appendChild(ul);

  const li1 = document.createElement("li");
  li1.setAttribute("id", "cliente1");
  li1.textContent = "João";

  const li2 = document.createElement("li");
  li2.setAttribute("id", "cliente2");
  li2.textContent = "Maria";

  ul.appendChild(li1);
  ul.appendChild(li2);

  // Cliente VIP

  const vip = document.createElement("li");
  vip.textContent = "Cliente VIP";

  ul.insertBefore(vip, li2);
};

// 10. Atualizando o Status do Pedido
const atividade10 = () => {
  const div = document.createElement("div");

  div.setAttribute("id", "painel");
  document.body.appendChild(div);

  // Nova div

  const novaDiv = document.createElement("div");
  novaDiv.setAttribute("id", "statusAntigo");
  novaDiv.textContent = "Pedido pendente...";

  div.appendChild(novaDiv);

  // Nova div2

  const novaDiv2 = document.createElement("div");
  novaDiv2.setAttribute("id", "statusNovo");
  novaDiv2.setAttribute("class", "sucesso");
  novaDiv2.textContent = "Pedido Entregue!";

  // Replace Child

  div.replaceChild(novaDiv2, novaDiv);
};
