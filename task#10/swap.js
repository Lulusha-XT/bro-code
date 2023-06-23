var array1 = ["apple", "banana", "cherry"];
var array2 = ["x", "y", "z"];
var swappedArray1 = array1.map(function (value, index) { return array2[index]; });
var swappedArray2 = array2.map(function (value, index) { return array1[index]; });
console.log(swappedArray1); // ['x', 'y', 'z']
console.log(swappedArray2); // ['apple', 'banana', 'cherry']
