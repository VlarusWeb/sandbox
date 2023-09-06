// ❓ Description

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// ✅ Solution

function duplicateCount(string) {
  const obj = {};
  string = string.toLowerCase();
  for(let char of string) {
    obj[char] = (obj[char] || 0) + 1;
  }
  let count = 0;
  for(let key in obj) {
    if(obj[key] > 1) {
      count += 1;
    }
  } return count;
}

console.log(duplicateCount("abracadabra"));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aaBcde"));
console.log(duplicateCount("aaBbcdDde"));
console.log(duplicateCount("AbraCadabra"));
console.log(duplicateCount("aBbA"));
console.log(duplicateCount(""));



// 🆕✅ New Solution

function duplicateCounter(string) {
  const obj = {};
  [...string.toLowerCase()].forEach(char => obj[char] = (obj[char] || 0) + 1);
  let count = 0;
  for(let key in obj) {
    if(obj[key] > 1) {
      count++;
    }
  } return count;
}

console.log(duplicateCounter("abracadabra"));
console.log(duplicateCounter("abcde"));
console.log(duplicateCounter("aaBcde"));
console.log(duplicateCounter("aaBbcdDde"));
console.log(duplicateCounter("AbraCadabra"));
console.log(duplicateCounter("aBbA"));
console.log(duplicateCounter(""));