var input=document.getElementById("input1");
var addbutton=document.getElementById("add-button");
var lists=document.getElementById("lists");

input.addEventListener("keypress",function(){
	addbutton.style.display="block";
});

function createItem(itemvalue){
	 var listItem=document.createElement('li');
	 var leftpart=document.createElement('div');
	 var checkBox = document.createElement("input");
	 var label = document.createElement("label");
	 var deleteButton = document.createElement("button");
	 deleteButton.classList.add("delete-btn");
	 listItem.classList.add("lists");

	 checkBox.type = "checkBox";
	 label.innerText=itemvalue;
	 deleteButton.innerText="Delete";

	 leftpart.appendChild(checkBox);
	 leftpart.appendChild(label);
	 listItem.appendChild(leftpart);
	 listItem.appendChild(deleteButton);
	 lists.appendChild(listItem);
}

addbutton.addEventListener("click",function(){	
	let v=input.value;
	createItem(v);
	input.value="";
	addbutton.style.display="none";
	let items=document.querySelectorAll("#lists li");
	let count=document.querySelector("#task-left span");
	count.innerText=items.length;

});