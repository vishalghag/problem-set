const num = [, 10, 4, 6, 2, 7, 1, 9, 8, 20, 20]; // Define the input array

const secondLargestNum = (num) => {
  // Define a function called secondLargestNum that takes an array as input

  let firstLargest = -Infinity;
  // Store the largest number found so far
  // Start with -Infinity so any number in the array will be larger

  let secondLargest = -Infinity;
  // Store the second largest number found so far
  // Also start with -Infinity

  for (let i = 0; i < num.length; i++) {
    // Loop through every element in the array

    if (num[i] > firstLargest) {
      // Check if the current number is larger than the current largest number

      secondLargest = firstLargest;
      // Before updating the largest number,
      // save the old largest number as the second largest

      firstLargest = num[i];
      // Update the largest number with the current number
    } else if (num[i] > secondLargest && num[i] != firstLargest) {
      // If the current number is not larger than the largest,
      // check if it is larger than the second largest

      secondLargest = num[i];
      // Update the second largest number
    }
  }

  return secondLargest;
  // Return the second largest number found in the array
};

console.log(secondLargestNum(num));
// Call the function and print the result to the console
