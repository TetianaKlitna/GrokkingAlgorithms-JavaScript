function pivot(arr, comparator = null, start = 0, end = arr.length - 1) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }
  if (arr.length <= 1) {
    return arr;
  }
  let ind = start;
  let pivotItem = arr[ind];
  for(let i = start + 1; i <= end; i++){
     if(comparator(arr[i], pivotItem) < 0){
        ind++;
        [arr[i], arr[ind]] = [arr[ind], arr[i]];
     }
  }
   [arr[start], arr[ind]] = [arr[ind], arr[start]];
  
  return ind;
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strLength(a, b) {
  return a.length - b.length;
}

console.log(pivot(arr1)); // 3
console.log(pivot(arr2)); // 4
console.log(pivot(arr3, strLength)); // 1

arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

arr3.slice(0, 1).sort(strLength); // ["Blue"]
arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
