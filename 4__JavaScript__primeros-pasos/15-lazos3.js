const datos = [
    {
        'ciudad': 'Bogotá',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'Montevideo',
        'precio': 200
    }
];

const presupuestoDisponible = 600;

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}
/*do {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
} while (i < datos.length && ciudadSeleccionada == '');*/
if (ciudadSeleccionada == '') {
    console.log('No hay ciudades disponibles');
} else {
console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}