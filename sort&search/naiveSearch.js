const naiveSearch = (long, short) => {
  let cnt = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) cnt++;
    }
  }

  return cnt;
};

console.log(naiveSearch('lorie loled', 'lol') === 1);
console.log(naiveSearch('lolol', 'lol') === 2);
