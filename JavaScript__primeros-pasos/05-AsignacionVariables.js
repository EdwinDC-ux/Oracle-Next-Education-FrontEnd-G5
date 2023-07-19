/** Palabra "const" 
 * 
 * Espacio de memoria que después de ser asignado, no cambia su valor.
*/
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Edwin";
const apellidoPasajero = "Díaz";

console.log(nombrePasajero);
console.log(apellidoPasajero);

//bloque 1
{
    /**  Palabra "let" 
     * 
     *  Espacio de memoria que puede cambiar su valor durante la ejecución del
     *  programa.
     * 
     *  El alcance de let es unicamente en el bloque donde se encuentra declarado,
     *  incluyendo sub bloques
    */
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

    console.log("Variable con let: " + nombreCompletoPasajero);

    /** Palabra "var"
     * 
     *  Espacio de memoria que puede cambiar su valor durante la ejecución del
     *  programa.
     *  La diferencia con let es el alcance. El alcance de var es global, esto
     *  quiere decir, su alcance va a incluir, el bloque en el que se encuentra
     *  declarado, sub bloques y ademas los super bloques (bloques afuera del
     *  bloque donde se declaró).
     * 
     * var se encuentra en desuso.
    */
    var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

    console.log("Variable con var: " + nombreCompletoDelPasajero);
}

/*
console.log("Variable con let: " + nombreCompletoPasajero);
//Error "ReferenceError: nombreCompletoPasajero is not defined"
*/
console.log("Variable con var: " + nombreCompletoDelPasajero);
//bloque 2
{
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}