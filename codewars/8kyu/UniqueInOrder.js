//❔ Description

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



// ✅ Solution

const uniqueInOrder = (iterable) => [...iterable].filter((item, index, array) => item !== array[index -1]);


let str = 'AAAABBBCCDAABBB';
let stri = 'ABBCcAD';
let arr = [1, 2, 2, 3, 3, 4, 4];

console.log(uniqueInOrder(str));
console.log(uniqueInOrder(stri));
console.log(uniqueInOrder(arr));