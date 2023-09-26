//wap to get highest length of string in given string


// Input string containing multiple words
const str = "hellomynameisvishal hellomynameissangita hellomynameisvishu";

// Function to find the word with the highest length
const strHighestLength = (str) => {
    // Split the input string into an array of words using space as a delimiter
    const data = str.split(" ");

    // Initialize a variable to store the longest word (initialize with an empty string)
    let longest = '';

    // Iterate through each word in the array
    for (let i = 0; i < data.length; i++) {
        // Compare the length of the current word to the length of the longest word found so far
        if (data[i].length > longest.length) {
            // If the current word is longer, update the longest word
            longest = data[i];
        }
    }

    // Return the longest word
    return longest;
}

// Call the function and log the result
console.log(strHighestLength(str));
