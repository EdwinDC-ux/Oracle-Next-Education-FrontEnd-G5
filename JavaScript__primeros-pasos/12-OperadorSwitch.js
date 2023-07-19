const ciudadDestino = 'Bogotá';
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Brasilia","Buenos Aires", "Montevideo", "Caracas");

let valorPasaje = 0;


//Condición con IF
/*
if (ciudadDestino == 'Bogotá') {
    valorPasaje = 500;
} else if (ciudadDestino == 'Lima') {
    valorPasaje = 400;
} else if (ciudadDestino == 'Santiago') {
    valorPasaje = 380;
} else if (ciudadDestino == 'Montevideo') {
    valorPasaje = 200;
}
*/

switch(ciudadDestino) {
    case 'Bogotá':
        valorPasaje = 500;
        break;
    case 'Lima':
        valorPasaje = 400;
        break;
    case 'Santiago':
        valorPasaje = 380;
        break;
    case 'Montevideo':
        valorPasaje = 200;
        break;
    default:
        console.log('No hay pasajes para la ciudad indicada');
        break;

}

if (valorPasaje > 0) {
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}