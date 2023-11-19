// ❔ Description

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.



// ✅ Solution

const gooseFilter = (birds) => {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const filtered = [];
  birds.forEach(el => geese.includes(el) ? null : filtered.push(el));
  return filtered;
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]));
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));



// ❕✅ New Solution

const gooseFilterNew = (birds) => birds.filter(el => !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].includes(el));

console.log(gooseFilterNew(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
console.log(gooseFilterNew(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]));
console.log(gooseFilterNew(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));