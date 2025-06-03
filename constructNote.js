const constructNote = (message, letters) => {
    const freq = new Map();
    for(let i = 0; i < letters.length; i++){
        if(freq.has(letters[i])){
            freq.set(letters[i], freq.get(letters[i]) + 1);
        }else{
            freq.set(letters[i], 1);
        }
    }

    for(let i = 0; i < message.length; i++){
        if(!freq.has(message[i])){
            return false;
        }else{
            const curr = freq.get(message[i]) - 1;
            if(curr === 0){
                freq.delete(message[i]);
            }else{
                freq.set(message[i], freq.get(message[i]) - 1);
            }
        }
    }

    return true;
}

console.log(constructNote('aa', 'abc') === false);// false
console.log(constructNote('abc', 'dcba') === true);// true
console.log(constructNote('aabbcc', 'bcabcaddff') === true);// true

// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true