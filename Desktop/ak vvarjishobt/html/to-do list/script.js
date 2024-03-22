document.getElementById('todo-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        list.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = '';
});