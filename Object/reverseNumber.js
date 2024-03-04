// Define a variable to store the number we want to reverse
const num = 34;

// Function to reverse a number using built-in functions
const reverseNumber = (num) => {
  // Convert the number to a string so we can work with individual digits
  let reverse = num.toString();

  // Initialize an empty array to store the reversed digits
  let result = [];

  // Loop through each digit of the number from the end to the beginning
  for (let i = reverse.length - 1; i >= 0; i--) {
    // Push each digit into the result array in reverse order
    result.push(reverse[i]);
  }

  // Convert the array of digits back to a number and return it

  return parseInt(result.join(""));
};

// Print the result of reversing the number using the built-in function
console.log(reverseNumber(num));

// Function to reverse a number without using built-in functions
const reverseNumberWithoutInbuild = (num) => {
  // Initialize a variable to store the reversed number
  let reverse = 0;

  // Loop until the input number becomes zero
  while (num > 0) {
    // Extract the last digit of the number
    // and add it to the reversed number after shifting it one place to the left
    reverse = reverse * 10 + (num % 10);
    // Remove the last digit from the input number
    num = Math.floor(num / 10);
  }

  // Return the reversed number
  return reverse;
};

// Print the result of reversing the number without using built-in functions
console.log(reverseNumberWithoutInbuild(num));
