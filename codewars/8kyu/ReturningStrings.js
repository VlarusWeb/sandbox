// ❓ Description

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// ✅ Solution

function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

console.log(greet("Olegs"));



// ❕✅ New Solution

const greeting = (name) => `Hello, ${name} how are you doing today?`;

console.log(greeting("Alenka"));