const taskContainer = document.querySelector('.taskContainer');

let tasks = localStorage.getItem('tasks')

taskContainer.innerHTML=tasks

const inputTask = document.querySelector('.inputTask');
const addButton = document.getElementById('addButton');
const taskCounter = document.getElementById('taskCounter');

let numberOfTask=document.querySelectorAll('.task').length;
numberOfTask===1?taskCounter.innerText=`You have 1 task`:numberOfTask?taskCounter.innerText=`You have ${numberOfTask} tasks`:taskCounter.innerText=`You don´t have tasks`;

let counter;
numberOfTask?counter=document.querySelectorAll('.task')[numberOfTask-1].id:counter=0;


let checkList;

let closeList;

checkList = document.querySelectorAll('.check');

checkList.forEach(check=>check.addEventListener('click',markTask));

closeList = document.querySelectorAll('.closeButton');

closeList.forEach(close=>close.addEventListener('click',clearTask));

addButton.addEventListener('click',addTask);


function saveTasks() {
    localStorage.setItem('tasks',taskContainer.innerHTML)
}



function addTask() {

    if (inputTask.value) {

        counter++

        let task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('id',counter);
    
        task.innerHTML=`<li>${inputTask.value}</li>
                        <div>
                            <input class="check" value=${counter} type="checkbox">
                            <button class="closeButton" value=${counter}>X</button>
                        </div>`
    
        taskContainer.appendChild(task);
        inputTask.value='';

        numberOfTask++

        numberOfTask===1?taskCounter.innerText=`You have 1 task`:taskCounter.innerText=`You have ${numberOfTask} tasks`;

        checkList = document.querySelectorAll('.check');

        checkList.forEach(check=>check.addEventListener('click',markTask));

        closeList = document.querySelectorAll('.closeButton');

        closeList.forEach(close=>close.addEventListener('click',clearTask));

        saveTasks()

    }


}

document.addEventListener('keyup',addTaskEnter);

function addTaskEnter(event) {

    if (event.key==='Enter') {

        addTask();

    }

}




function markTask(event) {

    let target = event.target;

    let targetTask = document.getElementById(target.value);

    targetTask.classList.toggle('checkOn');

    saveTasks()

}


function clearTask(event) {


    let target = event.target;

    let targetTask = document.getElementById(target.value);

    targetTask.classList.add('inactive');
    targetTask.classList.remove('task');
    targetTask.classList.remove('checkOn');

    numberOfTask--;

    numberOfTask===1?taskCounter.innerText=`You have 1 task`:numberOfTask?taskCounter.innerText=`You have ${numberOfTask} tasks`:taskCounter.innerText=`You don´t have tasks`;

    saveTasks()

}

const clearAllButton = document.getElementById('clearAllButton');

clearAllButton.addEventListener('click',clearAll);

function clearAll() {
    
    taskContainer.innerHTML="";

    numberOfTask=0;

    taskCounter.innerText=`You don´t have tasks`;

    saveTasks()

}

const clearDoneButton = document.getElementById('clearDoneButton');

clearDoneButton.addEventListener('click',clearDone);

function clearDone() {


    let doneList = document.querySelectorAll('.checkOn');

    doneList.forEach(targetTask=>{

        targetTask.classList.add('inactive');
        targetTask.classList.remove('task');
        targetTask.classList.remove('checkOn');

    })

    numberOfTask-=doneList.length;

    numberOfTask===1?taskCounter.innerText=`You have 1 task`:numberOfTask?taskCounter.innerText=`You have ${numberOfTask} tasks`:taskCounter.innerText=`You don´t have tasks`;

    saveTasks()

}


