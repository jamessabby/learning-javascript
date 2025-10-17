let humanChoice = '';
let computerChoice = '';

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  computerChoice =  Math.ceil(Math.random() * 3);
  if (computerChoice === 1) {
    computerChoice = 'rock';
  } else if (computerChoice === 2) {
    computerChoice = 'paper';
  } else if (computerChoice === 3) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}



function getHumanChoice() {
  let userInput = prompt("Choose your move; [1]Rock, [2]Paper, [3]Scissors");
  if (userInput === '1') {  // NOTE: Prompt always takes a string
    humanChoice = 'rock';
    return humanChoice;
  } else if (userInput === '2') {
    humanChoice = 'paper';
    return humanChoice;
  } else if (userInput === '3') {
    humanChoice = 'scissors';
    return humanChoice;
  }
  return humanChoice;
}




function playRound(humanSelection, computerSelection) {
  if ((humanSelection === 'rock' && computerSelection === 'scissors') || (humanSelection === 'paper' && computerSelection === 'rock') || (humanSelection === 'scissors' && computerSelection === 'paper' )) {
    console.log(`You Win! ${humanSelection} beats ${computerSelection}.`);
    humanScore++;
  } else if ((humanSelection === 'rock' && computerSelection === 'paper') || (humanSelection === 'paper' && computerSelection === 'scissors') || (humanSelection === 'scissors' && computerSelection === 'rock' )) {
    console.log(`You Lose! ${computerSelection} beats ${humanSelection}.`);
    computerScore++;
  } else {
    console.log("It's a draw!");
  }

  
}


function startGame() {


  for (i=1; i <= 5; i++) {
    console.log(`Round ${i} of 5 \n`);

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Scores: \n Human: ${humanScore}   Computer: ${computerScore}`);

  }

  console.log("\n \n")
  console.log(`Final score: \n Human: ${humanScore}  Computer: ${computerScore}`)

  if (humanScore > computerScore) {
    console.log('Human wins!');
  } else if (computerScore > humanScore) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie game!");
  }
}

startGame();









