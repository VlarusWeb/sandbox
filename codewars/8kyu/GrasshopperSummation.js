// ❓ Description

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// ✅ Solution

var summation = function(num) {
  let result = 0;
  while(num > 0) {
    result += num;
    num--;
  }
  return result;
}

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));



// ❕✅❕ New Solution   sum = num * (num + 1) / 2

const summ = (num) => num * (num + 1) / 2;

console.log(summ(1));
console.log(summ(2));
console.log(summ(8));