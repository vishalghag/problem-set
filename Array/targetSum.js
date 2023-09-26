// Sum of Two Numbers: Given an array of integers and a target sum, 
// find two numbers in the array that add up to the target sum.

// Input array of numbers
const arr = [4, 2, 6, 1, 8, 9];

// Target sum to find in the array
const target = 10;

// Function to find a pair of numbers in the array that add up to the target sum
const targetSum = (arr, target) => {
    // Iterate through the array with two nested loops
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Check if the sum of the current pair of elements equals the target
            if (arr[i] + arr[j] === target) {
                // If a pair is found, return the pair as an array
                return [arr[i], arr[j]];
            }
        }
    }

    // If no pair is found, return a message indicating there's no sum for the given target
    return 'No pair found that adds up to the target';
}

// Call the function to find the pair and log the result
console.log(targetSum(arr, target));
