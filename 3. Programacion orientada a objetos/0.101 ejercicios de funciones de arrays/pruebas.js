"use strict"

// ARRAYS BÁSICOS
const arrayNum = [3, 4, 6, 8, -2, -5];
let arrayStr = ['casa', 'Pelota', '', 'NaraNja', 'aGuAcAtE'];

// 1. ¿Cuál es la diferencia entre declarar un array con const o con let? 
// Para entenderlo, haz las siguientes pruebas:

// 1.1. Intenta modificar un elemento de arrayNum asignándole otro valor, 
// por ejemplo arrayNum[3] :

/*
arrayNum[3] = 5;
alert (arrayNum);
*/

// 1.2. Intenta modificar un elemento de arrayStr asignándole otro valor, 
// por ejemplo arrayStr[2] :

/*
arrayStr[2] = 'pan';
alert (arrayStr);
*/

//1.3. Intenta asignar otro array diferente a arrayNum: 

/*
arrayNum = [2, 4];
alert (arrayNum)

da error por que es const y no puedes cambiar entero el array
*/

//1.4. Intenta asignar otro array diferente a arrayStr:

/*
arrayStr = ['melocoton', 'pera'];
alert (arrayStr);

si te deja cambiar entero el array
*/



// 2. Utiliza el bucle for para recorrer cada uno de los arrays, 
// como se muestra a continuación. ¿Qué ocurre?

/*
for (let i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i]);
}

for (let i = 0; i < arrayStr.length; i++) {
    console.log(arrayStr[i]);
*/



// 3. Utiliza el bucle for of para recorrer cada uno de los arrays, 
// como se muestra a continuación. ¿Qué ocurre?

/*
for (let item of arrayNum) {
    console.log(item);
}

for (let item of arrayStr) {
    console.log(item);
}
*/



// 4. En base al ejercicio 2 y 3, ¿cuánto usaras un for normal y cuando
// un for of para recorrer arrays?



// 5. Para los arrays no se utiliza el bucle for in. 
// Busca en los apuntes y explica por qué no.



// 6. ¿Qué hace el método push y qué devuelve? Pon un ejemplo que ilustre 
// lo que hace y lo que devuelve. 



// 7. Añade un nuevo elemento (un número) a arrayNum usando push.

/*
arrayNum.push(69);
alert(arrayNum);
*/



// 8. Añade un nuevo elemento (un string) a arrayStr usando push.

/*
arrayStr.push('petardo');
alert(arrayStr);
*/



// 9. ¿Qué hace el método unshift y qué devuelve?
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
añade un elemento al principio del array
*/



// 10. Añade un nuevo elemento (un número) a arrayNum usando unshift.

/*
arrayNum.unshift(96);
alert(arrayNum);
*/



// 11. Añade un nuevo elemento (un string) a arrayStr usando unshift.

/*
arrayStr('cacatua');
alert(arrayStr);
*/



// 12. ¿Qué hace el método pop y qué devuelve? 
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
Extrae el último elemento del array y lo devuelve
*/



// 13. Elimina un elemento de arrayNum usando pop.

/* 
alert(arrayNum.po { 
});
*/



// 14. Elimina un elemento de arrayStr usando pop.

/*
alert(arrayStr.pop());
*/



// 15. ¿Qué hace el método shift y qué devuelve? 
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
Extrae el primer elemento del array y lo devuelve
*/



// 16. Elimina un elemento de arrayNum usando shift.

/*
arrayNum.shift();
alert(arrayNum);
*/



// 17. Elimina un elemento de arrayStr usando shift.

/*
arrayStr.shift();
alert(arrayStr);
*/



// 18. Explica por qué en el siguiente código la 
// comparación de la línea 176 da false y la de la línea 179 da true.

/*
let array1 = [3, 4, 5];
let array2 = [3, 4, 5];
console.log(array1 === array2);

let array3 = array1;
console.log(array3 === array1);
*/



// 19. Intenta borrar un elemento de los arrays con delete, 
// como se muestra a continuación. Inspecciona los arrays y 
// explica qué ha ocurrido. Prueba también a hacer un for of 
// del resultado.

/*
delete(arrayNum[2]);

for (let item of arrayNum) {
    console.log(item);  
}

hace undefined la posición del array que introduces
*/



// 20. ¿Qué hace el método splice y qué devuelve? 
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
array.splice([0], [1], [2], [3], ...);

0. posición del array desde la que empezar a operar
1. número de elementos del array que quieras eliminar. (0 si lo que quieres es no eliminar ninguno)
2, 3, etc. elementos que quieras añadir al array a partir de la posición del array indicada.
*/



// 21. Elimina un elemento de arrayNum usando splice. 
// Prueba también a hacer un for of del resultado.

/*
arrayNum.splice(2, 1);
for (let item of arrayNum) {
    console.log(item);
}
*/



// 22. Elimina un elemento de arrayStr usando splice. 
// Prueba también a hacer un for of del resultado.

/*
arrayStr.splice(1, 1);
for (let item of arrayStr) {
    console.log(item);
}
*/



// 23. Elimina varios elementos consecutivos a la vez del 
// inicio de arrayNum con una llamada a splice.

/*
arrayNum.splice(0, 3);
*/



// 24. Elimina varios elementos consecutivos a la vez del 
// final de arrayStr con una llamada a splice.

/*
arrayStr.splice(-1, 2);
console.log(arrayStr);
*/



// 25. Sustituye un elemento intermedio de arrayStr usando splice.

/*
arrayStr.splice(1, 1, 'bebesita');
console.log(arrayStr);
*/



// 26. Sustituye varios elementos consecutivos del inicio de arrayNum 
// con una llamada a splice.

/*
arrayNum.splice(0, 3, 99, 98, 97);
console.log(arrayNum);
*/



// 27. Añade varios elementos consecutivos al final de arrayStr 
// con una llamada splice.

/*
arrayStr.splice(arrayStr.length, 0, 'dora', 'la', 'exploradora');
console.log(arrayStr);
*/



// 28. Añade un elemento en medio de arrayStr usando splice.

/*
arrayStr.splice(2, 0, 'EN MEDIO');
console.log(arrayStr);
*/



// 29. ¿Qué hace el método slice y qué devuelve? 
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
console.log( arrayNum.slice([0], [1]) );

0. posición de inicio
1. hasta la posición que debe recortar
*/



// 30. Utiliza slice para obtener un array con los 3 primeros 
// elementos de arrayNum.

/*
console.log(arrayNum.slice(0, 3));
*/



// 31. Utiliza slice para obtener un array con los 2 últimos elementos de arrayStr. 
// Házlo de 2 formas: usando índices positivos y usando índices negativos.

/*
console.log(arrayStr.slice(-2));
console.log(arrayStr.slice(arrayStr.length - 2, arrayStr.length));
*/



// 32. Implementa una función llamada mySlice a la que le pases un array y, 
// opcionalmente, los índices de inicio y final, y haga lo mismo que slice.
// Obviamente, dentro de mySlice no puedes usar slice. 
// Recuerda, indexInicio e indexFinal son opcionales, como en slice.

/*
function mySlice(arr, indexInicio, indexFinal) {

    let sliceArray = [];
    if(isNaN(indexInicio)) {
        indexInicio = 0;
    }

    if(isNaN(indexFinal)) {
        indexFinal = arr.length;
    }
    
    for (indexInicio; indexInicio < indexFinal; indexInicio++) {
        sliceArray.push(arr[indexInicio]);
    }
    return sliceArray;

}

console.log(mySlice(arrayNum, 1, 2));
*/



// 33. ¿Qué hace el método concat y qué devuelve? 
// Pon un ejemplo que ilustre lo que hace y lo que devuelve.

/*
let arr = [1, 2];
alert( arr.concat([3, 4]) ); // devuelve 1, 2, 3, 4
alert( arr.concat([3, 4], [5, 6]) ); //devuelve 1, 2, 3, 4, 5, 6
alert( arr.concat([3, 4], 5, 6) ); //devuelve 1, 2, 3, 4, 5, 6 (concatena
el arr con [3, 4] y le añade el 5 y el 6)

concatena arrays
*/



// 34. Utiliza concat para obtener un array resultado de la 
// concatenación de los elementos de arrayNum y arrayStr.

/*
console.log(arrayNum.concat(arrayStr));
*/



// 35 Y 36. Implementa una función myConcat a la que le pases 2 arrays y 
// haga lo mismo que concat.

/* ETE WORK STA VIEN DURACLE MAMAHUEVASO, TA IMPOSIBOL MA GI */



// 37. ¿Qué hace el método forEach? Pon un ejemplo que lo ilustre.

/*
arrayNum.forEach((item, index, array) => {
    alert(`${item} esta en el índice ${index} en el array ${array}`)
});

recorre el array y ejecuta una función por cada elemento del array
*/



// 38. Utiliza forEach sobre arrayNum para crear un array cuyos 
// valores sean el doble de los de arrayNum.

/*
arrayNum.forEach((item, index, array) => {
    array[index] *= 2;
});

console.log(arrayNum);
*/



// 39. Haz el ejercicio 38 pero usando un bucle for of en vez del 
// método forEarch.

/*
let newArrayNum = [];
for (let num of arrayNum) {
    newArrayNum.push(num *= 2);
}

console.log(newArrayNum);
*/


// 40. Haz otra vez el ejercicio 38 pero usando un for normal 
// en vez del método forEach.

/*
let newArrayNum = [];
for (let index = 0; index < arrayNum.length; index++) {
    newArrayNum.push(arrayNum[index] *= 2);
}

console.log(newArrayNum);
*/



// 41. Utiliza forEach para modificar los valores de arrayStr 
// convirtiéndolos a mayúsculas. Necesitarás también el método 
// toUpperCase() de los objetos String.

/*
arrayStr.forEach((item, index, arrayStr) => {
    arrayStr[index] = item.toUpperCase();
});

console.log(arrayStr);
*/



// 42. Haz el ejercicio 41 pero usando un bucle for of en vez 
// del método forEarch.

/*
let newArrayStr = [];
for (let item of arrayStr) {
    newArrayStr.push(item.toUpperCase());
}

console.log(newArrayStr);
*/



// 43. Haz otra vez el ejercicio 41 pero usando un for normal en vez 
// del método forEach.

/*
for (let index = 0; index < arrayStr.length; index++) {
    arrayStr[index] = arrayStr[index].toUpperCase();
}

console.log(arrayStr);
*/



// 44. ¿Qué hacen los métodos includes e indexOf y cuáles son sus 
// diferencias? Pon un ejemplo que lo ilustre.

/*
arr.indexOf(item, from) 

busca item comenzando desde el index from, 
y devuelve el index donde fue encontrado, de otro modo devuelve -1.


arr.includes(item, from)

busca item comenzando desde el índice from, 
devuelve true en caso de ser encontrado.
*/



// 45. Utiliza includes para determinar si el elemento 8 
// está en arrayNum.

/*
console.log(arrayNum.includes(8, 0));

devuelve true
*/



// 46. Utiliza indexOf para determinar si el elemento 8 
// está en arrayNum.

/*
console.log(arrayNum.indexOf(8, 0));

devuelve 3 por que está en la posición 3
*/



// 47. Utiliza includes para determinar si el elemento ‘Patata’ 
// está en arrayStr.

/*
console.log(arrayStr.includes('Patata', 0));

devuelve false por que no esta;
*/



// 48. Utiliza indexOf para determinar el índice del elemento 
// ‘Pelota’ en arrayStr.

/*
console.log(arrayStr.indexOf('Pelota', 0));

devuelve -1 por que es lo que envia por defecto si no existe
*/



// 49. Implementa una función myIncludes a la que le pases un array 
// y otro parámetro y haga lo mismo que el método includes. 
// Usa for of.

/*
function myIncludes(arr, item) {
    for (let i of arr) {
        if (i == item) {
            return true;
        }
    }
    return false;
}

console.log(myIncludes(arrayNum, 9));
*/



// 50. Implementa una función myIndexOf a la que le pases un 
// array y otro parámetro y haga lo mismo que el método indexOf. 
// ¿Usarías for of o el for normal? Justifica la respuesta.

/*
function myIndexOf(arr, item) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == item) {
            return index;
        }
    }
    return -1;
}

console.log(myIndexOf(arrayStr, 'casa'));

depende de si necesito el indice o no
*/


// 51. ¿Qué hacen los métodos find e findIndex y cuáles son sus
// diferencias? Pon un ejemplo que lo ilustre.

/*
let result = arr.find(function(item, index, array) {
  // si true es devuelto aquí, find devuelve el ítem y la iteración se 
  // detiene para el caso en que sea false, devuelve undefined
});

let result = arr.findIndex(function(item, index, array) {
  // si true es devuelto aquí, find devuelve el index y la iteración se 
  // detiene para el caso en que sea false, devuelve -1
});

find devuelve el item y findIndex devuelve el indice
*/



// 52. Implementa una función que reciba un array de números como 
// parámetro y devuelva el primer elemento negativo de un array. 
// No puedes usar find ni findIndex.

/*
function sinFind(arr) {
    for (let num of arr) {
        if (num < 0) {
            return num;
        }
    }
    return undefined;
}

console.log(sinFind(arrayNum));
*/



// 53. Utiliza find para obtener el primer elemento negativo de arrayNum.

/*
console.log(arrayNum.find(item => item < 0));
*/



// 54. Implementa una función que reciba un array de palabras como 
// parámetro y una palabra, y devuelva el primer índice de la palabra 
// en el array o -1, si la palabra no se encuentra en el array. 
// No puedes usar find ni findIndex.

/*
function findIndex(arr, palabra) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == palabra) {
            return index;
        }
    }
    return -1;
}

console.log(findIndex(arrayStr, 'casa'));
*/



// 55. Utiliza findIndex para determinar el índice del elemento 
// ‘Pelota’ en arrayStr.

/*
console.log(arrayStr.indexOf('Pelota'));
*/



// 56. Utiliza find para obtener la primera palabra de 
// arrayStr que tiene más de 3 letras.

/*
console.log(arrayStr.find(item => item.length > 3));
*/



// 57. Implementa una función myFind a la que le pases un array 
// y una función como la que recibe find, y haga lo mismo que el 
// método find. 

/*
function myFind(arr, func) {
    for (let item of arr) {
        if (func(item)) {
            return item;
        }
    }
    return undefined;
}

console.log(myFind(arrayStr, item => item.length > 5));
*/



// 58. Implementa una función myFindIndex a la que le pases un 
// array y una función como la que recibe findIndex, 
// y haga lo mismo que el método findIndex.

/*
function myFindIndex(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return index; 
        }
    }
    return -1;
}

console.log(myFindIndex(arrayStr, item => item === "casa"));
*/



// 59. ¿Qué hace el método filter y cuál es el valor que devuelve? 
// Pon un ejemplo que lo ilustre.

// es como find pero en ved de devolver solo un valor devulve todos los
// que pasan por la funcion.



// 60. Utiliza filter para obtener los números negativos de arrNum.

/*
console.log(arrayNum.filter(item => item < 0));
*/



//ARRAYS DE OBJETOS

let usuarios = [
    { nombre: 'Juan', apellido: 'García', edad: 23, altura: 1.7 },
    { nombre: 'Andrés', apellido: 'Martínez', edad: 18, altura: 1.77 },
    { nombre: 'Carlos', apellido: 'Martínez', edad: 56, altura: 1.73 },
    { nombre: 'María', apellido: 'Ortega', edad: 23, altura: 1.79 },
    { nombre: 'Ana', apellido: 'Pérez', edad: 45, altura: 1.7 },
    { nombre: 'Alberto', apellido: 'García', edad: 46, altura: 1.75 },
    { nombre: 'Julia', apellido: 'Pérez', edad: 23, altura: 1.65 },
    { nombre: 'Maica', apellido: 'Pérez', edad: 52, altura: 1.63 },
    { nombre: 'Juan', apellido: 'García', edad: 61, altura: 1.85 },
    { nombre: 'Ana', apellido: 'Luján', edad: 60, altura: 1.9 },
    { nombre: 'Juan', apellido: 'Gutiérrez', edad: 34, altura: 1.75 },
]


// 87. Crea una función que reciba como parámetros un array de 
// usuarios y un nombre, y use forEach para devolver un array 
// con los usuarios cuyo nombre coincida con el especificado.

/*
function getUserByName(arr, nombre) {

    let NewArr = [];

      arr.forEach((item) => {
        if (item.nombre == nombre) {
            NewArr.push(item);
        }
      }); 

    return NewArr;
}

console.log(getUserByName(usuarios, 'Juan'));
*/



// 88. Haz el ejercicio 87 pero con un bucle for of en 
// vez del método forEach.

/*
function getUserByName(arr, nombre) {
    let NewArr = [];

    for (let item of arr) {
        if (item.nombre == nombre) {
            NewArr.push(item);
        }
    }

    return NewArr;
}

console.log(getUserByName(usuarios, 'Ana'));
*/



// 89. Implementa una función que reciba un array de usuarios, 
// un nombre y un apellido y devuelva true si el usuario existe en 
// el array y false si no.

/*
function includesUser(arr, nombre, apellido) {
    
    for(let item of arr) {
        if((item.nombre == nombre) && (item.apellido == apellido)){
            return true;
        }
    }

    return false;
}

console.log(includesUser(usuarios, 'Juan', 'García'));
*/



// 90. Implementa una función que reciba un array de usuarios y 
// se asegure que todos los nombres y los apellidos comienzan 
// con mayúsculas y el resto es con minúsculas. 
// Debe modificar el array para asegurar que los valores son correctos.

function normalizeNames(arr) {

}



// 91. Implementa una función que reciba un array de usuarios y 
// una edad, y devuelva los usuarios cuya edad es menor o igual 
// que la especificada. Debe usar el método filter.

/*
function filterLessThanAge(arr, edad) {

    return arr.filter(item => item.edad <= edad);
}

console.log(filterLessThanAge(usuarios, 40));
*/



// 92. Repite el ejercicio 91 usando for of en vez de filter.

/*
function filterLessThanAge(arr, edad) {
    for (let item of arr) {
        if (item.edad <= edad) {
            console.log(item);
        }
    }
}

filterLessThanAge(usuarios, 40);
*/



// 93. Implementa una función que reciba un array de usuarios, 
// una edad mímina y una máxima, y devuelva los usuarios cuya edad 
// está comprendida entre la mínima y la máxima, ambas incluidas. 
// Debe usar el método filter.

/*
function filterByAge(arr, edadMin, edadMax) {
    return arr.filter(item => (item.edad < edadMax) && (item.edad > edadMin));
}

console.log(filterByAge(usuarios, 59, 65));
*/



// 94. Implementa una función que reciba un array de usuarios y 
// utilice sort para ordenarlos de menor a mayor edad.

/*
function shortByAge(arr) {
    return arr.sort( (a, b) => a.edad - b.edad);
}

console.log(shortByAge(usuarios));
*/



// 95. Implementa una función que reciba un array de usuarios y 
// utilice sort para ordenarlos de mayor a menor altura.

/*
function shortByAge(arr) {
    return arr.sort( (a, b) => b.edad - a.edad);
}

console.log(shortByAge(usuarios));
*/



// 96. Implementa una función que reciba un array de usuarios y 
// devuelva un array con los nombres completos de cada usuario, 
// en el orden original en el que aparecen.

/*
function getFullNames(arr) {
    return arr.map(item => item.nombre + " " + item.apellido);
}

console.log(getFullNames(usuarios));
*/



// 97. Modifica la función de ejercicio anterior para que devuelva el 
// array de nombres completos ordenados alfabéticamente por apellido.

function getOrderedFullNames(arr) {
    let arrayNombreCompleto = arr.map(item => item.nombre + " " + item.apellido);
    return arrayNombreCompleto.slice(' ', arrayNombreCompleto.length);
}

console.log(getOrderedFullNames(usuarios));