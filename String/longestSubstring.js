// 3. Longest Substring Without Repeating Characters

// Input: s = "abcabcbb";
// Output: 3;

const input = "pwwkew"; // Define the input string

const longestSubString = (input) => {
  // Define a function called longestSubString that takes an input string
  let longestSubString = 0; // Initialize a variable to store the length of the longest substring
  let set = new Set(); // Initialize a set to keep track of unique characters in the current substring
  let left = 0; // Initialize a pointer for the left boundary of the current substring
  let right = 0; // Initialize a pointer for the right boundary of the current substring

  while (right < input.length) {
    // Loop until the right boundary reaches the end of the input string
    let letter = input[right]; // Get the character at the current right boundary
    if (!set.has(letter)) {
      // Check if the set does not contain the current character
      set.add(letter); // Add the current character to the set
      longestSubString = Math.max(longestSubString, set.size); // Update the length of the longest substring
      right++; // Move the right boundary to the right
    } else {
      // If the set already contains the current character
      set.delete(input[left]); // Delete the character at the left boundary from the set
      left++; // Move the left boundary to the right
    }
  }
  return longestSubString; // Return the length of the longest substring
};

console.log(longestSubString(input)); // Call the longestSubString function with the input string and log the result
