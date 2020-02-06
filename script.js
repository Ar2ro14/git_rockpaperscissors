//declarations
let rounds = 0;
let won = 0;
let lost = 0;
let drawn = 0; 

//play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection){
		console.log("You selected "+playerSelection+"! The computer selected " + computerSelection +"! It's a draw!")
		drawn++;
	} else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
		console.log("You selected "+playerSelection+"! The computer selected " + computerSelection + "! You lost! Computer won.");
		lost++;
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){	
		console.log("You selected "+playerSelection+"! The computer selected " + computerSelection + "! You won!");
		won++;	
	}
}

//randomizes computer choice
function computerPlay(){
	let n = Math.floor(Math.random()*3);
	if (n === 1){
		return "rock";
	} else if (n === 2){
		return "paper";
	} else{
		return "scissors";
	}
}
//plays 5 rounds and displays scoreboard
function game(){
	while(rounds<5){
		const playerEntry = prompt("Type rock paper or scissors");
		const playerSelection = playerEntry.toLowerCase();
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
		console.log("Scoreboard: Won: " + won + " Lost: " + lost + " Drawn: " + drawn );
		
		rounds++;
	}

}

//begin the game
let wantPlay = prompt("Want to play rock paper sicissors? Y/N");
let play = wantPlay.toLowerCase();

if (play == "y"){
	game();
}else if (play == "n"){
	console.log("GO AWAY THEN!");
}
