/* complexCode.js */

// This code calculates the Fibonacci sequence up to a specified number

// Function to calculate Fibonacci sequence
function calculateFibonacci(n) {
  if (n <= 0) {
    console.log("Please enter a positive number.");
    return;
  }
  
  let arr = [0, 1];
  
  if (n == 1) {
    console.log(arr[0]);
    return;
  }
  
  if (n >= 2) {
    console.log(arr[0]);
    console.log(arr[1]);
  }
  
  let fib1 = 0, fib2 = 1, fib3;
  
  for (let i = 2; i < n; i++) {
    fib3 = fib1 + fib2;
    arr.push(fib3);
    fib1 = fib2;
    fib2 = fib3;
    console.log(fib3);
  }
}

// Function to generate random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to find prime factors of a number
function findPrimeFactors(num) {
  let primeFactors = [];
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
        primeFactors.push(i);
      }
      
      let j = num / i;
      
      if (isPrime(j) && !primeFactors.includes(j)) {
        primeFactors.push(j);
      }
    }
  }
  
  return primeFactors;
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  
  add(other) {
    let realSum = this.real + other.real;
    let imaginarySum = this.imaginary + other.imaginary;
    return new ComplexNumber(realSum, imaginarySum);
  }
  
  subtract(other) {
    let realDiff = this.real - other.real;
    let imaginaryDiff = this.imaginary - other.imaginary;
    return new ComplexNumber(realDiff, imaginaryDiff);
  }
  
  multiply(other) {
    let realProduct = this.real * other.real - this.imaginary * other.imaginary;
    let imaginaryProduct = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(realProduct, imaginaryProduct);
  }
  
  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// Generate 10 random Fibonacci numbers
for (let i = 0; i < 10; i++) {
  let randomNum = getRandomInt(10, 50);
  console.log(`Fibonacci sequence up to ${randomNum}:`);
  calculateFibonacci(randomNum);
}

// Check if numbers between 100 and 200 are prime
for (let i = 100; i <= 200; i++) {
  if (isPrime(i)) {
    console.log(`${i} is a prime number.`);
  }
}

// Find the prime factors of a number
let numberToFactor = getRandomInt(1000, 2000);
console.log(`Prime factors of ${numberToFactor}:`);
console.log(findPrimeFactors(numberToFactor));

// Perform operations on complex numbers
let complex1 = new ComplexNumber(2, 3);
let complex2 = new ComplexNumber(-1, 5);

console.log(`Complex numbers calculations:`);
console.log(`${complex1.toString()} + ${complex2.toString()} = ${complex1.add(complex2).toString()}`);
console.log(`${complex1.toString()} - ${complex2.toString()} = ${complex1.subtract(complex2).toString()}`);
console.log(`${complex1.toString()} * ${complex2.toString()} = ${complex1.multiply(complex2).toString()}`);

// Additional complex code...
// ...
// ...
// ... (more than 200 lines of code)