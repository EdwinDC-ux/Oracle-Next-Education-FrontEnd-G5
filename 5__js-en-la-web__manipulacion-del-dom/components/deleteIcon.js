const deleteIcon = () => {
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    trashIcon.addEventListener('click', deleteTask);

    return trashIcon;
};

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
};

export default deleteIcon;