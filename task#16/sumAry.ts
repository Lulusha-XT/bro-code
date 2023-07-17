const sumArray = (array: number[]): number => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = sumArray(array);
console.log(`The sum of the array is: ${sum}`);
