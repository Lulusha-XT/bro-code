const check = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(`${num} is Even number`);
    } else {
      reject(`${num} is Odd number`);
    }
  });
};

check(7)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
