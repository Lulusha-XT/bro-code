const swapNumbers = (
  a: number,
  b: number,
  c: number
): [number, number, number] => {
  const temp = a;
  a = b;
  b = c;
  c = temp;
  return [a, b, c];
};

let num1 = 5;
let num2 = 10;
let num3 = 15;

console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);

[num1, num2, num3] = swapNumbers(num1, num2, num3);

console.log(`After swapping: num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
