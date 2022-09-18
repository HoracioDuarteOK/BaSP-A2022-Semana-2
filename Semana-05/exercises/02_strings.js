console.log('02_strings');

/* Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('-Exercise 2.a');
var thisIsaVar = 'ten letter here';
console.log('thisIsaVar:' , thisIsaVar.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando
 el resultado en una nueva variable (utilizar substring). */

 console.log('-Exercise 2.b');
var text = 'My name is Poul';
var first5 = text.substring(0,5);
console.log('first5: ' , first5 );

/* Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando 
el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.c');
var text2 = 'Hello World';
var end3 = text2.substring(8)
console.log('end3: ' , end3)

/* Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las 
demás en minúscula. Guardar el resultado en una nueva variable
 (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.d');
var text3 = 'hello World';
var firstLetter = text3.substring(0,1).toUpperCase() + text3.substring(1).toLowerCase();
console.log('firstLetter: ' , firstLetter);

/* Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio 
en blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.e');
var text4 = 'Hello World';
var findSpace = text4.indexOf(' ');
console.log('findSpace: ' , findSpace);

/* Crear una variable de tipo string con al menos 2 palabras
 largas (10 caracteres y algún espacio entre medio). 
 Utilizar los métodos de los ejercicios anteriores para generar un 
 nuevo string que tenga la primera letra de ambas palabras en mayúscula 
 y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

 console.log('-Exercise 2.f');

 var largeWorld = 'congratulations background';
/*  var newString = largeWorld[0].toUpperCase() + largeWorld.indexOf().toUpperCase() + largeWorld.substring(1);
console.log('newString: ' + newString); */

 var newString = largeWorld.substring(0,1).toUpperCase() + largeWorld.substring(1,largeWorld.indexOf(" ")).toLowerCase() + ' ' 
         + largeWorld.substring(16,17 ).toUpperCase()  + largeWorld.substring(largeWorld.indexOf("ac"));  
 console.log ('newString : '  , newString);


 /* largeWorld.toLowerCase(largeWorld.indexOf(" ")) */