const findPair = (arr, target) => {
  if (arr.length === 0) {
    return false;
  }

  const freq = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (freq.has(arr[i])) {
      freq.set(arr[i], freq.get(arr[i]) + 1);
    } else {
      freq.set(arr[i], 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (freq.has(curr)) {
      freq.set(curr, freq.get(curr) - 1);
    }
    const searchVal1 = target - curr;
    const searchVal2 = curr - target;
    if (
      (freq.has(searchVal1) && freq.get(searchVal1) > 0) ||
      (freq.has(searchVal2) && freq.get(searchVal2) > 0)
    ) {
      return true;
    }

    freq.set(curr, freq.get(curr) + 1);
  }

  return false;
};

console.log(findPair([6, 1, 4, 10, 2, 4], 2) === true); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) === true); // true
console.log(findPair([4, -2, 3, 10], -6) === true); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22) === false); // false
console.log(findPair([], 0) === false); // false
console.log(findPair([5, 5], 0) === true); // true
console.log(findPair([-4, 4], -8) === true); // true
console.log(findPair([-4, 4], 8) === true); // true
console.log(findPair([1, 3, 4, 6], -2) === true); // true
console.log(findPair([0, 1, 3, 4, 6], -2) === true); // true
console.log(findPair([1, 2, 3], 0) === false); // false

// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements in the array
// whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false
// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)
// Part 2 - solve this with the following requirements:
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)
