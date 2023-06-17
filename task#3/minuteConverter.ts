import { question } from "readline-sync";

const num: string = question("Enter the number:\n");
const minutes = parseInt(num);

const convert = (minutes: number): number => {
  return minutes * 60;
};

const result = convert(minutes);

console.log(result);
