var todolist = document.querySelector('#myUL');
var inputtoadd = document.querySelector('#input');
var addbutton = document.querySelector(".add");

var todothings = [
	{
		id : 0,
		desc : "go to market",
		ischecked : 'none'
	},
	{
		id : 1,
		desc : "Pay electricity bills",
		ischecked : 'none'
	},
	{
		id : 2,
		desc : "to send the mail",
		ischecked : 'none'
	},
	{
		id : 3,
		desc :"to make a call to mr.patil",
		ischecked : 'none'
	},
	{
		id : 4,
		desc :"to organise the cupboard",
		ischecked : 'none'
	},
];


//to repaint the html
let repainthtml = () =>{
	let templist = '';
	todothings.forEach(todoitem => {
		templist +=  `<div class "$(todoitem.ischecked)">
			<li>${todoitem.desc}</li>
			<button onclick = "completed(${todoitem.id})">complete</button>
			<button onclick = "removetheitem(${todoitem.id})">remove</button>
		</div>`;
	})
	todolist.innerHTML = templist;
}
repainthtml();

//add button
addbutton.addEventListener('click', () => {
	if(inputtoadd.value ===''){
		alert("You must write something!");
	}
	else{
		todothings.push({
		id : todothings.length + 1,
		desc : inputtoadd.value
	});
	inputtoadd.value = '';
	}
	
	repainthtml();
})

//remove function
let removetheitem = (id) => {
	todothings = todothings.filter(todoitem => id !== todoitem.id);
	repainthtml();
}
//complete button
let completed = (id) => {
	todothings.forEach(todothings =>{
		if(id === todothings.id){
			todothings.ischecked = 'checked';
		}
	})
	repainthtml();
}
