// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let clearStr = filteringString(s);
  let left = 0;
  let right = clearStr.length - 1;
  while (left < right) {
    // console.log(clearStr[left] === clearStr[right]);
    if (clearStr[left] !== clearStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const filteringString = (str) => {
  let clearStr = "";
  let char = str.toLowerCase();
  let alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < char.length; i++) {
    if (alphaNum.indexOf(char[i]) !== -1) {
      clearStr += char[i];
    }
  }
  return clearStr;
};

console.log(isPalindrome(s));
