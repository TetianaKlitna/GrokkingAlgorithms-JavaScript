const quickSortInPlace = (arr, start = 0, end = arr.length - 1) => {
  console.log(`start ${start} ${end}`);
  let ind = Math.floor(Math.random() * (end - start + 1)) + start;

  let pivot = arr[ind];

  let i = start;
  let j = end;

  console.log(`pivot ${pivot}`);

  while (i <= j) {
    console.log(i, j, arr);
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  if (start < j) {
    quickSortInPlace(arr, start, j);
  }
  if (i < end) {
    quickSortInPlace(arr, i, end);
  }

  return arr;
};

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/ 2);
  let pivot = arr[mid];

  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return quickSort(left).concat(equal, quickSort(right));
};

console.log(quickSortInPlace([10, 20, 12, 4, 7, 9]));
