const getDigit = (num, pos) => {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(digitCount(arr[i]), max);
  }

  return max;
};

const radixSort = (arr) => {
  const maxDigit = mostDigits(arr);
  for (let k = 0; k < maxDigit; k++) {
    const buckets = [];
    for (let j = 0; j < 10; j++) buckets.push([]);
    for (let i = 0; i < arr.length; i++) {
      let curr = getDigit(arr[i], k);
      buckets[curr].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
};

console.log(getDigit(12345, 0) === 5);
console.log(getDigit(12345, 1) === 4);
console.log(getDigit(12345, 2) === 3);
console.log(getDigit(12345, 3) === 2);
console.log(getDigit(12345, 4) === 1);
console.log(getDigit(12345, 5) === 0);

console.log(digitCount(0));
console.log(digitCount(-12345));

console.log(mostDigits([1234, 56, 7])); //4
console.log(mostDigits([1, 1, 11111, 1])); //5
console.log(mostDigits([12, 34, 56, 78])); //2

console.log(radixSort([10, 1234, 56, 7]));
