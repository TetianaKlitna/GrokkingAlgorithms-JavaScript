const minCoinChangeGreedy = (coins, amount) => {
  const mergeSort = (arr) => {
    const merge = (arr1, arr2) => {
      const merged = [];
      let i = 0,
        j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }

      return merged;
    };

    if (arr.length === 1 || arr.length === 0) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid, arr.length));
    return merge(leftArr, rightArr);
  };

  const sortedCoins = mergeSort(coins);
  const res = [];
  let i = 0;
  while (amount > 0 && i < sortedCoins.length) {
    if (amount >= sortedCoins[i]) {
      amount -= sortedCoins[i];
      res.push(sortedCoins[i]);
    } else {
      i++;
    }
  }
  return amount === 0 ? res : [];
};

console.log(minCoinChangeGreedy([1, 2, 3, 4, 5], 11)); // this should return: [5, 5, 1]
console.log(minCoinChangeGreedy([5, 10, 15, 20, 25], 85)); // this should return: [25, 25, 25, 10]
console.log(minCoinChangeGreedy([1, 5, 6, 9], 11)); // this should return: [9, 1, 1]
console.log(minCoinChangeGreedy([7, 3], 5)); // []
console.log(minCoinChangeGreedy([1, 3, 4], 6)); // greedy returns [4, 1, 1] (not OPTIMAL!), correct - [3, 3]
