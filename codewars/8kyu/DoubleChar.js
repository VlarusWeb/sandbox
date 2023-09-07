// ❓ Description

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// ✅ Solution

function doubleChar(str) {
  return [...str].map(char => char + char).join("");
}

console.log(doubleChar("string"));
console.log(doubleChar("09022021"));
console.log(doubleChar("Hello, World!"));
console.log(doubleChar("codewars"));
console.log(doubleChar("07 September"));



// 🆕✅ Solution

const doubleCharacters = (str) => str.replace(/./g , "$&$&");

console.log(doubleCharacters("string"));
console.log(doubleCharacters("09022021"));
console.log(doubleCharacters("Hello, World!"));
console.log(doubleCharacters("codewars"));
console.log(doubleCharacters("07 September"));