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

function getHumanChoice() {
    let response;
    while (response !== 'ROCK' && response !== 'PAPER' && response !== 'SCISSORS') {
        response = window.prompt("Choose: Rock, Paper or Scissors");
        if (response !== null) {
            response = response.toUpperCase();
        } else {
            alert("Por favor, elige una opción válida.");
        }
    }
    return response;
}

let computerScore = 0;
let humanScore = 0;

function playRound(h, c) {
    if (h == 'ROCK' && c == 'PAPER') {
        computerScore += 1
        console.log("You lose! Paper beats rock")
    } else if (h == 'ROCK' && c == 'ROCK') {
        console.log("Tie! Rock = Rock")
    } else if (h == 'ROCK' && c == 'SCISSORS') {
        humanScore += 1
        console.log("You win! Rock beats scissors")
    } else if (h == 'SCISSORS' && c == 'PAPER') {
        humanScore += 1
        console.log("You win! Scissors beat paper")
    } else if (h == 'SCISSORS' && c == 'SCISSORS') {
        console.log('Tie! Scissors = Scissors') 
    } else if (h == 'SCISSORS' && c == 'ROCK') {
        computerScore +=1
        console.log("You lose! Rock beats scissors")
    } else if (h == 'PAPER' && c == 'ROCK') {
        humanScore += 1
        console.log("You win! Paper beats rock")
    } else if (h == 'PAPER' && c == 'PAPER') {
        console.log("Tie! Paper = Paper")
    } else if (h == 'PAPER' && c == 'SCISSORS') {
        computerScore += 1
        console.log("You lose! Scissors beat paper")
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (computerScore > humanScore) {
        console.log("Computer Wins " + computerScore + " to " + humanScore)
    } else if (computerScore < humanScore) {
        console.log("Human Wins " + humanScore + " to " + computerScore)
    } else {
        console.log("Tie")
    }
}

playGame();