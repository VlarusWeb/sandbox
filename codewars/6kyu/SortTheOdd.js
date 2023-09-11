// ❓ Description

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ✅ Solution

function sortArray(array) {
  let Odd = [];
  for(let num of array) {
    if(num % 2 !== 0) {
      Odd.push(num);
    }
  }
  const sortedOdd = Odd.sort((a, b) => a - b);
  const result = [];
  let i = 0;
  for(let num of array) {
    if(num % 2 !== 0) {
      result.push(num = sortedOdd[i]);
      i++;
    } else {
      result.push(num);
    }
  }
  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));