// ❔ Description

//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// ✅ Solution

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// ❔! Tests

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["I", "programmer", "am", "a", "good"]));
console.log(sortByLength(["wednesday", "monday", "tuesday"]));
console.log(sortByLength(["35323", "3", "347", "43", "3593"]));
console.log(sortByLength(["year", "month", "week", "day", "hour", "minute"]));