"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var y = Math.floor(Math.random() * 10) + 1;
var machin = function (y) {
    var isGuessCorrect = false;
    while (!isGuessCorrect) {
        var input = (0, readline_sync_1.question)("Guess a number between 1-10:\n");
        var guess = parseInt(input);
        if (y === guess) {
            console.log("You got it!");
            isGuessCorrect = true;
        }
        else {
            console.log("Try another number.");
        }
    }
};
machin(y);
