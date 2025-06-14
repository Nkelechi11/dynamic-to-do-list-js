// // ✅ Run the code after the DOM has fully loaded
// document.addEventListener('DOMContentLoaded', function () {
//     // Select the necessary elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // ✅ Function to add a new task
//     function addTask() {
//         const taskText = taskInput.value.trim();

//         if (taskText === '') {
//             alert('Please enter a task.');
//             return;
//         }

//         const listItem = document.createElement('li');
//         listItem.textContent = taskText;

//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.className = 'remove-btn';

//         // When the remove button is clicked, remove the task
//         removeButton.onclick = function () {
//             taskList.removeChild(listItem);
//         };

//         listItem.appendChild(removeButton);
//         taskList.appendChild(listItem);

//         taskInput.value = ''; // Clear the input
//     }

//     // ✅ Attach event listener to the Add Task button
//     addButton.addEventListener('click', addTask);

//     // ✅ Add support for pressing "Enter" to add task
//     taskInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });

//     // ✅ Optionally call addTask on page load if needed (empty input at first)
//     addTask(); // This doesn't add a task but fulfills your instruction
// });





// Run script after HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append text and button to list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add click event to add button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Call addTask on DOM load (will do nothing unless input is prefilled)
    // addTask(); // Only needed if you want to auto-add something on load
});