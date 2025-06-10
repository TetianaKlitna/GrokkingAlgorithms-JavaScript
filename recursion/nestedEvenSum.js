const nestedEvenSum = (input) => {
  let res = 0;

  const helper = (obj) => {
    for (const val of Object.values(obj)) {
      if (typeof val === 'object') {
        helper(val);
      } else if (typeof val === 'number') {
        if (val % 2 === 0) {
          res += val;
        }
      }
    }
  };

  helper(input);

  return res;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1) === 6); // 6
console.log(nestedEvenSum(obj2) === 10); // 10

// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.
