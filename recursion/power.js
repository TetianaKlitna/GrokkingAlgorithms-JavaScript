const pow = (num1, num2) => {
    if(num2 === 0){
        return 1;
    }
    return num1 * pow(num1, num2 - 1);
}

console.log(pow(2, 0) === 1);
console.log(pow(2, 2) === 4);
console.log(pow(2, 4) === 16);

// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.