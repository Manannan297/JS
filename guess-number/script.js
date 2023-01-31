"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let question = document.querySelector(".question");
let scoreField = document.querySelector(".score");

const displayGuessMessage = function (message) {
  document.querySelector(".guess-message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessingNumber = Number(document.querySelector(".number-input").value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    displayGuessMessage("Введите число!");

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage("Правильно!");
    question.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)";
    question.style.width = "50rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"
      );
      score--;
      scoreField.textContent = score;
    } else {
      displayGuessMessage("Game Over!");
      scoreField.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  question.textContent = "???";
  question.style.width = "25rem";
  displayGuessMessage("Начни угадывать!");
  scoreField.textContent = score;
  document.querySelector(".number-input").value = "";

  document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";
});
