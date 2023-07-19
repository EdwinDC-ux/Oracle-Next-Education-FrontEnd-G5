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
    console.log('Ciudad no disponible para viajar.')
}

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');
}