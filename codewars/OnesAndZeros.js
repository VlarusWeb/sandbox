// ❓ Description
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

let arr1 = [0, 0, 0, 1];
let arr2 = [0, 0, 1, 0];
let arr3 = [0, 1, 0, 1];
let arr4 = [1, 0, 0, 1];
let arr5 = [0, 0, 1, 0];
let arr6 = [0, 1, 1, 0];
let arr7 = [1, 1, 1, 1];
let arr8 = [1, 0, 1, 1];

// ✅ Solution

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber(arr1));
console.log(binaryArrayToNumber(arr2));
console.log(binaryArrayToNumber(arr3));
console.log(binaryArrayToNumber(arr4));
console.log(binaryArrayToNumber(arr5));
console.log(binaryArrayToNumber(arr6));
console.log(binaryArrayToNumber(arr7));
console.log(binaryArrayToNumber(arr8));
