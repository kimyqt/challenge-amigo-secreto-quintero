// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value.trim()

  if (amigo === "") {
    alert('Por favor, ingresa un nombre')
    return
  }

  // Verifica si el nombre ya existe en el array
  if (amigos.includes(amigo)) {
    alert('Este nombre ya ha sido agregado ⚠️')
    return
  }

  amigos.push(amigo)
  actualizarLista()
  document.getElementById("amigo").value = ""
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos")
  lista.innerHTML = ""

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li")
    li.textContent = amigos[i]
    lista.appendChild(li)
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear")
    return
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length)
  let amigoSorteado = amigos[indiceAleatorio]

  document.getElementById("resultado").innerHTML =
    `El amigo sorteado es: <strong>${amigoSorteado}</strong>`
}

