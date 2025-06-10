function flatten(arr) {
  const res = [];

  const helper = (curr) => {
    if (curr.length === 0) {
      return;
    }
    if (Array.isArray(curr[0])) {
      helper(curr[0]);
    } else {
      res.push(curr[0]);
    }

    helper(curr.slice(1));
  };

  helper(arr);
  return res;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// flatten
// Write a recursive function called flatten which accepts an array of arrays and
// returns a new array with all values flattened.
