/**
 *  Parentesis se evaluan primero, luego && y después ||
 */
const ciudadDestino = 'Bogotá';
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Brasilia","Buenos Aires", "Montevideo", "Caracas");

let edadPasajero = 19;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = true;


/**
 * A && (B || C) && D && E
 */
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && (edadPasajero >= 18 || estaAcompanado) && tienePasaporte && !estaCasado) {
        console.log('Pasaje para solteros disponible para venta');
} else {
        console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas.');
}

