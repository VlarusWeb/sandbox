// ❓ Description

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// ✅ Solution

function findUniq(arr) {
const counter = arr.reduce((object, num) => {
  if(object[num]) {
    object[num]++;
  } else {
    object[num] = 1;
  } return object;
  },{});
  return Number(Object.keys(counter).find(key => counter[key] === 1));
};


// 🆕✅ Solution

function findUniqNum(numArr) {
  return numArr.find(num => numArr.indexOf(num) === numArr.lastIndexOf(num));
}

console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));


console.log(findUniqNum([ 0, 1, 0 ]));
console.log(findUniqNum([ 0, 0, 1 ]));
console.log(findUniqNum([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniqNum([ 1, 1, 2, 1, 1 ]));
console.log(findUniqNum([ 3, 10, 3, 3, 3 ]));