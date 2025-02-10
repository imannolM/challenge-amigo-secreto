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
}

function limpiarCampo() {
    document.querySelector('#amigo').value= '';
}