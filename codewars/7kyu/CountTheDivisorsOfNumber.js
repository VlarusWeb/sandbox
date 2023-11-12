// ❔ Description

// Count the number of divisors of a positive integer n.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// ✅ Solution

function getDivisionCnt(n) {
  let divisors = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors++;
      if (i !== n / i) {
      divisors++;
      }
    }
  } return divisors;
}

console.log(getDivisionCnt(1));  //Should return 1
console.log(getDivisionCnt(10)); //Should return 4
console.log(getDivisionCnt(11)); //Should return 2
console.log(getDivisionCnt(54)); //Should return 8