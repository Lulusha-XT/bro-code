import { question } from "readline-sync";

const inputWord = () => {
  const word = question("Enter the word:\n");
  let result = detectHateWords(word);
  if (result) {
    console.log("The text contains hate word.");
  } else {
    console.log("The text does not contain hate words.");
  }
};
const detectHateWords = (word: string) => {
  let hateWords = ["racist", "nazi", "fascist", "bigot", "hater"];
  let texts = word.toLowerCase().split(/\s+/);
  for (let text of texts) {
    if (hateWords.includes(text)) {
      return true;
    }
  }
  return false;
};
inputWord();
