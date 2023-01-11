/*

EJERCICIO 1

    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
    let vowels = "aeiouAEIOU";               // Declaramos una variable con las vocales que queremos quitar.
    let resultado = "";                      // Declaramos una variable vacia que será nuestra cadena de string.
    for(let i = 0; i < str.length; i++){     // Recorremos el Array que introducimos en la función.
        if(vowels.includes(str[i])){           // Si la variable que está definido que contiene las vocales no contiene  
                                             //el elemento del string de la función que estamos recorriendo.
        }else{resultado += str[i]; }         // Entonces se suma y asigna a resultado el caracter que estamos
    }                                        //recorriendo, creando así nuestra cadena de caracteres.  
                                             //
    return resultado;                        // Pedimos que nos devuelva el resultado de ese String.
}

console.log(noVowels(sentence));             // Llamamos a la función con nuestra variable como argumento.

/*


EJERCICIO 2

   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "palabrota";
                                                             // Declaramos una variable a la que asignamos como valor el numero total
function middleCharacter(str){                               //de caracteres de la variable del argumento de la función dividido por 2
    let middleIndex = str.length / 2;                        //para encontrar el caracter del medio.
    if(str.length % 2 == 0){                                 // Si el cociente del número de caracteres entre 2 es igual a 0 es par.
        return str.slice(middleIndex - 1, middleIndex + 1);  // Si es par regresa la selección del caracter anterior y el posterior al caracter de en medio.
    } else{                                                  // Si es impar regresa el caracter de en medio.
        return str.charAt(middleIndex);
    }
}

console.log(middleCharacter(word));                          // Llamamos a la función con nuestra variable como argumento.

/*


EJERCICIO 3

    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let note = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    return str.slice(1, -1);                   // Devuelve la selección del string que introducimos en la función quitando desde el primer caracter y quita hasta 
}                                              //desde el primer caracter y quita hasta la posición del último caracter en orden inverso(hacia atrás).

console.log(deleteFirsLast(note));             // Llamamos a la función con nuestra variable como argumento.

/*

EJERCICIO 4

    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){                       // Declaramos una variable con valor 0 que será la suma de los elementos del
    let suma = 0;                             //Array más adelante.
    for(let i = 0; i < list.length; i++){     // Recorremos los elementos del Array.
      suma += list[i];                        // Sumamos y asignamos a la variable que hemos creado para el sumatorio cada
    }                                         //uno de los elementos del Array.
    return suma;                              // Regresa la variable del sumatorio de los elementos del Array.
}

console.log(sumList(numberList));             // Llamamos a la función con nuestro Array como argumento.

/*

EJERCICIO 5

    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
  let winner = list[0];                   // Declaramos una variable con un valor que es igual al primer objeto de nuestro Array. 
  for(let i = 0; i < list.length; i++){   // Recorremos el Array de objetos.
    if(list[i].score > winner.score){     // Si el valor de la propiedad score del elemento que se esté recorriendo es mayor que
        winner = list[i];                 //el valor de la propiedad score de la variable, asignará a esta como valor el objeto
    }                                     //que se está recorriendo reescribiendo asi el objeto con el valor más alto en la  
  }                                       //propiedad score.
  return winner.name;                     // Devuelve la propiedad nombre del objeto winner
}


console.log(winner(playerList));          // Llamamos a la función con nuestro Array de Objetos como argumento.

/*

EJERCICIO 6

¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}

*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
  let nOvejas = 0;                          // Declaramos la variable que contará el número de ovejas y le asignamos un valor 0.
  let nVacas = 0;                           // Declaramos la variable que contará el número de vacas y le asignamos un valor 0.
  let listSuma = list1.concat(list2);       // Declaramos la variable que concatenará los dos argumentos Array que introduzcamos.
                                           
  for(let i = 0; i < listSuma.length; i++){ // Recorremos el Array listSuma que aglutina todos los elementos de los dos Arrays.
    
    if(listSuma[i] === "o"){                // Si el elemento del Array que se está recorriendo es estrictamente igual a 'o' 
      nOvejas++;                            // entonces incrementa en uno la variable nOvejas que cuenta las ovejas.
    } else{                                 // Si no incrementa en uno la variable nVacas que cuenta las vacas.
      nVacas++;
    }
  }
  let objetoRebaño ={nOvejas, nVacas};      // Declara la variable objeto a la que se le asigna como propiedades las variables 
                                            //de conteo que se han usado para contar ovejas y vacas respectivamente.
  return objetoRebaño;                      // Devuelve las variable objeto que contiene el valor asignado 
}                                           //por el número de vacas y ovejas que se han ido contando al 
                                            //recorrer el Array.
console.log(counter(rebano1,rebano2));      // Llamamos a la función con nuestras variables Array como argumentos.


