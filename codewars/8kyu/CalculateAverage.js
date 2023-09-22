// ❓ Description

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// ✅ Solution

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((acc, num) => acc += num) / array.length;
}

console.log(findAverage([1, 1, 1])); // should return 1;
console.log(findAverage([1, 2, 3])); // should return 2;
console.log(findAverage([1, 2, 3, 4])); // should return 2.5;
