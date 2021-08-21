function generateComputerChoice() {
  const options = ["rock", "paper", "scissor"]; //Liste med mulgheter
  return options[Math.floor(Math.random() * options.length)]; //Gir en tilfeldig utvalgt fra lista "options".
  //Math.floor konverteterer et tall ned til nærmeste hele. F.eks. 2.719 til 2.
}

let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
  computerSelection = generateComputerChoice();

  const didComputerWin =
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock");

  console.log("Computer chose: " + computerSelection);
  console.log("You chose: " + playerSelection);

  if (computerSelection === playerSelection) {
    return `Tie game! Score: ${playerScore} to ${computerScore}`;
  } else if (didComputerWin) {
    computerScore++;
    return `You lose! Score: ${playerScore} to ${computerScore}`;
  } else {
    playerScore++;
    return `You win! Score: ${playerScore} to ${computerScore}`;
  }
}

function game() {
  for (let n = 0; n < 5; n++) {
    let playerSelection = prompt("Type: Rock, Paper og Scissors");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = generateComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log(
      `You win the game! Final score: ${playerScore} to ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lose the game! Final score: ${playerScore} to ${computerScore}`
    );
  } else {
    console.log(
      `Tie game muttafukka! Final score: ${playerScore} to ${computerScore}`
    );
  }
}

game();
