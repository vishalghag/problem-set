// Move Zeros to the End: Given an array of integers,
// move all the zeros to the end while maintaining the order of the other elements.

// Input array containing numbers, including zeros
const arr = [0, 5, 0, 3, 0, 8, 12, 0, 0, 7];

// Function to move all zeros to the end of the array while preserving the order of non-zero elements
const moveZero = (arr) => {
  // Initialize two arrays to store non-zero elements and zeros
  let result = [];
  let zeros = [];

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // If the current element is non-zero, push it to the 'result' array
      result.push(arr[i]);
    } else {
      // If the current element is zero, push it to the 'zeros' array
      zeros.push(arr[i]);
    }
  }

  // Concatenate the 'result' array with the 'zeros' array to move zeros to the end
  return [...result, ...zeros];
};

// Call the function to move zeros to the end and log the result
console.log(moveZero(arr));

const moveZero1 = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[index];
      console.log(temp, "temp");
      nums[index] = nums[i];
      console.log(nums[index], "index");
      nums[i] = temp;
      console.log(nums[i], "i");
      index++;
    }
  }
  return nums;
};

const arr1 = [0, 5, 0, 3, 0, 8, 12, 0, 0, 7];
console.log(moveZero1(arr1), "accepted by leetcode");
