const validadores = {
    nacimiento: (input) => validarNacimiento(input)
};

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "El campo fecha de nacimiento no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad"
    },
    telefono: {
        valueMissing: "El campo de telefono no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX (10 números)"
    },
    direccion: {
        valueMissing: "El campo de dirección no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 y 40 caracteres"
    },
    ciudad: {
        valueMissing: "El campo de ciudad no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 y 40 caracteres"
    },
    estado: {
        valueMissing: "El campo de estado no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 y 40 caracteres"
    }
};

export function valida(input) {
    const tipoInput = input.dataset.tipo;
    console.log(tipoInput, validadores[tipoInput])
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeError(tipoInput, input);
    }
}

function mostrarMensajeError(tipoInput, input) {
    let mensaje = "";
    tipoErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            console.log(mensajesError[tipoInput][error]);
            mensaje = mensajesError[tipoInput][error];
        }
    });

    return mensaje;
}

function validarNacimiento(input) {
    const fecha = new Date(input.value);
    let mensaje = '';

    if(!mayorDeEdad(fecha) && input.value != "") {
        mensaje = 'Debes tener al menos 18 años de edad';
    }

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    return diferenciaFechas <= fechaActual;
}