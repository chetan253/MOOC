console.log("Connected");
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		console.log(todos);
	}
	else if(input === "new"){
		var new_todo = prompt("Enter new todo:");
		todos.push(new_todo);
	}
	input = prompt("What would you like to do?");
}
console.log("App quit")