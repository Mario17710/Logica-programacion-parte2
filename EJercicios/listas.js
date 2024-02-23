/* EJERCICIOS DE LISTAS*/
// Ejercicio 1: Crea una lista vacia llamada lista generica
let listagenerica = [5,5,5]

// Ejercicio 2: crea una lista de lenguajes de programacion llamada lenguajesDeProgramacion con los siguientes elementos javascript, C, C++, Kotlin, Python
let lenguajesDeProgramacion = ['javascript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

// EJercicio 3: Agrega la lista lenguajesdeprogramacion los siguientes elementos java, ruby y goland
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')
console.log(lenguajesDeProgramacion);

// EJercicio 4: crea una funcion que muestre en la consola todos los elemetos de la lista lenguajesde programacion por separado
function mostrar() {
    for (i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i],);

    }
}
mostrar()

// Ejercicio 5: Crea una funcion que muestre en la consola todos los elementos de la lista lenguajesde programacion en orden inverso
function inverso() {
    let inver = lenguajesDeProgramacion.reverse();
    console.log(inver);
}
inverso()

// Ejercicio 6: Crea una funcion que calcule el promedio de los elementos de una lista con numeros
function promediolista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma = lista[i]
    }
    return suma / lista.length;
}
let numeross = [10 ,20, 30];
let media = promediolista(numeross);
console.log('Media:', media);

// Ejericio 7: Crea una funcion que muestre en la consola el numero mas grande y el numero mas pequeño en una lista
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

  // Ejercicio 8: Crea una función que retorne la suma de todos los elementos en una lista.
  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numerosss = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

  // Ejercicio 9: Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }