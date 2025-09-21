// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]
function agregarAmigo()
{
let amigo = document.getElementById("amigo").value;
    if (amigo !== "")
    {
        amigos.push(amigo);
        actualizarLista();
        document.getElementById("amigo").value ="";
    }
    else
    {
        alert ('por favor inserte un nombre');
    }
}

function actualizarLista()
{
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() 
{
    if (amigos.length === 0)
    {
        alert("No hay amigos para sortear");    
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = 
    `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

