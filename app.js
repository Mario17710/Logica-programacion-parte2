// creamos la funcion donde creamos las variables
function asignarTextoElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
}
// llamamos a la funcion y modificamos el comportamiento de los elementos
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Ingrese un numero del 1 al 10');

function intentoDeUsuario(){
    alert("click desde el boton")
}