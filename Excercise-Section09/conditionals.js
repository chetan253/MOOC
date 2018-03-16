var age = prompt("What is your age?");
if(age < 0){
	console.log("Age cannot be negative");
}
else if (age == "21") {
	console.log("Happy 21st birthday");
}
else if (age % 2 != 0) {
	console.log("your age is odd");
}
if(Number.isInteger(Math.sqrt(age))){
	console.log("Perfect square");
}