// We have two words we want to mix together
const str1 = "hello";
const str2 = "world123";

// This function mixes the two words by taking letters from each one
const mergeTwoStr = (str1, str2) => {
  let res = ""; // This will be our mixed word
  const maxLength = Math.max(str1.length, str2.length); // Find out how long the longest word is
  console.log(maxLength);

  // Look at each letter in the words
  for (let i = 0; i < maxLength; i++) {
    // If we have a letter in the first word, add it to the mixed word
    if (i < str1.length) {
      res += str1[i];
    }
    // If we have a letter in the second word, add it to the mixed word
    if (i < str2.length) {
      res += str2[i];
    }
  }

  return res; // Give back the mixed word
};

// Print the mixed word to see the result
console.log(mergeTwoStr(str1, str2)); // Output: hweolrllod123
