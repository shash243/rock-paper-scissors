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
    while (div.firstChild) {
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

function game() {
    const div = document.querySelector('div.main');
    const buttons = document.querySelectorAll('button');
    const divRes = document.querySelector('div.score');
    const divFinal = document.querySelector('div.final');
    console.log(divRes);
    let cCount = 0;
    let pCount = 0;
    let num = 0;
    buttons.forEach((button) => button.addEventListener('click', () => {
        if (cCount < 5 && pCount < 5) {
            num = playRound(button.value, getComputerChoice());
            if (num === 1) {
                ++cCount;
                console.log(cCount);
                console.log(pCount);
            } else if (num === 3) {
                ++pCount;
                console.log(cCount);
                console.log(pCount);
            } else {

            }
            while (divRes.firstChild) {
                divRes.removeChild(divRes.lastChild);
            }
            let pRes = document.createElement('p');
            pRes.textContent = `You: ${pCount} Computer: ${cCount}`;
            divRes.appendChild(pRes);
        } else {
            let pFin = document.createElement('p');
            if(cCount === 5){
            pFin.textContent = "You lose";
        } else if (pCount === 5){
            pFin.textContent = "You win";
        } else {
            pFin.textContent = "It is a tie";
        }
            divFinal.appendChild(pFin);
        }
    }));
}
game();