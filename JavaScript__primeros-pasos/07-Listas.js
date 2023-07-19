/**  Listas 
 *  Las listas son conjuntos "lineales" de datos en la cual cada elemento de la lista tiene asignada una posición.
*/

//Lista de tipos de datos alfanumericos
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");



//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];

//Agrega elementos al final de una lista.
paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Montevideo');

//Agrega elementos al inicio de una lista.
paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Mostrando el primer elemento de la lista
console.log(ciudadesDisponibles[0]);
console.log(paisesDisponibles[0]);

//Este método permite quitar elementos de cualquier posici+on de la lista, e insertar nuevos elementos a partir de la posición dada en el primer parámetro.
paisesDisponibles.splice(1,2,'Venezuela','Paraguay');