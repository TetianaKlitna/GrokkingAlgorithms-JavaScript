function memoFib(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num < 0) return undefined;
  if (num <= 1) return num;
  const res = memoFib(num - 1, memo) + memoFib(num - 2, memo);
  memo[num] = res;
  return res;
}

console.log(memoFib(0) === 0);
console.log(memoFib(1) === 1);
console.log(memoFib(2) === 1);
console.log(memoFib(3) === 2);
console.log(memoFib(4) === 3);
console.log(memoFib(5) === 5);
