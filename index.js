"use strict";

const choices = ["ROCK", "PAPER", "SCISSORS"];

const computerPlay = (choices) =>
  choices[Math.floor(choices.length * Math.random())];

function getPlayerInput() {
  const playerInput = prompt("Choose: Rock, Paper or Scissors");
  if (!playerInput) {
    console.log("You have canceled the game!");
    return;
  }
  const playerSelection = playerInput.trim().toUpperCase();

  if (!choices.includes(playerSelection)) {
    console.log("Invalid choice! Please type: Rock, Paper or Scissors");
    getPlayerInput();
  }
  return playerSelection;
}

//Checks the user's and computer's choices and produces an object with corresponding results to the match
function checkWinner(playerSelection, computerSelection) {
  let result;

  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    result = {
      winner: null,
      loser: null,
      reason: `The Round Ended in a TIE! Your choice: ${playerSelection} is equal to Evil AI choice: ${computerSelection}`,
    };
    return result;
  }

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result = {
      winner: "Player",
      loser: "Computer",
      reason: `You WIN! Your choice: ${playerSelection} beats Evil AI choice: ${computerSelection}`,
    };
  } else {
    result = {
      winner: "Computer",
      loser: "Player",
      reason: `You LOST! Evil AI choice: ${computerSelection} beats Your choice: ${playerSelection}`,
    };
  }

  return result;
}

const computerSelection = computerPlay(choices);
const playerSelection = getPlayerInput();

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || !choices.includes(playerSelection)) {
    return;
  }
  const roundResult = checkWinner(playerSelection, computerSelection);

  console.log(roundResult.reason);
  return roundResult;
}

function game() {
  alert(
    "Welcome to Rock, Paper, Scissors!\nFirst to 5 valid rounds. Good luck!"
  );
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    const playerSelection = getPlayerSelection();
    const computerSelection = computerPlay();
    const round = playRound(playerSelection, computerSelection);

    alert(
      `Round ${
        roundsPlayed + 1
      }\nYou chose: ${playerSelection}\nComputer chose: ${computerSelection}\n${
        round.message
      }`
    );

    if (round.result === "Win") playerScore++;
    if (round.result === "Lose") computerScore++;
    if (round.result !== "Tie") roundsPlayed++;
  }

  let finalMsg = `Game Over!\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}\n`;
  if (playerScore > computerScore) {
    finalMsg += "Congratulations, you win the game!";
  } else if (computerScore > playerScore) {
    finalMsg += "You lose! The AI takes over the world. 😈";
  } else {
    finalMsg += "It's a tie! The battle continues...";
  }
  alert(finalMsg);
}
