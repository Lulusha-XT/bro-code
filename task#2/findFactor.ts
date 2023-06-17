// find factor of a given number

import { question } from "readline-sync";

const numInput: string = question("enter the number:\n");
const num = parseInt(numInput);

console.log(`The factors of ${num} is:`);

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
