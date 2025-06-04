const sortedFrequency = (arr, k) => {
  if (arr[arr.length - 1] < k || k < arr[0]) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  const cnt = rec(start, end, arr, k);

  return cnt;
};

const rec = (start, end, arr, k) => {
  if (start > end) {
    return 0;
  }

  const mid = Math.floor((end + start) / 2);
  //   console.log(start, end, mid, arr[mid], arr);
  let cnt = 0;

  if (arr[mid] === k) {
    cnt++;
    const leftSum = rec(start, mid - 1, arr, k);
    cnt += leftSum;
    const rightSum = rec(mid + 1, end, arr, k);
    cnt += rightSum;
  } else if (arr[mid] < k) {
    const rightSum = rec(mid + 1, end, arr, k);
    cnt += rightSum;
  } else {
    const leftSum = rec(start, mid - 1, arr, k);
    cnt += leftSum;
  }

  return cnt;
};

// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts
// the occurrences of the number in the array

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) === 4);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) === 1);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) === 2);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) === -1);
// Time Complexity - O(n)
