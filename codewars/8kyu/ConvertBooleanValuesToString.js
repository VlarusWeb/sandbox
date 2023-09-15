// ❓ Description

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// ✅ Solution

function boolToWord( bool ){
    if(bool) {
      return "Yes";
    } else {
      return "No";
    }
  }

console.log(boolToWord(true));
console.log(boolToWord(false));



// 🆕✅ new Solution

const boolToWords = (bool) => bool ? "Yes" : "No";

console.log(boolToWords(true));
console.log(boolToWords(false));