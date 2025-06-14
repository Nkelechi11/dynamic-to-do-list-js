// ✅ Run the code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the necessary elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // When the remove button is clicked, remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear the input
    }

    // ✅ Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // ✅ Add support for pressing "Enter" to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ Optionally call addTask on page load if needed (empty input at first)
    addTask(); // This doesn't add a task but fulfills your instruction
});

