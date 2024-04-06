// wap for finding out which number is missing in array

// Input array of numbers
let nums = [1, 1];

// Function to find missing numbers in the array
const missingArray = (nums) => {
  // Create a new set from the input array to efficiently check for presence
  let newSet = new Set(nums);
  // Initialize an empty result array to store missing numbers
  let result = [];

  // Iterate through numbers from 1 to the length of the input array
  for (let i = 1; i <= nums.length; i++) {
    // Check if the number 'i' is not present in the set
    if (!newSet.has(i)) {
      // If 'i' is missing, push it to the result array
      result.push(i);
    }
  }

  // Return the result array containing missing numbers
  return result;
};

// Call the function to find missing numbers and log the result
console.log(missingArray(nums));
