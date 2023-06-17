function displayRightAngleTriangle(height) {
    for (var i = 1; i <= height; i++) {
        // let row = "";
        for (var j = 1; j <= i; j++) {
            var row = "";
            row += "* ";
            console.log(row);
        }
    }
}
var height = 5;
displayRightAngleTriangle(height);
