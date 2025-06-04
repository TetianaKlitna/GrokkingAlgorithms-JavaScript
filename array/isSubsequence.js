const isSubsequence = (str1, str2) => {
  if (str2.length < str1.length) {
    return false;
  }
  let j = 0;
  for (let i = 0; i < str2.length; i++) {
    if(str1[j] === str2[i]){
        j++;
        if(j === str1.length){
            return true;
        }
    }
  }

  return false;
};

console.log(isSubsequence('hello', 'hello world') === true); // true
console.log(isSubsequence('sing', 'sting') === true); // true
console.log(isSubsequence('abc', 'abracadabra') === true); // true
console.log(isSubsequence('abc', 'acb') === false); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)
