// ❓ Description

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// ✅ Solution

const reverseWord = (str) => str.split(" ").map(el => el.split("").reverse().join("")).join(" ");

console.log(reverseWord("The quick brown fox jumps over the lazy dog."));
console.log(reverseWord("I'm the good programmer!"));