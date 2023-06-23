var check = function (num) {
    return new Promise(function (resolve, reject) {
        if (num % 2 == 0) {
            resolve("".concat(num, " is Even number"));
        }
        else {
            reject("".concat(num, " is Odd number"));
        }
    });
};
check(7)
    .then(function (message) {
    console.log(message);
})["catch"](function (message) {
    console.log(message);
});
