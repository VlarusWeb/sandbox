// ❔ Description

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"



// ✅ Solution

const removeUrlAnchor = (url) => url.includes("#") ? url.slice(0, url.indexOf("#")) : url;

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
console.log(removeUrlAnchor("www.codewars.com/katas"));


// ❕✅ New Solution

const removeAnchorFromUrl = (url) => url.split("#")[0];

console.log(removeAnchorFromUrl("www.codewars.com#about"));
console.log(removeAnchorFromUrl("www.codewars.com/katas/?page=1#about"));
console.log(removeAnchorFromUrl("www.codewars.com/katas"));