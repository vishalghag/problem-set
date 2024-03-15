// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

const nums = [4, 1, 2, 1, 2, 4, 6]; // Define the input array

var singleNumber = function (nums) {
  // Define a function called singleNumber that takes an array nums as input
  let result = []; // Initialize an empty array to store the single numbers
  const newArr = nums.sort((a, b) => a - b); // Sort the input array in ascending order

  for (let i = 0; i < newArr.length; i++) {
    // Iterate through the sorted array
    if (newArr[i] === newArr[i + 1]) {
      // Check if the current number is equal to the next number
      i++; // If it is, skip the next number and move to the next pair
    } else {
      result.push(newArr[i]); // If it's not, push the current number to the result array
    }
  }
  return result; // Return the array containing the single numbers
};

console.log(singleNumber(nums)); // Call the singleNumber function with the input array and log the result
