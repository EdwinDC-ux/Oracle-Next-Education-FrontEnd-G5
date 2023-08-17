import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement('tr')
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
    <ul class="table__button-control">
        <li>
        <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
        >
        </li>
        <li>
        <button
            class="simple-button simple-button--delete"
            type="button"
        >
            Eliminar
        </button>
        </li>
    </ul>
    </td>`;

    linea.innerHTML = contenido;

    const eliminarBtn = linea.querySelector('button');

    eliminarBtn.addEventListener('click', () => {
        clientServices.eliminarCliente(id)
        .then( respuesta => {
            console.log(respuesta);
        }).catch( err => alert('Ocurrió un error'));
    });

    return linea;
}

const table = document.querySelector('[data-table]');

clientServices.listaClientes().then((data) => {
    data.forEach(({ nombre, email, id }) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert('Ocurrión un error'));