//Tipos de datos
// Alfanumerico
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramón Silva";

//Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Lógicos (true, false)
let boletoActivo = true;

//Operaciones aritméticas
//Suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;

//Orden de precedencia
//()
// * y /
// + y -
let totalBoleto = (valorBoleto + impuestoAeropuerto) * (1 + porcentajeTasaEmbarque) + gestionAgencia;
console.log(totalBoleto);

//Concatenacion de textos
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz"

let nombreCompleto = nombrePasajero + ' ' + apellidoPasajero;
let pasaporte = '1000' + '12';
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);