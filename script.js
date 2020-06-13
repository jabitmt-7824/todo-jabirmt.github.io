var input=document.getElementById("input1");
var addbutton=document.getElementById("add-button");
var lists=document.getElementById("lists");
var count=document.querySelector("#task-left span");
var taskList = [];

// key press handler in task input 
input.addEventListener("keypress",function(){
	addbutton.style.display="block";
});

// delete task from list
function deleteTask (taskId) {
	console.log("enter into deleteTask");
    const updatedTaskList = taskList.filter(function(task){return task.id != taskId});
    taskList = updatedTaskList;
    renderList();
    counter();
 }

// create list item in list container
function createTaskItem (task) {
    const listItem = document.createElement('li');
    listItem.classList.add("lists");

    listItem.innerHTML = `<div> <input type="checkbox" id="${task.id}"} > <label for="${task.id}">${task.text}</label> </div> 
    <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>`;
    lists.appendChild(listItem);
 }

// render or display list items
function renderList (){
    lists.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
      createTaskItem(taskList[i]);
    }
}

// add task to list
function addTask(task){
	if (task) {
      taskList.push(task);
      renderList();
      return;
    }
}

// display number of tasks in list
function counter (){
	count.innerText=taskList.length;
}

// add button event handler
addbutton.addEventListener("click",function(){	
	let text=input.value;
	const task = {text, id: Date.now().toString()};
	addTask(task);
	input.value="";
	addbutton.style.display="none";
	counter();
});

