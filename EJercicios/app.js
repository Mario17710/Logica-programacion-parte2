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
    return n1 > n2 ? n1 : n2;
}
let mayornumeros = mayor(14, 5);
console.log("El mayor de los 2 numeros es ", mayornumeros)

// Ejecicio 6: Crea una funcion que reciba un numero como parametro y devuelva el resultado de multiplicar ese numero por si mismo
function multiplicarse(operador) {
    return operador * operador
}
let resultados = multiplicarse(7)
console.log("La multiplicacion de si mismo es ", resultados)

/* Ejercicios de funciones mas complejas*/
// Ejercicio 1: crea una funcion que calcule el indice de masa corporal de una persona a partir de su altura en metros y peso en kilogramos que se recibiran como parametros.
function masacorporal(altura, peso) {
    let imc =  Math.floor(peso / (altura * altura))
    return imc
}
console.log(`la masa corporal es ${masacorporal(1.70 , 60)}`)

// Ejercicio 2: Crea una funcion que calcule el valor del factorial de un numero pasado como parametro
function factorial(num){
    if (num=== 0 || num === 1){
        return 1;
    }
        else{
            return num * factorial(num - 1)
        }
}
let num = 7;
let resultadofac = factorial(num)
console.log(`EL factorial de ${num} es ${resultadofac}`)

// Ejercicio 3: crea una funcion que convierta un valor en dolares pasado como parametro y devuelva el valor equivalente en soles
function conversion(dolares){
    if(dolares === 1){
        return 3.80;
    }
    else{
        return dolares * 3.80
    }
}
let dolares = 5;
let conver = conversion(dolares)
console.log(`la conversion de ${dolares} ${dolares ===1 ? 'dolar':'dolares'} es ${conver} soles`)

// Ejercicio 4: Crea una funcion que muestre en pantalla el area y el perimetro de una sala rectangular, utilizando la altura y la anchura que se proporcionaran como parametros
function areaperimetro(alturaa, anchura){
    let area = anchura * alturaa
    let perimetro =  (2 * alturaa) + (2 * anchura)
    console.log("area: " + area)
    console.log("perimetro: " + perimetro)
}
let alturaa = 3;
let anchura = 5;
areaperimetro(alturaa, anchura);

// Ejercicio 5: Crea una funcion que muestre en pantalla el area y perimetro de una sala circular utilizando su radio que se proporcionara como paramentro
function areaperimetrocirculo(radio){
    let areacirculo = 3.14 * (radio * radio)
    let perimetrocirculo = (2 * 3.14) * radio
    console.log(`El area del circulo es ${areacirculo}`);
    console.log(`El perimetro del circulo es ${perimetrocirculo} \n
    \n`);
}
let radio = 3;
areaperimetrocirculo(radio);

// Ejercicio 6: crea una funcion que muestre en pantalla la tabla de multiplicar de un numero dado como parametro
function tabla(numeromul){
    for(let i = 1; i <=10; i++){
        let mult = numeromul * i;
        console.log(`${numeromul} X ${i} = ${mult}`)
    } 
}
let numeromul = 5;
tabla(numeromul);