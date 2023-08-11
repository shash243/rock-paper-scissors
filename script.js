function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice(){
    if (getRandom(1,3) === 1){
        return "rock";
    } else if (getRandom(1,3) === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == computerSelection){
        return "It is a tie";
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

function game(){
    let countPlayer = 0;
    let countComputer = 0;
    for (let i = 0; (i < 5) ; i++){
        let inp = prompt("Rock, Paper or Scissors: ");
        let playerSelection = inp.toLowerCase();
        let  computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if ( result === `You lose! ${computerSelection} beats ${playerSelection}`){
            ++countComputer;
            console.log(result);
        } else if (result == `You win! ${playerSelection} beats ${computerSelection}`){
            ++countPlayer;
            console.log(result);
        } else {
            console.log(result);
        }
    }
    if (countPlayer > countComputer){
        console.log("You win");
    } else if (countComputer > countPlayer){
        console.log("Computer wins");
    } else {
        console.log("It is a tie");
    }
} 

game();