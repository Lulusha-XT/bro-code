var sumArray = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = sumArray(array);
console.log("The sum of the array is: ".concat(sum));
