/*console.log('El script está listo ...');*/


// Pregunta 2
// Primero pedimos los números al usuario
let num1 = prompt('Ingrese un número');
let num2 = prompt('Ingrese otro número');

// Después transformamos estos valores de String a Número
// Más adelantes, realizamos las operaciones
num1 = parseInt(num1);
num2 = parseInt(num2);

// Más adelantes, realizamos las operaciones
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let mod = num1 % num2;

// Finalmente, le retornamos la info al usuario
console.log('La suma total es: ' +  suma);
console.log('La resta total es: ' +  resta);
console.log('La multiplicación total es: ' +  multiplicacion);
console.log('El módulo es: ' +  mod);


/*
// Pregunta 3
// Primero pedimos el número de grados al usuario
let celsius = prompt('Ingrese los grados celsius');

// Después transformamos estos valores de String a Número
celsius = parseInt(celsius);
35
// Más adelantes, realizamos las operaciones
let kelvin = celsius + 273.15;
let fahrenheit = celsius * (9 / 5) + 32;

// Finalmente, le retornamos la info al usuario
console.log('En grados Kelvin serían: ' + kelvin);
console.log('En grados Fahrenheit serían: ' + fahrenheit);



// Pregunta 5
// Primero pedimos los 5 números al usuario
let num1 = prompt('Ingrese el número 1');
let num2 = prompt('Ingrese el número 2');
let num3 = prompt('Ingrese el número 3');
let num4 = prompt('Ingrese el número 4');
let num5 = prompt('Ingrese el número 5');

// Después transformamos estos valores de String a Número
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

// Más adelantes, realizamos las operaciones
let suma = num1 + num2 + num3 + num4 + num5;
let promedio = suma / 5;

// Finalmente, le retornamos la info al usuario
console.log('La suma total es: ' + suma);
console.log('El promedio es: ' + promedio);


// PREGUNTA 4
// Pedimos la cantidad de dias al usuario
let num_dias = prompt('Ingrese la cantidad de días');

// Transformamos los strings a números
num_dias = parseInt(num_dias);

// Realizamos las operaciones
let num_anios = Math.floor(num_dias / 365);965
let dias_restantes = num_dias % 365;

let num_semanas = Math.floor(dias_restantes / 7);

dias_restantes = dias_restantes % 7;

// Mostramos la respuesta al usuario
//let resp = 'Esa cantidad de días son: ' + num_anios + ' años, ' + num_semanas + ' semanas, y ' + dias_restantes + ' días.';

let resp = `Esa cantidad de días son: ${num_anios} años, ${num_semanas} semanas, y ${dias_restantes} días.`;
console.log(resp);*/