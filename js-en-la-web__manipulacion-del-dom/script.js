const createTask = (evento) => {
    evento.preventDefault();
    const formTaskInput = document.querySelector('[data-form-input]');
    const taskTitle = formTaskInput.value;
	const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
	task.classList.add('card');
    formTaskInput.value = "";

    //backticks
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());

	const elementTaskTitle = document.createElement('span');
	elementTaskTitle.classList.add('task');
	elementTaskTitle.innerText = taskTitle;
	taskContent.appendChild(elementTaskTitle);
	
	task.appendChild(taskContent);

	const trashIcon = document.createElement('i');
	trashIcon.classList.add('fas');
	trashIcon.classList.add('fa-trash-alt');
	trashIcon.classList.add('trashIcon');
	trashIcon.classList.add('icon');
	task.appendChild(trashIcon);

    list.appendChild(task);
}

const botonSubmit = document.querySelector('[data-form-btn]');

botonSubmit.addEventListener('click', createTask);

const checkComplete = () => {
	const checkIcon = document.createElement('i');
	checkIcon.classList.add('far');
	checkIcon.classList.add('fa-check-square');
	checkIcon.classList.add('icon');

	return checkIcon
}