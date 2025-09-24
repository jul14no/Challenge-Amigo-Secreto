//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value.trim();

  if (amigo === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }
  if (amigos.includes(amigo)) {
    alert("Este amigo já foi adicionado.");
    return;
  }

  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para o sorteio!");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indiceSorteado];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior
  resultado.innerHTML = `<li class="result-item">${nomeSorteado} foi o nome sorteado!</li>`;
}
