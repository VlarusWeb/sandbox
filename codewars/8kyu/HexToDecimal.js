// ❔Complete the function which convert hex number (given as a string) to a decimal number.

// ✅ Solution

function hexToDex(hexString) {
  return parseInt(hexString, 16);
}

// ❕❔ Tests

console.log(hexToDex("1"));
console.log(hexToDex("a"));
console.log(hexToDex("ff"));
console.log(hexToDex("10"));
console.log(hexToDex("-A"));