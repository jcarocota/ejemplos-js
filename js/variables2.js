let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

let operacion = parseInt(prompt("¿Qué operación deseas hacer?\nIngresa 1 para una suma\nIngresa 2 para una resta\nIngresa 3 para una multiplicación\nIngresa 4 para una división\nIngresa 5 para un bucle for"));
let numero1;
let numero2;
let inicio;
let fin;

if (operacion > 0 && operacion < 5) {
    numero1 = parseInt(prompt("Ingresa el primer número: "));
    numero2 = parseInt(prompt("Ingresa el segundo número: "));
} else if (operacion == 5) {
    inicio = parseInt(prompt("Ingresa el límite inferior del bucle: "));
    fin = parseInt(prompt("Ingresa el límite superior del bucle: "));
}

let resultado;

switch (operacion) {
    case 1:
        console.log(`¡Hola, ${nombre} ${apellido}!, has elegido una suma.`);
        resultado = numero1 + numero2;
        if (resultado > 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la suma es ${resultado} y es un número positivo.`);
        } else if (resultado < 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la suma es ${resultado} y es un número negativo.`);
        } else {
            console.log(`Has introducido ${numero1} y ${numero2},y el resultado de la suma es ${resultado}.`);
        }
        break;
    case 2:
        console.log(`¡Hola, ${nombre} ${apellido}!, has elegido una resta.`);
        resultado = numero1 - numero2;
        if (resultado > 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la resta es ${resultado} y es un número positivo.`);
        } else if (resultado < 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la resta es ${resultado} y es un número negativo.`);
        } else {
            console.log(`Has introducido ${numero1} y ${numero2},y el resultado de la resta es ${resultado}.`);
        }
        break;
    case 3:
        console.log(`¡Hola, ${nombre} ${apellido}!, has elegido una multiplicación.`);
        resultado = numero1 * numero2;
        if (resultado > 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la multiplicación es ${resultado} y es un número positivo.`);
        } else if (resultado < 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la multiplicación es ${resultado} y es un número negativo.`);
        } else {
            console.log(`Has introducido ${numero1} y ${numero2},y el resultado de la multiplicación es ${resultado}.`);
        }
        break;
    case 4:
        console.log(`¡Hola, ${nombre} ${apellido}!, has elegido una divisíón.`);
        resultado = numero1 / numero2;
        if (numero2 == 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la división es ${resultado}, puesto que no existe la division entre 0.`);
            break;
        }
        if (resultado > 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la división es ${resultado} y es un número positivo.`);
        } else if (resultado < 0) {
            console.log(`Has introducido ${numero1} y ${numero2}, el resultado de la división es ${resultado} y es un número negativo.`);
        } else {
            console.log(`Has introducido ${numero1} y ${numero2},y el resultado de la división es ${resultado}.`);
        }
        break;
    case 5:
        console.log(`¡Hola, ${nombre} ${apellido}!, has elegido un ciclo for.`);
        let j = 1;
        if(inicio < fin) {
            for (i = inicio; i <= fin; i++) {
                console.log("El numero " + j + " del ciclo es " + i);
                j++;
            }
        }else{
            console.log("El segundo número tiene que ser mayor al primero y no se puede implementar el ciclo for.");
        }
        break;
    default: console.log("Esa opción no es válida");
}