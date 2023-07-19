const botonSubmit = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const taskInput = document.querySelector('[data-form-input]');
    console.log(taskInput.value);
}

botonSubmit.addEventListener('click', createTask);