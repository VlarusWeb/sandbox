// ❔ Description

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

const chunkArrayInGroups = (arr, size) => {
    const chunkedArray = [];
    for(let i = 0; i < arr.length; i += size) {;
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 4));
console.log(chunkArrayInGroups(["I", "am", "a", "very", "good", "programmer", "!"], 2));