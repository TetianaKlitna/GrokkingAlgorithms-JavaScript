// time O(n)
// space O(n)
const same = (arr1, arr2) => {
    
    if(arr1.length !== arr2.length){
        return false;
    }

    const map = arr2.reduce((acc, item) => {
        acc[item] = ++acc[item]||1 ;
        return acc;
    }, {});
    
    for(let item of arr1){
       const sqrItem = Math.pow(item, 2);
       if(map[sqrItem] && map[sqrItem] > 0){
        map[sqrItem] = --map[sqrItem];
       }else{
        return false
       }
    }

    return true;

}

console.log(same([1,2,3], [4,1,9]) === true); 
console.log(same([1,2,3], [1,9]) === false);
console.log(same([1,2,1], [4,4,1]) === false);