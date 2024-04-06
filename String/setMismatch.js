// 645. Set Mismatch
// You have a set of integers s, which originally contains all the numbers from 1 to n.
//  Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,

// which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

const nums = [2, 3, 2];

var findErrorNums = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let newSet = new Set(nums);
  let missNum = [];

  for (let i = 0; i < sorted.length; i++) {
    if (nums[i] === nums[i + 1]) {
      missNum.push(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!newSet.has(i)) {
      missNum.push(i);
    }
  }
  return missNum;
};

console.log(findErrorNums(nums));
