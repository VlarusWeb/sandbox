// ❔ Description

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// ✅ Solution

const shortcut = (string) => string.split("").filter((el) => el.match(/[^aeiou]/g)).join("");

console.log(shortcut("hello"));
console.log(shortcut("hello how are you?"));
console.log(shortcut("complain"));
console.log(shortcut("never"));