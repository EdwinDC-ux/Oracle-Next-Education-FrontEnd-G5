/**  Listas 
 *  Las listas son conjuntos "lineales" de datos en la cual cada elemento de la lista tiene asignada una posición.
*/

//Lista de tipos de datos alfanumericos
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");



//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];



{
    //Agrega elementos al final de una lista.
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    //Agrega elementos al inicio de una lista.
    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');
    
    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);
}
