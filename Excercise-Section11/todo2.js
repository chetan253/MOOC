console.log("Connected");
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		console.log("*********");
		todos.forEach(function(item, count){
			console.log(count+": "+item);
		});
		console.log("*********");
	}
	else if(input === "new"){
		var new_todo = prompt("Enter new todo:");
		todos.push(new_todo);
	}
	else if(input === "delete"){
		var index = prompt("Index of element to delete");
		todos.splice(index,1);
		console.log("Deleted todo item");
	}
	input = prompt("What would you like to do?");
}
console.log("App quit")