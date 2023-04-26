/*
=======EJERCICIO IF==============================
Programa que pida dos numero y que nos diga cual 
es el mayor, el menor y si  son iguales.
=================================================
INICIO
    INGRESO NUMERO 1
    INGRESO NUMERO 2

    EVALUAR SI SON IGUALES
    EVALUAR SI NUMERO 1 es Mayor que NUMERO 2
    EVALUAR SI NUMERO 2 es Mayor que NUMERO 1
    EVALUAR SI NO SON NUMEROS
FIN
*/

let num1 = parseInt(prompt('Ingrese El primer Numero: '));
let num2 = parseInt(prompt('Ingrese El segundo Numero: '));

if (num1 == num2) {
    console.log(`${num1} y ${num2} SON IGUALES`);
} else if (num1 > num2) {
    console.log(`${num1} es Mayor que ${num2}`);
} else if (num2 < num1) {
    console.log(`${num1} es Mayor que ${num2}`);
} else if(typeof(num1) != Number && typeof(num2) != Number )
console.log(`NO SON NUMEROS`);
    