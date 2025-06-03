const sameFrequency = (num1, num2) => {
    
    const str1 = String(num1);
    const str2 = String(num2);

    if(str1.length !== str2.length){
        return false;
    }
    const freq = new Map();
    for(let i = 0; i < str1.length; i++){
       if(freq.has(str1[i])){
        freq.set(str1[i], freq.get(str1[i]) + 1);
       }else{
          freq.set(str1[i], 1);
       }
    }

    for(let i = 0; i < str2.length; i++){
        if(!freq.has(str2[i])){
            return false;
        }
    }

    return true;
    
}

console.log(sameFrequency(182,281) === true);
console.log(sameFrequency(34,14) === false); 
console.log(sameFrequency(3589578, 5879385) === true);
console.log(sameFrequency(22,222) === false);

// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
