// ❓ Description

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ✅ Solution

function findShort1(s) {
  let sArr = s.split(" ");
  let lArr = [];
  for(let word of sArr) {
    lArr.push(word.length);
  } return Math.min(...lArr);
}

// 🆕✅ Solution

const findShort = (s) => Math.min(...s.split(" ").map((w) => w.length));

console.log(findShort("I'm a good programmer!"));
console.log(findShort("Nothing can stop me, all the way up!"));