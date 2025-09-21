// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]
function adicionaAmigo()
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


