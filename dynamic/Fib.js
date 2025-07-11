const Fib = (num) => {
  if (num < 0) return undefined;      
  if (num === 0) return 0;           
  if (num === 1) return 1;  

  return Fib(num - 1) + Fib(num - 2);
};

console.log(Fib(0) === 0); 
console.log(Fib(1) === 1); 
console.log(Fib(2) === 1);
console.log(Fib(3) === 2);
console.log(Fib(4) === 3);
console.log(Fib(5) === 5);