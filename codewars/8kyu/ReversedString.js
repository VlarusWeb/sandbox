// ❔ Descriptio

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅ Solution

const solution = (str) => str.split("").reverse().join("");

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
console.log(solution("h"));