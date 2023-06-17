var _a;
var swapNumbers = function (a, b, c) {
    var temp = a;
    a = b;
    b = c;
    c = temp;
    return [a, b, c];
};
var num1 = 5;
var num2 = 10;
var num3 = 15;
console.log("Before swapping: num1 = ".concat(num1, ", num2 = ").concat(num2, ", num3 = ").concat(num3));
_a = swapNumbers(num1, num2, num3), num1 = _a[0], num2 = _a[1], num3 = _a[2];
console.log("After swapping: num1 = ".concat(num1, ", num2 = ").concat(num2, ", num3 = ").concat(num3));
