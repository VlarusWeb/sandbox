// ❓ Description

// Story
// Archeologists discovered some ancient books written in unknown language. They try to find out what is written in that language, but some characters are not so clear because of time. They writing down that ancient words, but when character in word is not quite clear they write ? instead. Then archeologists try to guess which character it can be in each position of ?. When there are multiples unknown characters in word it is hard to imagine what word it can be.
// Task
// To help archeologists we can write a function which will return all possible words that can be obtained from given characters. You get word with question marks inside and array of symbols that can substitute question marks in each position.
// Example
// for word: w?rld and possible characters ['eoi'] we can get:
// ['werld', 'world','wirld']
// for word: t?p? and possible characters ["oa", "ei"] we can get:
// ['tope', 'topi','tape', 'tapi']
// Function type
// As input you receive parameters:
// word: non-empty string with question marks (or possibly without question marks). Each question mark represents characters we want to guess. For each ? will be provided a string of possible chars in the chars array.
// chars: array of non-empty strings. It is an array of possible characters for each question mark. Each item (string) of the chars array corresponds to the ? in word. If word does not contain ? an empty array of chars will be provided. All inputs will be valid.
// Function should return an array of all possible words. No sorting is needed.

// Good luck!