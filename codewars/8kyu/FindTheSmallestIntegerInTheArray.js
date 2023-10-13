// ❔ Description

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ✅ Solution

class SmallIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const testObj = new SmallIntegerFinder;

console.log(testObj.findSmallestInt([1, 3, -6, 4, -11, 24]));
console.log(testObj.findSmallestInt([1, 33, -34, 3, -4, 46]));
console.log(testObj.findSmallestInt([-345, -356, -350, -3, 35]));
console.log(testObj.findSmallestInt([9, 3, 32, 36, 33, 93, 11]));