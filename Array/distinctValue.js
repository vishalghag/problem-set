// Write a function that takes n number of arrays of integers and returns an array of distinct integers
//  i.e the integers should appear only once among the input arrays.
//   Example: [1,2,3], [2,3,4], [3,4,5] => [1,5].
//    Note: number of arrays can be n. The function should work when inputs are increased or decreased.

const array1 = [1, 2, 3]; // This is the first group of numbers
const array2 = [2, 3, 4]; // This is the second group of numbers
const array3 = [3, 4, 5]; // This is the third group of numbers

// This function will find numbers that appear only once in all the groups
const distincArray = (...arrays) => {
  const afterRemoveBracket = []; // This will hold all the numbers from all groups
  let obj = {}; // This will help us count how many times each number appears
  const result = []; // This will store the numbers that appear only once

  // This loop goes through each group and adds all the numbers to afterRemoveBracket
  arrays.map((ele) => ele.map((num) => afterRemoveBracket.push(num)));

  // This loop counts how many times each number appears
  for (let charc of afterRemoveBracket) {
    if (obj[charc] > 0) {
      // If the number is already in the object, increase its count
      obj[charc]++;
    } else {
      // If the number is not in the object, set its count to 1
      obj[charc] = 1;
    }
  }

  // This loop finds all numbers that appear only once
  for (let key in obj) {
    if (obj[key] === 1) {
      // If the number appears only once, add it to the result
      result.push(parseInt(key)); // Convert the key back to a number and add it to the result
    }
  }

  return result; // Return the numbers that appear only once
};

console.log(distincArray(array1, array2, array3)); // This shows the result in the console
