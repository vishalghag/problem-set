const emp = [
  { name: 'a', sal: 200 },
  { name: 'b', sal: 200 },
  { name: 'a', sal: 500 },
  { name: 'b', sal: 200 },
  { name: 'c', sal: 300 }
];

// This is an empty object where we will store the total salaries
let obj = {};

// This function will add up the salaries for each name
const countSalary = (emp) => {
  // Go through each item in the list
  for (let { name, sal } of emp) {
    // If we already have this name in the object, add the salary to it
    if (obj[name]) {
      obj[name] += sal;
    } else {
      // If this is a new name, start with the current salary
      obj[name] = sal;
    }
  }
};

// Run the function to count the salaries
countSalary(emp);

// Show the result
console.log(obj, 'obj');
