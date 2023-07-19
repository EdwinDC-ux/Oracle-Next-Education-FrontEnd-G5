const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago","Montevideo");
const preciosCiudades = new Array(500,400,380,200);
const presupuestoDisponible = 390;

let i = 0;
while (preciosCiudades[i] >= presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (condition) {
    console.log('No hay ciudades disponibles');
} else {
console.log(`Puedes comprar pasaje para: ${ciudadesDisponibles[i]}`);
}