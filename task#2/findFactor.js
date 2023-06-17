"use strict";
// find factor of a given number
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var numInput = (0, readline_sync_1.question)("enter the number:\n");
var num = parseInt(numInput);
console.log("The factors of ".concat(num, " is:"));
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}
