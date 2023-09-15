// ❓ Description

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ✅ Solution

function getCount(str) {
let vowelsCount = 0;
const vowels = ["a", "e", "o", "i", "u"];
for(char of str) {
  if(vowels.includes(char)) {
  	vowelsCount++;
    }
	}
	return vowelsCount;
}

console.log(getCount("abracadabra"));
console.log(getCount("I'm the good programmer!"));