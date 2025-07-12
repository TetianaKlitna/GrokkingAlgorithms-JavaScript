const fib = (num) => {
  if (num < 0) return undefined;      
  if (num === 0) return 0;           
  if (num === 1) return 1;  

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(0) === 0); 
console.log(fib(1) === 1); 
console.log(fib(2) === 1);
console.log(fib(3) === 2);
console.log(fib(4) === 3);
console.log(fib(5) === 5);