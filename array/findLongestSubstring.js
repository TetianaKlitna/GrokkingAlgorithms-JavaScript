const findLongestSubstring = (str) => {
  if (str.length === 0) {
    return 0;
  }

  const set = new Set();
  let j = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      longest = Math.max(set.size, longest);
      while (set.has(str[i])) {
        set.delete(str[j]);
        j++;
      }
    }
    // console.log(set, longest);
    set.add(str[i]);
  }
  longest = Math.max(set.size, longest);
  return longest;
};

console.log(findLongestSubstring('') === 0);
console.log(findLongestSubstring('rithmschool') === 7);
console.log(findLongestSubstring('thisisawesome') === 6);
console.log(findLongestSubstring('thecatinthehat') === 7);
console.log(findLongestSubstring('bbbbbb') === 1);
console.log(findLongestSubstring('longestsubstring') === 8);
console.log(findLongestSubstring('thisishowwedoit') === 6);

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns
// the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)
