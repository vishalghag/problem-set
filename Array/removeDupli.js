//wap to remove dupli from and array

// Input array with duplicate elements
const arr = [2, 1, 3, 1, 2, 5, 6, 5, 6, 8, 9];

// Function to remove duplicate elements from the array
const removeDupli = (arr) => {
    // Initialize an empty result array to store unique elements
    let result = [];

    // Iterate through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is not already in the result array
        if (!result.includes(arr[i])) {
            // If it's not in the result array, add it to the result
            result.push(arr[i]);
        }
    }

    // Return the result array containing unique elements
    return result;
}

// Call the function to remove duplicates and log the result
console.log(removeDupli(arr));

