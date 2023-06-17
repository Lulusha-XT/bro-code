const checkForPalindrome = (num: number): boolean => {
  const input = num.toString();
  for (let i = 0, j = input.length - 1; i < j; ++i, --j) {
    if (input[i] !== input[j]) {
      return false;
    }
  }
  return true;
};

console.log(checkForPalindrome(123));
console.log(checkForPalindrome(222));
