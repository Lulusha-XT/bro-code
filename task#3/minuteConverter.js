"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var num = (0, readline_sync_1.question)("Enter the number:\n");
var minutes = parseInt(num);
var convert = function (minutes) {
    return minutes * 60;
};
var result = convert(minutes);
console.log(result);
