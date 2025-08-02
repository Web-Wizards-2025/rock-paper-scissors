"use strict";

const choices = ["ROCK", "PAPER", "SCISSORS"];

const computerPlay = (choices) =>
  choices[Math.floor(choices.length * Math.random())];

function getPlayerInput() {
  while (true) {
    const playerInput = prompt(
      "Choose your weapon:\nRock, Paper, or Scissors?"
    );

    if (playerInput === null) {
      console.log("You have canceled the game!");
      return null;
    }

    const playerSelection = playerInput.trim().toUpperCase();

    if (playerSelection === "") {
      console.log("No input provided.");
      continue;
    }

    if (!choices.includes(playerSelection)) {
      console.log("Invalid choice! Please enter: Rock, Paper, or Scissors");
      continue;
    }

    return playerSelection;
  }
}

//Checks the user's and computer's choices and produces an object with corresponding results to the match
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      message: `It's a TIE! Both chose ${playerSelection}`,
      result: "Tie",
    };
  }

  const winConditions = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
  };

  if (winConditions[playerSelection] === computerSelection) {
    return {
      message: `You won! You chose: ${playerSelection}, which beats ${computerSelection}`,
      result: "Win",
    };
  }

  return {
    message: `You lose! You chose ${computerSelection}, which loses against ${playerSelection}`,
    result: "Lose",
  };
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
  alert("Defeat the Evil AI in 5 rounds of Rock Paper Scissors!\n");

  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 1;

  while (playerScore < 3 && computerScore < 3 && roundCount <= 5) {
    console.log(`\n======= ROUND ${roundCount} =======`);

    const playerChoice = getPlayerInput();
    if (playerChoice === null) {
      console.log("You surrendered! The AI conquers Earth!");
      return;
    }

    const computerChoice = computerPlay();
    const roundResult = playRound(playerChoice, computerChoice);

    console.log(`\nYour choice: ${playerChoice}`);
    console.log(`Evil AI's choice: ${computerChoice}`);
    console.log(`RESULT: ${roundResult.message}`);

    if (roundResult.result === "Win") playerScore++;
    if (roundResult.result === "Lose") computerScore++;

    console.log(`SCORE: You ${playerScore} - ${computerScore} AI`);
    roundCount++;
  }

  // Final outcome determination
  console.log("\n======== GAME OVER ========");
  console.log(`FINAL SCORE: You ${playerScore} - ${computerScore} AI`);

  if (playerScore > computerScore) {
    console.log("You saved humanity");
    alert("HUMANITY IS SAVED!\n\n");
  } else if (computerScore > playerScore) {
    console.log("The AI won");
    alert("☠️ THE AI HAS CONQUERED EARTH! ☠️\n\n");
  } else {
    console.log("The battle continues...");
    alert("Neither side achieved victory. Prepare for the next battle!");
  }
}
