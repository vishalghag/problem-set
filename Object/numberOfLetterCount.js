// wap to count the letter in string

// Input string
const str = "Vishal Ghag";

// Function to count the letters in a string and remove extra spaces
const countString = (str) => {
  // Initialize an empty object to store letter counts
  let obj = {};

  // Remove extra spaces and convert the string to lowercase
  let data = str.toLowerCase().split(" ").join("");

  // Iterate through each character in the cleaned string
  for (let key of data) {
    // Check if the character is already in the object
    if (obj[key] > 0) {
      // If yes, increment the count
      obj[key]++;
    } else {
      // If no, initialize the count to 1
      obj[key] = 1;
    }
  }

  // Return the object containing letter counts
  return obj;
};

// Call the function and log the result
console.log(countString(str));
