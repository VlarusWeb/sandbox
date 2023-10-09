// ❔ Description

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// ✅ Solution

const getSum = (a, b) => a < b ? (b * (b + 1) - a * (a - 1)) / 2 : a > b ? (a * (a + 1) - b * (b - 1)) / 2 : a;

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(231, - 538));