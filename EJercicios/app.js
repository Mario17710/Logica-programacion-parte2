// ejercicio 1: Crea una funcion que muestre hola mundo en la consola
function holamundo() {
    console.log("hola mundo");
}
holamundo();

// Ejecicio 2: Crear una funcion que reciba un nombre como parametro y muestre Hola[nombre] en la consola
function nombres(nombre) {
    console.log("hola", nombre)
}
nombres('marios');

// Ejercicio 3: Crear una funcion que reciba un numero como parametro y devuelva el doble de ese numero
function numero(numeros) {
    console.log("el doble es ", numeros)
}
numero(5 * 2)

// Ejercio 4: Crea una funcion que reciba tres numeros como parametro y devuelve su promedio
function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}
let resultado = promedio(5, 5, 5)
console.log(`el promedio es ${resultado}`)

// Ejercicio 5: crea una funcion que reciba 2 numeros como parametros y devuelva el mayor de ellos
function mayor(n1, n2) {
    // para evaluar el numero mayor de 2 numeros se requiere del operador ternario
    return n1>n2 ? n1 : n2;
}
let mayornumeros = mayor(14, 5);
console.log("El mayor de los 2 numeros es ",mayornumeros)

// Ejecicio 6: Crea una funcion que reciba un numero como parametro y devuelva el resultado de multiplicar ese numero por si mismo
function multiplicarse(operador){
    return operador * operador
}
let resultados = multiplicarse(7)
console.log("La multiplicacion de si mismo es ",resultados)