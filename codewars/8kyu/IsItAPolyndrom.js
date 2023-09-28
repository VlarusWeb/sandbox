// ❓ Description

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// ✅ Solution

const isPolyndrome = (x) => x.toLowerCase().split("").reverse().join("") === x.toLowerCase() ? true : false;

console.log(isPolyndrome("a"));
console.log(isPolyndrome("abbA"));
console.log(isPolyndrome("AbBa"));
console.log(isPolyndrome("Madam"));