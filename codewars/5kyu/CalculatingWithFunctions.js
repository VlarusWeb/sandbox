// ❔ Description

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// ✅ Solution

function createNumFunc(num) {
  return function (operation) {
    return operation ? operation(num) : num;
  };
}

const zero = createNumFunc(0);
const one = createNumFunc(1);
const two = createNumFunc(2);
const three = createNumFunc(3);
const four = createNumFunc(4);
const five = createNumFunc(5);
const six = createNumFunc(6);
const seven = createNumFunc(7);
const eight = createNumFunc(8);
const nine = createNumFunc(9);

const plus = (rightNum) => (leftNum) => leftNum + rightNum;
const minus = (rightNum) => (leftNum) => leftNum - rightNum;
const times = (rightNum) => (leftNum) => leftNum * rightNum;
const devidedBy = (rightNum) => (leftNum) => Math.floor(leftNum / rightNum);



console.log(one(plus(two())));
console.log(nine(plus(nine())));
console.log(nine(devidedBy(three())));
console.log(five(times(five())));
console.log(four(minus(one())));
console.log(nine(times(nine())));