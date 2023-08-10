const http = new XMLHttpRequest();

//Abrir http (metodo, url)
/**
 * CRUD     - Métodos HTTP
 * 
 * Create   - POST
 * Read     - GET
 * Update   - PUT/PATCH
 * Delete   - DELETE
 */
http.open("GET", 'http://localhost:3000/perfil');

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data);
};