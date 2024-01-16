// ❔ Description

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// ✅ Solution

const reverseList = (list) => list.reverse();



const list1 = [2, 3, 5, 0, 9];
const list2 = ['a', 'b', 'c', 'd'];

console.log(reverseList(list1));
console.log(reverseList(list2));



// ❕ solution

function reverseListOrder(list) {
  const newList = [];
  for(let item of list) {
    newList.unshift(item);
  }
  return newList;
}

console.log(reverseListOrder(list1));
console.log(reverseListOrder(list2));
