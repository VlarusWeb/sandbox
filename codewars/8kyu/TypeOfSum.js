// ❓ Description

//Return the type of the sum of the two arguments

// ✅ Solution

function typeOfSum1(a, b) {
  return typeof(a + b);
  }

console.log(typeOfSum1(12, 1));
console.log(typeOfSum1('d', 1));
console.log(typeOfSum1(12, 'a'));
console.log(typeOfSum1('dd', ''));
console.log(typeOfSum1(true, 1));
console.log(typeOfSum1('s', false));
console.log(typeOfSum1(null, 1));
console.log(typeOfSum1('s', null));
console.log(typeOfSum1(null, undefined));
console.log(typeOfSum1(undefined, 're'));
console.log(typeOfSum1(undefined, true));
console.log(typeOfSum1(null, false));



// 🆕✅ Solution

const typeOfSum = (a, b) => typeof(a + b);

console.log(typeOfSum(12, 1));
console.log(typeOfSum('d', 1));
console.log(typeOfSum(12, 'a'));
console.log(typeOfSum('dd', ''));
console.log(typeOfSum(true, 1));
console.log(typeOfSum('s', false));
console.log(typeOfSum(null, 1));
console.log(typeOfSum('s', null));
console.log(typeOfSum(null, undefined));
console.log(typeOfSum(undefined, 're'));
console.log(typeOfSum(undefined, true));
console.log(typeOfSum(null, false));