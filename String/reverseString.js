//wap to reverse a string but in this manner Output: ym eman si lahsiv gahg

const str = "my name is vishal ghag";

const reverseString = (str) => {
  // Split the string into an array of words
  const words = str.split(" ");

  // Iterate through each word and reverse it
  const reversedWords = words.map((word) => {
    // Convert each word into an array of characters, reverse it, and join it back
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a single string
  return reversedWords.join(" ");
};

console.log(reverseString(str)); // Output: ym eman si lahsiv gahg
