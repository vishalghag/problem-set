// 14. Longest Common Prefix

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const input = ["dog", "racecar", "car"];

const longestPrefix = (input) => {
  if (input.length == 0) {
    return "";
  }

  for (let i = 0; i < input[0].length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[0][i] !== input[j][i]) {
        return input[0].slice(0, i);
      }
    }
  }
  return input[0];
};

console.log(longestPrefix(input));
