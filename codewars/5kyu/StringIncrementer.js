// ❔ Description

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



// ✅ Solution

function incrementString(string) {
  if (!string.match(/[0-9]/)) {
    return string + 1;
  }
  const splitedNumPart = parseInt(string.split("").reverse().join("")).toString().split("").reverse().join("");
  const incrementedNum = (+splitedNumPart + 1).toString();
  const zeros = [];
  if (splitedNumPart.includes("0")) {
    for (let i = 0; i < splitedNumPart.length - incrementedNum.length; i++) {
      zeros.push("0");
    }
  } return string.slice(0, -splitedNumPart.length) + zeros.join("") + incrementedNum;
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foobar"));
console.log(incrementString("foobar1"));
console.log(incrementString("1"));
console.log(incrementString("009"));
console.log(incrementString("foo99bar99"));