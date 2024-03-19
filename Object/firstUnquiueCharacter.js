// 387. First Unique Character in a String
// Easy
// Topics
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Define a variable 's' and assign it a string value "loveleetcode".
let s = "loveleetcode";

// Define a function 'firstUniqChar' that takes a string 's' as input.
var firstUniqChar = function (s) {
  // Create an empty object called 'obj' to store characters and their frequencies.
  let obj = {};

  // Loop through each character in the input string 's'.
  for (let char of s) {
    // Check if the character already exists in 'obj'.
    if (obj[char] > 0) {
      // If yes, increment its frequency.
      obj[char]++;
    } else {
      // If no, set its frequency to 1.
      obj[char] = 1;
    }
  }

  // Loop through each key (character) in 'obj'.
  for (let key in obj) {
    // Check if the frequency of the character is 1 (unique).
    if (obj[key] === 1) {
      // If yes, return the index of the first occurrence of the character in the input string 's'.
      return s.indexOf(key);
    }
  }

  // If no unique character is found, return -1.
  return -1;
};

// Call the 'firstUniqChar' function with the string 's' as input and print the result.
console.log(firstUniqChar(s));
