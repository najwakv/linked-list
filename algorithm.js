//FIBONACCI SERIES
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
// console.log(fibonacci(1));
// console.log(fibonacci(5));
// console.log(fibonacci(8));
//Big-O = O(n)

//FACTORIAL

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
//Big-O = O(n)

//PRIME NUMBER
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(8));
//Big-O = O(n)

//POWER OF TWO
function powerOfTwo(n) {
    if(n <= 1) {
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n/2; 
    }
    return true;
}
console.log(powerOfTwo(0))
console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(5))
//Big-O = O(logn) , since the input size reduced by half