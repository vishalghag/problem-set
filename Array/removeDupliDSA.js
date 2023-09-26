//wap to remove dupli from and array

// Define an array with duplicate values
const arr = [2, 1, 3, 1, 2, 5, 6, 5, 6, 8, 9];

// Bubble sort function to sort the array in ascending order
const bubbleSort = (arr) => {
  // Outer loop for passes through the array
  for (let i = arr.length - 1; i > 0; i--) {
    // Inner loop for comparing and swapping adjacent elements
    for (let j = 0; j < i - 1; j++) {
      // Compare adjacent elements, swap if the left one is greater
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Call a function to remove duplicates and return the result
  return removeDuplicates(arr);
}

// Function to remove duplicates from a sorted array
const removeDuplicates = (arr) => {
  let i = 0;
  let result = [];

  // Iterate through the sorted array
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // If the current element is different from the next one, add it to the result
      result.push(arr[i]);
      i++;
      arr[i] = arr[j];
    }
  }

  // Push the last element to the result (not covered in the loop)
  let lastElement = arr.pop();
  result.push(lastElement);

  return result;
}

console.log(bubbleSort(arr));

// Time Complexity: O(n^2) - Due to the nested loops in bubble sort.
