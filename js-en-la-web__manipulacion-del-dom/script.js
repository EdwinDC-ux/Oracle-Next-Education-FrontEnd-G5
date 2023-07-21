
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

function createTask(evento) {
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

	task.appendChild(deleteIcon());

	list.appendChild(task);
}

const botonSubmit = document.querySelector('[data-form-btn]');

botonSubmit.addEventListener('click', createTask);