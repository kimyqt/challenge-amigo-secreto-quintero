// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]
function adicionaAmigo()
{
let amigos = document.getElementById("amigo").value;
    if (amigos !== "")
    {
        nombre.push(amigos);
        actualizarLista();
        document.getElementById("amigo").value ="";
    }
    else
    {
        alert ('por favor inserte un nombre');
    }
}
