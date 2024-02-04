// ❕ Description

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// ✅ Solution

const removeExclMark = (string) => string[string.length - 1] === "!" ? string.slice(0, -1) : string;

// ❓❕ Tests

let str1 = "Hi";
let str2 = "Hi!";
let str3 = "Hi!!";
let str4 = "Hi! Hi!";
let str5 = "Hi Hi!!";

console.log(removeExclMark(str1));
console.log(removeExclMark(str2));
console.log(removeExclMark(str3));
console.log(removeExclMark(str4));
console.log(removeExclMark(str5));