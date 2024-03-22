document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskContainer = document.getElementById('tasks-container');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;

        addTask(title, description);

        taskForm.reset();
    });

    function addTask(title, description) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        taskContainer.appendChild(taskDiv);

        const completeBtn = taskDiv.querySelector('.complete-btn');
        const deleteBtn = taskDiv.querySelector('.delete-btn');

        completeBtn.addEventListener('click', function() {
            taskDiv.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function() {
            taskDiv.remove();
        });
    }
});
