//Abrir http (metodo, url)
/**
 * CRUD     - Métodos HTTP
 * 
 * Create   - POST
 * Read     - GET
 * Update   - PUT/PATCH
 * Delete   - DELETE
 */

/*
const listaClientes = () => {
    /*
    const promise = new Promise( (resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", 'http://localhost:3000/perfil');
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response);
            } else {
                resolve(response);
            }
        };
    });

    return promise;
    */
    /*
    return fetch('http://localhost:3000/perfil').then(respuesta => {
        return respuesta.json();
    });
    */
    /*
    return fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());
};
*/
const listaClientes = () => fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch('http://localhost:3000/perfil',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email,id: uuid.v4()})
    });
}

export const clientServices = {
    listaClientes,
    crearCliente,
};