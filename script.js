var input=document.getElementById("input1");
var addbutton=document.getElementById("add-button");
var lists=document.getElementById("lists");
var count=document.querySelector("#task-left span");
var taskList = [];

input.addEventListener("keypress",function(){
	addbutton.style.display="block";
});

function deleteTask (taskId) {
	console.log("enter into deleteTask");
    const updatedTaskList = taskList.filter(function(task){return task.id != taskId});
    taskList = updatedTaskList;
    renderList();
    counter();
 }

function createTaskItem (task) {
    const listItem = document.createElement('li');
    listItem.classList.add("lists");

    listItem.innerHTML = `<div> <input type="checkbox" id="${task.id}"} > <label for="${task.id}">${task.text}</label> </div> 
    <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>`;
    lists.appendChild(listItem);
 }

function renderList (){
    lists.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
      createTaskItem(taskList[i]);
    }
}

function addTask(task){
	if (task) {
      taskList.push(task);
      renderList();
      return;
    }
}

function counter (){
	count.innerText=taskList.length;
}

addbutton.addEventListener("click",function(){	
	let text=input.value;
	const task = {text, id: Date.now().toString()};
	addTask(task);
	input.value="";
	addbutton.style.display="none";
	counter();
});

