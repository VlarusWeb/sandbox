// ❓ Description

// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

// ✅ Solution

function greet(name) {
  if(name) {
    return `hello ${name}!`;
  } else {
    return null;
  }
}

console.log(greet("Niks"));
console.log(greet(""));
console.log(greet(null));

