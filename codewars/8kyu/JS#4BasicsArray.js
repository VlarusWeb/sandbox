// ❔ Description

// In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// ✅ Solution

//return length of arr
function getLength(arr) {
  return arr.length;
}

//return the first element of arr
function getFirst(arr) {
  return arr[0];
}

//return the last element of arr
function getLast(arr) {
  return arr[arr.length -1];
}

//push el to arr
function pushElement(arr) {
  var el = 1;
  return arr.push(el);
}

//pop an element from arr
function popElement(arr) {
  return arr.pop();
}

// ❕❔ Tests

console.log(getLength([1,2,3]));
console.log(getFirst([1,2,3]));
console.log(getLast([1,2,3]));
console.log(pushElement([1,2,3]));
console.log(popElement([1,2,3]));



// ❕✅ Other Solution

const nGetLength = (arr) => arr.length;

const nGetFirst = (arr) => arr[0];

const nGetLast = (arr) => arr[arr.length - 1];

const nPushElement = (arr) => {let el = 1; return arr.push(el)};

const nPopElement = (arr) => arr.pop();

// ! ? Tests

console.log(nGetLength([1,2,3]));
console.log(nGetFirst([1,2,3]));
console.log(nGetLast([1,2,3]));
console.log(nPushElement([1,2,3]));
console.log(nPopElement([1,2,3]));