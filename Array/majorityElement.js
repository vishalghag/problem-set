// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const nums = [2, 4, 1, 4, 6, 2, 4];

var majorityElement = function (nums) {
  const element = {};
  let majority;
  let maxCount = 0;

  for (let num of nums) {
    if (element[num] > 0) {
      element[num]++;
    } else {
      element[num] = 1;
    }
    if (element[num] > maxCount) {
      maxCount = element[num];
      majority = num;
    }
  }

  return majority;
};

console.log(majorityElement(nums));
