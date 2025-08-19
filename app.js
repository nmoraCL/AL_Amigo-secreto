// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombreAmigo);
  document.getElementById("amigo").value = "";
  listaAmigos();
}

function listaAmigos() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    } 
}

function sortearAmigo() {
    if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
}

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = amigoSorteado;
    resultado.appendChild(li);
}