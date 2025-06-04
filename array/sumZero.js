const sumZero = (arr) => {
  if (arr.length <= 1) {
    return undefined;
  }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else {
      j--;
    }
  }

  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));

// write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where sum is 0.
// Return an array that includes both values that sum to zero or undefined if pair doesn't exist
