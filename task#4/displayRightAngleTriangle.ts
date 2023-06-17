function displayRightAngleTriangle(height: number): void {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const height = 5;
displayRightAngleTriangle(height);
