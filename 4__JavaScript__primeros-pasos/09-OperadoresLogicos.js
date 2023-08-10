//Operadores de comparación

const ciudadDestino = 'Bogotá';
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Brasilia","Buenos Aires", "Montevideo", "Caracas");

/**  Palabra reservada 'if' 
 *  Evalua una condición y se ejecuta el código interno sólo si la evaluación es
 *  "Verdadera".
*/
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('Vendo el pasaje');
} else {
    console.log('Ciudad no disponible para viajar.');
}

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');
}

/**  Operadores Lógicos 
 * 
 *  Y (AND) - O (OR) - NO (NOT)
 *  AND = && Se deben cumplir todas las condiciones
 *  OR = || Con una de las condiciones que se cumplan es suficiente
 * NOT = ! Niega una condición ( la condición no se tiene que cumplir)
 */
const edadPasajero = 19;
const estaAcompanado = true

console.log(`Verificando pasajes para ${ciudadDestino}`);
//AND
/*if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && edadPasajero >= 18) {
    console.log('Vendo el pasaje');
} else {
    console.log('Ciudad no disponible para viajar.');
}*/

//OR
/*if (edadPasajero >= 18 || estaAcompanado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log('Vendo el pasaje');
    } else {
        console.log('Ciudad no disponible para viajar.');
    }
} else {
    console.log('Los menores de edad deben viajar acompañados');
}*/

//NOT
if (edadPasajero >= 18 || estaAcompanado) {
    if (!ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log('Ciudad no disponible para viajar.');
    } else {
        console.log('Vendo el pasaje');
    }
} else {
    console.log('Los menores de edad deben viajar acompañados');
}