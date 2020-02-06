//declarations
let rounds = 0;
let won = 0;
let lost = 0;
let drawn = 0; 

//begin the game
game();

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
//player selection
function playerPLay(){
	const playerEntry = prompt("Type rock paper or scissors");
	const playerEntry2 = playerEntry.toLowerCase();
	return playerEntry2;
}

//plays 5 rounds and displays scoreboard
function game(){
	while(rounds<5){
		const playerSelection = playerPLay();
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
		console.log("Scoreboard: Won: " + won + " Lost: " + lost + " Drawn: " + drawn );
		rounds++;
	}

}


