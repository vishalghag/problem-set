const datas = {
  data: [
    {
      one: [{ price: 30 }, { price: 40 }, { price: 10 }],
      two: [{ price: 60 }, { price: 40 }, { price: 10 }],
      three: [{ price: 90 }, { price: 40 }, { price: 10 }],
    },
  ],
};

// Create an empty object to store the result
const result = {};
let sum = 0;

// Iterate over each group in the datas.data array
datas.data.forEach((group) => {
  // For each group, iterate over its keys (one, two, three)
  Object.keys(group).map((key) => {
    // Extract prices array for the current key (one, two, three)
    const prices = group[key].map((item) => item.price);
    // Calculate the sum of prices using the reduce() function
    const sum = prices.reduce((total, price) => total + price, 0);

    // Store the sum of prices for the current key in the result object
    result[key] = sum;
  });
});

// Print the result object containing the sum of prices for each key (one, two, three)
console.log(result);
