const findAllDuplicates = (arr) => {
    const freq = new Map();
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(freq.has(arr[i])){
            res.push(arr[i]);
        }else{
            freq.set(arr[i], 1);
        }
    }

    return res;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));// array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1


// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)