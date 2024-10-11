document.addeventlistener("DOMContentLoaded", (event) => {
    
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

}

document.createElement("classList.add", "appendChild")

addButton.addEventListener(onclick,addTask())

taskInput.addEventListener('keypress', addTask(event)
if event.key = 'Enter'
));

});
