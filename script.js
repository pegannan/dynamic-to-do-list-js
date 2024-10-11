document.addEventListener("DOMContentLoaded", (event) => {

    function loadTasks() {
        localStorage.getItem('tasks') 
    }

    
    const addButton = document.getElementById('add-task-btn')

    const taskInput = document.getElementById('task-input')

    const taskList = document.getElementById('task-list')


function addTask(){
    var taskTest = taskInput.value.trim();
    if  (taskTest === "") { alert('user:enter a task');}
    else if (taskTest !== ""){
        taskList = <li>taskText</li>; <button class="remove-btn" onclick=" ">Remove</button>
    taskInput.value = ''
    }

    //Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    JSON.stringify()
}

if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

document.createElement("classList.add", "appendChild")

addButton.addEventListener(onclick,addTask())

taskInput.addEventListener('keypress', addTask(event)
if event.key = 'Enter'
);

});
