export const validarInput = (direccion) => {
    const length = direccion.length;

    return length > 3 ? true : false;
}