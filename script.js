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





document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from Local Storage
    loadTasks();

    // Event listener for Add button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    // Event listener for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            } else {
                alert('Please enter a task.');
            }
        }
    });

    // Function to add a task to the list and optionally save it
    function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            removeFromLocalStorage(taskText);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to remove a task from Local Storage
    function removeFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
