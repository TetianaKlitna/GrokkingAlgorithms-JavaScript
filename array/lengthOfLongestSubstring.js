
var lengthOfLongestSubstring = function(s) {
    const currUniqStr = new Set();
    let max = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++){
        if(currUniqStr.has(s[right])){
           while(currUniqStr.has(s[right])){
            currUniqStr.delete(s[left]);
            left++;
           }
        }

        currUniqStr.add(s[right]);
        max = Math.max(max, right - left + 1);
    }

    return max;

};

// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.