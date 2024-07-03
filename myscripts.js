function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(h, c) {
    const rResult = document.querySelector("#rR");
    let resultText = '';

    if (h === 'ROCK' && c === 'PAPER') {
        computerScore += 1;
        resultText = "You lose! Paper beats rock";
    } else if (h === 'ROCK' && c === 'ROCK') {
        resultText = "Tie! Rock = Rock";
    } else if (h === 'ROCK' && c === 'SCISSORS') {
        humanScore += 1;
        resultText = "You win! Rock beats scissors";
    } else if (h === 'SCISSORS' && c === 'PAPER') {
        humanScore += 1;
        resultText = "You win! Scissors beat paper";
    } else if (h === 'SCISSORS' && c === 'SCISSORS') {
        resultText = 'Tie! Scissors = Scissors';
    } else if (h === 'SCISSORS' && c === 'ROCK') {
        computerScore += 1;
        resultText = "You lose! Rock beats scissors";
    } else if (h === 'PAPER' && c === 'ROCK') {
        humanScore += 1;
        resultText = "You win! Paper beats rock";
    } else if (h === 'PAPER' && c === 'PAPER') {
        resultText = "Tie! Paper = Paper";
    } else if (h === 'PAPER' && c === 'SCISSORS') {
        computerScore += 1;
        resultText = "You lose! Scissors beat paper";
    }

    rResult.innerText = "Round result: " + resultText;
    const cScore = document.querySelector("#cS");
    cScore.innerText = "Computer Score: " + computerScore;
    const pScore = document.querySelector("#pS");
    pScore.innerText = "Player Score: " + humanScore;

    if (humanScore == 5) {
        window.alert("You win!")
        location.reload();
    }
    else if (computerScore == 5) {
        window.alert("Computer wins!")
        location.reload();
    }
}

const scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click", function () {
    playRound("SCISSORS", getComputerChoice());
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function () {
    playRound("PAPER", getComputerChoice());
});

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function () {
    playRound("ROCK", getComputerChoice());
});