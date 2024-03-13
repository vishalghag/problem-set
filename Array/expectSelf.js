// Product of Array Except Self: Given an array nums,
//  return an array output such that output[i] is equal to the product of all
// elements in nums except nums[i].
//eg const nums = [1, 2, 3, 4];  // Output: [24, 12, 8, 6]

const nums = [2, 3, 5, 4];

const productExceptSelf = (nums) => {
  const n = nums.length;
  const result = [];

  // Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    console.log(result[i], "left");
    leftProduct *= nums[i];
  }

  // Calculate right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log(result, "right");
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
