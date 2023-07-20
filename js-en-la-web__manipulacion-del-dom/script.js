const createTask = (evento) => {
    evento.preventDefault();
    const formTaskInput = document.querySelector('[data-form-input]');
    const taskTitle = formTaskInput.value;
	const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
	task.classList.add('card');
    formTaskInput.value = "";

    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());

	const elementTaskTitle = document.createElement('span');
	elementTaskTitle.classList.add('task');
	elementTaskTitle.innerText = taskTitle;
	taskContent.appendChild(elementTaskTitle);
	
	task.appendChild(taskContent);

	const trashIcon = document.createElement('i');
	trashIcon.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
	task.appendChild(trashIcon);

    list.appendChild(task);
};

const botonSubmit = document.querySelector('[data-form-btn]');

botonSubmit.addEventListener('click', createTask);

const checkComplete = () => {
	const checkIcon = document.createElement('i');
	checkIcon.classList.add('far', 'fa-check-square', 'icon');
	checkIcon.addEventListener('click', completeTask);

	return checkIcon;
};

const completeTask = (event) => {
	const element = event.target;
	element.classList.toggle('fas');
	element.classList.toggle('completeIcon');
	element.classList.toggle('far');
};