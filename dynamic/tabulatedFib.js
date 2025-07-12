const tabulatedFib = (num) => {
  if (num < 0) return undefined;
  const arr = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
};

console.log(tabulatedFib(0) === 0);
console.log(tabulatedFib(1) === 1);
console.log(tabulatedFib(2) === 1);
console.log(tabulatedFib(3) === 2);
console.log(tabulatedFib(4) === 3);
console.log(tabulatedFib(5) === 5);
