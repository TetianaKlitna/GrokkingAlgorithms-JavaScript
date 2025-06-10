const capitalizeFirst = (arr) => {
  const res = [];
  const initCap = (item) => {
    return item[0].toUpperCase() + item.slice(1);
  };
  const helper = (i) => {
    if (arr.length === i) {
      return;
    }
    res.push(initCap(arr[i]));
    helper(++i);
  };

  helper(0);
  return res;
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.
