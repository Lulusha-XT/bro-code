import { question } from "readline-sync";
const calculator = () => {
  const oprator = question("Enter the oprator (+, -, *, /): ");
  const operand1 = Number(question("Enter the first operand: "));
  const operand2 = Number(question("Enter the second operand: "));
  let result = 0;

  switch (oprator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      if (operand2 === 0) {
        console.log("Cannot divide by zero");
        return;
      }
      result = operand1 / operand2;
      break;
    default:
      console.log("Invalid oprator");
  }

  console.log(`${operand1} ${oprator} ${operand2} Result: ${result}`);
};

calculator();
