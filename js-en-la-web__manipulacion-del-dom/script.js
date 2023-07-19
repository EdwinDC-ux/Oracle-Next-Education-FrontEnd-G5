const createTask = (evento) => {
    evento.preventDefault();
    const formTaskInput = document.querySelector('[data-form-input]');
    const taskTitle = formTaskInput.value;
	const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
	task.classList.add('card');
    formTaskInput.value = "";

    //backticks
    const taskContent = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${taskTitle}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = taskContent;
    list.appendChild(task);
}

const botonSubmit = document.querySelector('[data-form-btn]');

botonSubmit.addEventListener('click', createTask);