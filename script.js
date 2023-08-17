function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    if (getRandom(1, 3) === 1) {
        return "rock";
    } else if (getRandom(1, 3) === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const div = document.querySelector('div.main');
    while(div.firstChild){
    div.removeChild(div.lastChild);
    }
    const divResult = document.createElement('div');
    div.classList.add('roundResult');
    const pRoundResult = document.createElement('p');
    const pCompSelection = document.createElement('p');
    pCompSelection.textContent = `Computer chose: ${computerSelection}.`;
    let num = 0;
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        pRoundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        num = 1;
    } else if (playerSelection == computerSelection) {
        pRoundResult.textContent = "It is a tie";
        num = 2;
    } else {
        pRoundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        num = 3;
    }
    divResult.appendChild(pCompSelection);
    divResult.appendChild(pRoundResult);
    div.appendChild(divResult);
    return num;
}

// function game() {
//     let countPlayer = 0;
//     let countComputer = 0; resultDiv.textContent = Result;
//     const buttons = document.querySelectorAll('button');
//     result = buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             playRound(button.value, getComputerChoice());
//         });
//     });
//     console.log(result);
//     const div = document.querySelector('div.main');
//     const resultDiv = document.querySelector('div.roundResult');
//     for (let i = 0; (i < 5); i++) {
//         let inp = buttons.value;
//         let playerSelection = inp.toLowerCase();
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         if (result === `You lose! ${computerSelection} beats ${playerSelection}`) {
//             ++countComputer;
//             resultDiv.textContent = result;
//         } else if (result == `You win! ${playerSelection} beats ${computerSelection}`) {
//             ++countPlayer;
//             resultDiv.textContent = result;
//         } else {
//             resultDiv.textContent = result;
//         }
//     }
//     div.appendChild(resultDiv);
//     if (countPlayer > countComputer) {
//         console.log("You win");
//     } else if (countComputer > countPlayer) {
//         console.log("Computer wins");
//     } else {
//         console.log("It is a tie");
//     }
// }
function game() {
    const div = document.querySelector('div.main');
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
    }));
}
game();