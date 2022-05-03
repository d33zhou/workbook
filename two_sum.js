/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = 1; y < nums.length; y++) {
      if (x !== y && nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
