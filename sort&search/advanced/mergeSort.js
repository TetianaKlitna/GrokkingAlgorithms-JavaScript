const mergeSort = (arr, comparator) => {

  const merge = (arr1, arr2, comparator) => {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => a - b;
    }

    let i = 0;
    let j = 0;
    const merged = [];
    while (i < arr1.length && j < arr2.length) {
        console.log(arr1[i], arr2[j], comparator(arr1[i], arr2[j]));
      if (comparator(arr1[i], arr2[j]) < 0) {
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

  let start = 0;
  let end = arr.length;

  const mid = Math.floor((start + end) / 2);

  const arrLeft = mergeSort(arr.slice(start, mid), comparator);
  const arrRight = mergeSort(arr.slice(mid, end), comparator);

  return merge(arrLeft, arrRight, comparator);
};

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
