const sortedFrequency = (arr, k) => {
  if (arr[arr.length - 1] < k || k < arr[0]) {
    return -1;
  }

  const firstPos = firstIndx(arr, k);
  const lastPos = lastIndx(arr, k);

  return (lastPos - firstPos + 1);
};

const firstIndx = (arr, k) => {

    let start = 0;
    let end = arr.length - 1;
    let ind = -1;

    while(start <= end){

        const mid = Math.floor((start + end)/2);

        if(k < arr[mid]){
           end = mid - 1;
        }else if( k > arr[mid]){
           start = mid + 1;
        }else{
           ind = mid;
           end = mid - 1;

        }
    }

    return ind;
}

const lastIndx = (arr, k) => {

    let start = 0;
    let end = arr.length - 1;

    let ind = -1;

    while(start <= end){
        const mid = Math.floor((start + end)/2);

        if(arr[mid] === k){
           ind = mid;
           start = mid + 1;
        }else if(arr[mid] > k){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return ind;
}


// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts
// the occurrences of the number in the array

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) === 4);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) === 1);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) === 2);
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) === -1);
// Time Complexity - O(n)
