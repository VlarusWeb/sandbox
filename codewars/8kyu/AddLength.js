//❔ Desctiption

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.



// ✅ Solution

function addLength(str) {
  let result = [];
  str.split(" ").forEach(word => result.push(`${word} ${word.length}`));
  return result;
}

// ❕❔ Tests

console.log(addLength("I am a good programmer!"));
console.log(addLength("Hello word!"));
console.log(addLength("I'm all the way up!"));
console.log(addLength("Nothing can stop me!"));
console.log(addLength("Today is that day!"));