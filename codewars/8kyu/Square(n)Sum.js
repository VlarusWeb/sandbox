// ❓ Description

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

// ✅ Solution

function squreSum(numbers) {
  return numbers.reduce((acc, num) => acc + num ** 2, 0);
}

console.log(squreSum([1, 2]));
console.log(squreSum([0, 3, 4, 5]));
console.log(squreSum([]));