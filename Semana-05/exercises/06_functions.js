console.log('06_functions');

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
 de dicha variable en la consola del navegador. */

 console.log('-Exercise 6.a');

 function suma(number1,number2) {
    var result = (number1+number2);
    return result; 
 }
 console.log('5 + 5 = ' + suma(5,5) );


/* A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando 
que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('-Exercise 6.b');

function suma(number1,_number2) {
    if ( (number1 === Number.isNaN) || (Number.isNaN)) {
        alert('one of the parameters has an error');
    }
    }
console.log('5 + h = ' + suma(5,h));


/* Aparte, crear una función validate Integer que reciba un número como parámetro 
y devuelva verdadero si es un número entero. */

console.log('-Exercise 6.c');
function ValidatNumber(number3) {
if (Number.isInteger(number3)) {
    return 'true';
  }
  }
  console.log('ValidatNumber = ' + ValidatNumber(3));

/* A la función suma del ejercicio 6b) agregarle una llamada a la función del 
ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales 
mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

console.log('-Exercise 6.d');



/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro
 de la función suma probando que todo siga funcionando igual. */
 
 console.log('-Exercise 6.e');