// variable global
let numeroaleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// creamos la funcion donde creamos las variables
function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroaleatorio) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'Veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled') // elimina o activa el boton nuevo
    }
    else {
        if (numeroDeUsuario > numeroaleatorio) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
    }
    intentos++
    limpiarcaja();
    return;
}
// Funcion que limpia la caja
function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
}

// funcion que genera el numero aleatorio
function generarnumeroaleatorio() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // si ya se sorteo todos los numeros 
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }
    else {
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarnumeroaleatorio();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    // llamamos a la funcion y modificamos el comportamiento de los elementos
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroaleatorio = generarnumeroaleatorio();
    intentos = 1;
}

function reiniciarjuego() {
    // Limpiar la caja
    limpiarcaja();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
condicionesIniciales();