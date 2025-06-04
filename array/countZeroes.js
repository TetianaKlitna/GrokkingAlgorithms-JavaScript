const countZeroes = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  let cnt = 0;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);
    // console.log(start, mid, end);
    // console.log(cnt);
    if (arr[mid] === 1) {
      start = mid + 1;
    } else {
      cnt += end - mid + 1;
      end = mid - 1;
    }
  }

  return cnt;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0]) === 2);
console.log(countZeroes([1, 0, 0, 0, 0]) === 4);
console.log(countZeroes([0, 0, 0]) === 3);
console.log(countZeroes([1, 1, 1, 1]) === 0);

// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes,
// which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)
