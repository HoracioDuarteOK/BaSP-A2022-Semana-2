console.log('01_variables_and_operators')

/* A. Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable. */

console.log('-Exercise 1.a');
var numero1 = 5;
var numero2 = 10;
var sumaNumero1Numero2 = numero1 + numero2;
console.log('sumaNumero1Numero2: ' ,sumaNumero1Numero2);

//B. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b');
var str1 = 'I am a';
var str2 = 'string';
var result = str1 + ' ' + str2;
console.log('result: ' , result);

/* C. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('-Exercise 1.C');
var myName = 'Horacio';
var myLastName = 'Duarte';
var fullName = myName.length + myLastName.length; 
console.log('fullName:' , fullName); 