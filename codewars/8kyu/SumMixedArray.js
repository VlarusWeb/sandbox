// ❓ Description

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// ✅  Solution

function sumMix(x) {
  return x.reduce((acc, el) => acc + Number(el), 0);
}

console.log(sumMix([22, "09", 81]));
console.log(sumMix([10, "20", 30, "40"]));
console.log(sumMix([10, 20, 5, "25", "5", "5", 15, "15"]));



// 🆕✅ Solution

const sumMixedArray = (arr) => arr.reduce((acc, el) => acc + Number(el), 0);

console.log(sumMixedArray([22, "09", 81]));
console.log(sumMixedArray([10, "20", 30, "40"]));
console.log(sumMixedArray([10, 20, 5, "25", "5", "5", 15, "15"]));