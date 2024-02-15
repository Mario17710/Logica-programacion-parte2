// variable global
let numeroaleatorio = generarnumeroaleatorio();
// creamos la funcion donde creamos las variables
function asignarTextoElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
}
// llamamos a la funcion y modificamos el comportamiento de los elementos
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Ingrese un numero del 1 al 10');

function intentoDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroaleatorio)
    console.log(typeof(numeroaleatorio));
    console.log(numeroDeUsuario)
    console.log(numeroaleatorio === numeroDeUsuario);
    return;
}

function generarnumeroaleatorio(){
    return Math.floor(Math.random()*10) +1;
}