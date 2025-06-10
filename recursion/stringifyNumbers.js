const stringifyNumbers = (inObj) => {
  //   const resObj = { ...inObj };
  const resObj = Object.assign({}, inObj);

  const helper = (obj) => {
    for (let [key, item] of Object.entries(obj)) {
      if (typeof item === 'object') {
        helper(item);
      } else if (typeof item === 'number') {
        obj[key] = item.toString();
      }
    }
  };

  helper(resObj);

  return resObj;
};

// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings,
// and not modify the original. Keep the original object unchanged.

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
