const inputTask = document.querySelector('.inputTask');
const taskContainer = document.querySelector('.taskContainer');
const addButton = document.getElementById('addButton');
const taskCounter = document.getElementById('taskCounter');

let numberOfTask=0;

let counter=0;

let checkList;

let closeList;

addButton.addEventListener('click',addTask);


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
}


function clearTask(event) {


    let target = event.target;

    let targetTask = document.getElementById(target.value);

    targetTask.classList.add('inactive');
    targetTask.classList.remove('task');

    numberOfTask--;

    numberOfTask===1?taskCounter.innerText=`You have 1 task`:numberOfTask?taskCounter.innerText=`You have ${numberOfTask} tasks`:taskCounter.innerText=`You don´t have tasks`;

}

const clearAllButton = document.getElementById('clearAllButton');

clearAllButton.addEventListener('click',clearAll);

function clearAll() {
    
    taskContainer.innerHTML="";

    numberOfTask=0;

    taskCounter.innerText=`You don´t have tasks`;

}

const clearDoneButton = document.getElementById('clearDoneButton');

clearDoneButton.addEventListener('click',clearDone);

function clearDone() {


    let doneList = document.querySelectorAll('.checkOn');

    console.log(doneList)

    doneList.forEach(targetTask=>{

        targetTask.classList.add('inactive');
        targetTask.classList.remove('task');
        targetTask.classList.remove('checkOn');

    })

    numberOfTask-=doneList.length;

    numberOfTask===1?taskCounter.innerText=`You have 1 task`:numberOfTask?taskCounter.innerText=`You have ${numberOfTask} tasks`:taskCounter.innerText=`You don´t have tasks`;

}


