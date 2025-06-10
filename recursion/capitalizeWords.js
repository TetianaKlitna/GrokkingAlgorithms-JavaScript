const capitalizeWords = (arr) => {
  const res = [];
  const helper = (i) => {
    if (i === arr.length) {
      return;
    }
    res.push(arr[i].toUpperCase());
    helper(++i);
  };
  helper(0);
  return res;
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// capitalizedWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
