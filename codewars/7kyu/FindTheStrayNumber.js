// ❓ Description

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// ✅ Solution

const stray = (numbers) => numbers.find(el => numbers.indexOf(el) === numbers.lastIndexOf(el));

console.log(stray([1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1]));
console.log(stray([3, 3, 3, 4, 3, 3, 3, 3, 3]));
console.log(stray([23, 23, 23, 3, 23 ,23, 23]));