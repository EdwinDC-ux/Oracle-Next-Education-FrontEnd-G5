const ciudadDestino = 'Bogotá';
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Brasilia","Buenos Aires", "Montevideo", "Caracas");

const edadPasajero = 19;
const estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar.');
    }
} else {
    if (ciudadDestino == 'Lima' && edadPasajero >= 16) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Los menores de edad deben viajar acompañados');
    }
}