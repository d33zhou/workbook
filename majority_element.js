/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const midpoint = nums.length / 2;

  nums.sort((a, b) => a - b);

  const uniqueNums = [...new Set(nums)];

  for (let i = 0; i < uniqueNums.length; i++) {
    let occurrences = nums.filter((num) => num === uniqueNums[i]).length;
    if (occurrences >= midpoint) {
      return uniqueNums[i];
    }
  }

  return false;
};

console.log(majorityElement([3, 2, 3])); // 3
