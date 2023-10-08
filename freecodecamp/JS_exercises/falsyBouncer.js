// ❔ Description

// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// ✅ Solution

const bouncer = (arr) => [...arr.filter((el) => el ? el : null)];

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([7, " ", "", false, "10"]));