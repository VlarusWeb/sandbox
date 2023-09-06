// ❓ Description

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ✅ Solution

function count(string) {
  const obj = {};
  for(char of string) {
      obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

console.log(count("aba"));
console.log(count("abba"));
console.log(count("abbra"));
console.log(count("abracadabra"));

// 🆕✅ New Solution

const countChar = (string) => (obj = {}, [...string].forEach(char => obj[char] = (obj[char] || 0) + 1), obj);

console.log(countChar("aba"));
console.log(countChar("abba"));
console.log(countChar("abbra"));
console.log(countChar("abracadabra"));