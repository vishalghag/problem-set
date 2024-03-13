// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Input: digits = [1, 2, 3];
// Output: [1, 2, 4];
// Input: digits = [9];
// Output: [1, 0];

const digits = [1, 2, 9]; // Initialize an array called 'digits' containing the number 9

const plusOne = (digits) => {
  // Define a function called 'plusOne' that takes an array 'digits' as input
  for (let i = digits.length - 1; i >= 0; i--) {
    // Start a loop from the last digit of the array to the first
    if (digits[i] < 9) {
      // Check if the current digit is less than 9
      digits[i] = digits[i] + 1; // Increment the current digit by 1
      return digits; // Return the updated array
    } else {
      // If the current digit is 9
      digits[i] = 0; // Set the current digit to 0
    }
  }

  digits.unshift(1); // If all digits were 9, add 1 to the beginning of the array
  return digits; // Return the updated array
};

console.log(plusOne(digits)); // Call the 'plusOne' function with the 'digits' array as input and log the result to the console
