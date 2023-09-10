// ❓ Description

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ✅ Solution

function XO(str) {
  str = str.toLowerCase();
  const obj = {};
  for(let char of str) {
    if(char === "x" || char === "o") {
      if(obj[char] = obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
  } return obj.x === obj.o;
}

console.log(`return "${XO("ooxx")}", should be "true"`);
console.log(`return "${XO("xooxx")}", should be "false"`);
console.log(`return "${XO("ooxXm")}", should be "true"`);
console.log(`return "${XO("abracadabra")}", should be "true"`); // becouse  both x and o are not present and both return undefined!
console.log(`return "${XO("oozzyy")}", should be "false"`);
console.log(`return "${XO("XoroxAndOxorx")}", should be "true"`);