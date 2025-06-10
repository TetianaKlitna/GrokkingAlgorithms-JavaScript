const collectStrings = (inObj) => {

    const res = [];
    const helper = (currObj) => {
        for(const item of Object.values(currObj)){
            if(typeof item === 'string'){
                res.push(item);
            }else if (typeof item === 'object'){
                helper(item)
            }
        }
    }

    helper(inObj);

    return res;

}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

// collectStrings
// Write a function called collectStrings which accepts an object and returns 
// an array of all the values in the object that have a typeof string

