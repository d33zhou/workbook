/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const occurrences = {};

  for (let i = 0; i < nums.length; i++) {
    occurrences[nums[i]]
      ? delete occurrences[nums[i]]
      : (occurrences[nums[i]] = true);
  }

  return Object.keys(occurrences)[0];
};

console.log(singleNumber([2, 2, 1]));
