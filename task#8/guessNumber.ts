import { question } from "readline-sync";

const y = Math.floor(Math.random() * 10) + 1;

const machin = (y: number) => {
  let isGuessCorrect = false;

  while (!isGuessCorrect) {
    const input: string = question("Guess a number between 1-10:\n");
    const guess: number = parseInt(input);

    if (y === guess) {
      console.log("You got it!");
      isGuessCorrect = true;
    } else {
      console.log("Try another number.");
    }
  }
};

machin(y);
