function pivot(arr, comparator = null, start = 0, end = arr.length - 1) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }
  if (arr.length <= 1) {
    return arr;
  }
  let ind = start;
  let pivotItem = arr[ind];
  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[i], pivotItem) < 0) {
      ind++;
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
    }
  }
  [arr[start], arr[ind]] = [arr[ind], arr[start]];

  return ind;
}

function quickSort(arr, comparator = null, start = 0, end = arr.length - 1) {
  if (start >= end) return [];

  const pivotIndex = pivot(arr, comparator, start, end);

  quickSort(arr, comparator, start, pivotIndex - 1);
  quickSort(arr, comparator, pivotIndex + 1, end);

  return arr;
}

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
