/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let remaining = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
      remaining--;
    }
  }

  nums.sort();

  return remaining;
};
