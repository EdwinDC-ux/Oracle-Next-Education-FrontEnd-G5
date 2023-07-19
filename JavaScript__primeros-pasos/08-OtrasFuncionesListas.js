const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Brasilia","Buenos Aires", "Montevideo", "Caracas");

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;
const cantidadPaises = paisesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
c0nsole.log(`En la lista de paises tenemos ${cantidadPaises} elementos`);

//Remover el primer elemento de la lista
ciudadesDisponibles.shift();
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Remover el último elemento de la lista
ciudadesDisponibles.pop();
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter(e => e == 'Brasil');
console.log(paisesFiltrados);

//Unificar los elementos de una lista de caracteres
console.log(paisesDisponibles.join(' - '));

//Ordenar las listas.
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles); 

//Conociendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

//Unificar 2 listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log('Lista de paises y ciudades:');
console.log(listaPaisesYCiudades);
console.log('lista de paises:');
console.log(paisesDisponibles);