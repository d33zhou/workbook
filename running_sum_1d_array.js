/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  let currentTotal = 0;
  const runningArray = [];

  for (let i = 0; i < nums.length; i++) {
    runningArray.push(nums[i] + currentTotal);
    currentTotal += nums[i];
  }

  return runningArray;
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
