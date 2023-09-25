//Find the Maximum Element: Find the maximum element in an array without using any built-in functions.

// Define an array of numbers
const largestnum = [7, 99, 33, 2, 1, 88, 6];

// Define a function called 'largest' which takes an array 'num' as a parameter
const largest = (num) => {
  // Initialize a variable 'largest' to negative infinity, which will store the largest number found
  let largest = -Infinity;

  // Iterate through each element of the 'num' array using a for loop
  for (let i = 0; i < num.length; i++) {
    // Check if the current element (num[i]) is greater than the current largest number (lar)
    if (num[i] > largest) {
      // If the current element is greater, update the 'largest' variable with the current element
      largest = num[i];
    }
  }

  // After looping through all elements, 'largest' will contain the largest number in the array
  return largest; // Return the largest number
}

// Call the 'largest' function with the 'largestnum' array as an argument and log the result to the console
console.log(largest(largestnum));
