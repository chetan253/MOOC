var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var limit = document.getElementById("limit");
var txtlimit = document.getElementById("txtlimit");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var p1ScoreInt = 0;
var p2ScoreInt = 0;
var limitInt = 5;
p1Score.innerHTML = p1ScoreInt;
p2Score.innerHTML = p2ScoreInt;
limit.innerHTML = limitInt;
var gameover = false;
var winner = 0; 
function checkLimit(){
	if(p1ScoreInt === limitInt){
		gameover = true;
		p1Score.classList.toggle("winner");
		winner = 1;
	}
	if(p2ScoreInt === limitInt){
		gameover = true;
		p2Score.classList.toggle("winner");
		winner = 2;
	}
}

txtlimit.addEventListener("input", function(){
	limit.innerHTML = txtlimit.value;
	limitInt = parseInt(txtlimit.value);
});

player1.addEventListener("click", function(){
	if(!gameover){
		p1ScoreInt++;
		p1Score.innerHTML = p1ScoreInt;
		checkLimit();
	}
});

player2.addEventListener("click", function(){
	if(!gameover){
		p2ScoreInt++;
		p2Score.innerHTML = p2ScoreInt; 
		checkLimit();
	}
});

reset.addEventListener("click", function(){
	txtlimit.value = '';
	p1ScoreInt = 0;
	p2ScoreInt = 0;
	limitInt = 5;
	gameover = false;
	p1Score.innerHTML = p1ScoreInt;
	p2Score.innerHTML = p2ScoreInt;
	limit.innerHTML = limitInt;
	if(winner === 1){
		p1Score.classList.toggle("winner");
	}
	else if(winner === 2){
		p2Score.classList.toggle("winner");
	}
	winner = 0;
});
