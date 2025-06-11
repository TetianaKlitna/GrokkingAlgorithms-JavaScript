const bubbleSort = (arr) => {
  let noSwaps = true;
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
};

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
