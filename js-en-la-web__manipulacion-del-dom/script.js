const botonSubmit = document.querySelector('[data-form-btn]');

botonSubmit.addEventListener('click', function () {
    const taskInput = document.querySelector('[data-form-input]');
    console.log(taskInput.value);
})