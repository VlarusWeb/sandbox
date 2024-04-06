// ❔ Description

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!



// ✅ Solution

function sayHello(name, city, state) {
  return "Hello, " + name.join(" ") + "! " + "Welcome to " + city + ", " + state + "!";
}

// ❕❔ Tests

console.log(sayHello(["John", "Smith"], "Phenix", "Arizona"));
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));
console.log(sayHello(["John", "Week"], "New York City", "New York State"));
console.log(sayHello(["John", "Snow"], "the Tower of joy", "Red Mountains of Dorne"));