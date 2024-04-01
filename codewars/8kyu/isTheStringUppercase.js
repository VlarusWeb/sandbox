// Description!

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// ✅ Solution

String.prototype.isUpperCase = function() {
  return this.valueOf() === this.valueOf().toUpperCase();
}

// ❕❔ Tests

console.log('a'.isUpperCase());
console.log('A'.isUpperCase());
console.log('Hello World!'.isUpperCase());
console.log('HELLO WORLD!'.isUpperCase());
console.log('ABCDEFJsGKLDFJ'.isUpperCase());
console.log('ABCDEFJSGKLDFJ'.isUpperCase());