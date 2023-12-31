// ❓ Description

//Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// ✅ Solution

function oddOrEven(array) {
  return array.length === 0 || array.reduce((acc, num) => acc += num) % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0, 1, 4]));



// ❕✅ Solution with function exspression

const oddOrEvenNum = (array) => array.length === 0 || array.reduce((acc, num) => acc += num) % 2 === 0 ? "even" : "odd";

console.log(oddOrEvenNum([0]));
console.log(oddOrEvenNum([]));
console.log(oddOrEvenNum([0, -1, -5]));
console.log(oddOrEvenNum([0, 1, 4]));
