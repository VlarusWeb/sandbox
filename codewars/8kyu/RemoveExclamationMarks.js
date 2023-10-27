// ❔ Descriptio

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// ✅ Solution

const removeExclamationMarks = (s) => s.replace(/!/g, "");

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("I'm a really good programmer!"));
console.log(removeExclamationMarks("Hello World! I'm the programmer!"));