import Task from "./task";
import Tasklist from "./tasklist";

const tasklist = new Tasklist();

export default function loadPage() {
    initializeEventListeners();

}

function initializeEventListeners() {
    const openAddTaskModalBtn = document.getElementById('openAddTaskModalBtn');
    initializeAddTaskModalBtns();

    openAddTaskModalBtn.addEventListener('click', openAddTaskModal);
}

function initializeAddTaskModalBtns() {
    const taskPriorityBtn = document.getElementById('taskPriorityBtn');
    const cancelAddTaskModalBtn = document.getElementById('cancelAddTaskModalBtn');
    const addTaskBtn = document.getElementById('addTaskBtn');

    taskPriorityBtn.addEventListener('click', togglePriority);
    cancelAddTaskModalBtn.addEventListener('click', cancelAddTaskModal);
    addTaskBtn.addEventListener('click', addTask);
}

function openAddTaskModal() {
    const modal = document.getElementById('addTaskModal');
    modal.style.display = 'block';
}

function togglePriority() {
    const btn = document.getElementById('taskPriorityBtn');
    const currrentPriority = btn.getAttribute('data-priority-important');
    if(currrentPriority == 'false') {
        btn.setAttribute('data-priority-important', 'true');
        btn.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else {
        btn.setAttribute('data-priority-important', 'false');
        btn.innerHTML = '<i class="fa-regular fa-star"></i>';
    }
}

function cancelAddTaskModal() {
    const modal = document.getElementById('addTaskModal');
    modal.style.display = 'none';
}

function addTask(){
    const taskName = document.getElementById('taskNameInput').value;
    const taskDescription = document.getElementById('descriptionInput').value;
    const taskDueDate = document.getElementById('dueDateInput').value;
    const taskPriority = document.getElementById('taskPriorityBtn').getAttribute('data-priority-important');

    const task = new Task();
    task.name = taskName;
    task.description = taskDescription;
    task.dueDate = taskDueDate;

    if(taskPriority == 'true') {
        task.priority = true;
    }

    tasklist.push(task);
    renderTasks();
}

function renderTasks(){
    const tasklistDisplay = document.getElementById('task-list-display');

    for(let task in tasklist){
        createTaskCard();
    }
}