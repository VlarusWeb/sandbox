// ❓ Desctiption
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// ✅ Solution

function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  const sortingNum = (a, b) => a - b;
  return [...new Set(newArr.sort(sortingNum))];
}

const firstArr = [1, 5, 7, 2, 4, 5, 2, 1, 8];
const secondArr = [4, 4, 3, 5, 2, 1, 7, 9, 4, 5, 6];

console.log(mergeArrays(firstArr, secondArr));