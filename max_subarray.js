/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = -Infinity;
  let current = 0;

  // max pointer, current subarray pointer
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];

    if (current > max) {
      max = current;
    }

    // reset the current subarray if negative
    if (current < 0) {
      current = 0;
    }
  }

  return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
