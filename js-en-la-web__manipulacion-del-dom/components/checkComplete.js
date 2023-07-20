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

export default checkComplete;