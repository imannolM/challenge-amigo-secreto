//variables
let amigos = [];


//funciones
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombreAmigo);
    }
    console.log(amigos);
    limpiarCampo();
    actualizarListaAmigos();
}

function limpiarCampo() {
    document.querySelector('#amigo').value= '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[index];
        listaAmigos.appendChild(nuevoElemento); 
    }
    console.log(listaAmigos)
}