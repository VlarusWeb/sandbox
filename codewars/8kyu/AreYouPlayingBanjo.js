// ❓ Description

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// ✅ Solution

function areYouPlayingBanjo(name) {
  let msg = "";
  if(name[0].match(/r/i)) {
    msg = `${name} plays banjo`;
  } else {
    msg = `${name} does not play banjo`;
  }
  return msg;
}

console.log(areYouPlayingBanjo("Adam")); //"Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul")); //"Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo")); //"Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo")); //"bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf")); //"rols plays banjo");
