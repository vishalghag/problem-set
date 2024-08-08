const nums = [2, 4, 1, 4, 6, 2, 4];

const majority = (nums) => {
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

console.log(majority(nums));
