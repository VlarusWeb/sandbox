// ❔ Description

// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.



// ✅❕ Solution

function to24hourtime(hour, minute, period) {
    let minutes = (minute < 10) ? "0" + minute : minute;
    if (period === "pm" && hour !== 12) {
      return `${hour + 12}${minutes}`;
    } else if (period === "am" && hour < 10) {
      return `0${hour}${minutes}`;
    } else if (period === "am" && hour === 12) {
      return `00${minutes}`;
    } else {
      return `${hour}${minutes}`;
    }
  }

// ❕❔ Tests

console.log(to24hourtime(1, 5, "pm"));
console.log(to24hourtime(1, 5, "am"));
console.log(to24hourtime(12, 55, "pm"));
console.log(to24hourtime(12, 0, "pm"));
console.log(to24hourtime(12, 15, "am"));



// ✅❕ Other solution

const to24hourTime = (hour, minute, period) => (period === "am" && hour === 12 || period === "pm" && hour < 12) ? (period === "am" && hour === 12) ? `00${minute.toString().padStart(2, "0")}` : `${hour + 12}${minute.toString().padStart(2, "0")}` : `${hour.toString().padStart(2, "0")}${minute.toString().padStart(2, "0")}`;

// ❕❔ Tests

console.log(to24hourTime(1, 5, "pm"));
console.log(to24hourTime(1, 5, "am"));
console.log(to24hourTime(12, 55, "pm"));
console.log(to24hourTime(12, 0, "pm"));
console.log(to24hourTime(12, 15, "am"));