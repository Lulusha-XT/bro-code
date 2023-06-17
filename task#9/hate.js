"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var inputWord = function () {
    var word = (0, readline_sync_1.question)("Enter the word:\n");
    var result = detectHateWords(word);
    if (result) {
        console.log("The text contains hate word.");
    }
    else {
        console.log("The text does not contain hate words.");
    }
};
var detectHateWords = function (word) {
    var hateWords = ["racist", "nazi", "fascist", "bigot", "hater"];
    var texts = word.toLowerCase().split(/\s+/);
    for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
        var text = texts_1[_i];
        if (hateWords.includes(text)) {
            return true;
        }
    }
    return false;
};
inputWord();
