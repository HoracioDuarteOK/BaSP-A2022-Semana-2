console.log('03_arrays');

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 
 5 y 11 (utilizar console.log).*/

console.log('-Exercise 3.a');
var mounths = ['January','February','March','April', 'May', 'June' , 'July' , ' August' 
, 'September' , 'Octuber' ,'November', ' December']; 
console.log('5 & 11: ' , mounths[4] + ' ' + mounths[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('-Exercise 3.b');
console.log('mounths sort: ' ,mounths.sort())
/* console.log( mounths.sort()); */


/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('-Exercise 3.c');
mounths.push('end');
mounths.unshift('start');
console.log('mounths: ' , mounths);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('-Exercise 3.d');
mounths.pop();
mounths.shift();
console.log('mounths: ' , mounths);

/* Invertir el orden del array (utilizar reverse). */

mounths.reverse();
console.log('mounths reverse: ' ,mounths);
mounths.reverse();

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

console.log(' mounths: ' , mounths.join('-'));


/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */

console.log('mounths: ' ,mounths.slice(4,11));
