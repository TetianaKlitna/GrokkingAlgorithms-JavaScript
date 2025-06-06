function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq = str1.split('').reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  for (let ch of str2) {
    if (freq[ch] && freq[ch] > 0) {
      freq[ch] = --freq[ch];
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', '') === true);
console.log(validAnagram('aaz', 'zza') === false);
console.log(validAnagram('anagram', 'nagaram') === true);
console.log(validAnagram('rat', 'car') === false);
console.log(validAnagram('awesome', 'awesom') === false);
console.log(
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') === false
);
console.log(validAnagram('qwerty', 'qeywrt') === true);
console.log(validAnagram('texttwisttime', 'timetwisttext') === true);

// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)
