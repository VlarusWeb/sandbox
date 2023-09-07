// ❓ Description

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// ✅ Solution

function maps(x) {
  const doubledX = [];
  x.forEach(el => {
    let newEl = (el * 2);
    doubledX.push(newEl);
  });
  return doubledX;
}

console.log(maps([1, 2, 3]));
console.log(maps([5, 10, 20]));
console.log(maps([2, 2, 2]));
console.log(maps([1, 10, 100]));
console.log(maps([11, 22, 33]));