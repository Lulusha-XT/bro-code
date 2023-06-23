"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var calculator = function () {
    var oprator = (0, readline_sync_1.question)("Enter the oprator (+, -, *, /): ");
    var operand1 = Number((0, readline_sync_1.question)("Enter the first operand: "));
    var operand2 = Number((0, readline_sync_1.question)("Enter the second operand: "));
    var result = 0;
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
    console.log("".concat(operand1, " ").concat(oprator, " ").concat(operand2, " Result: ").concat(result));
};
calculator();
