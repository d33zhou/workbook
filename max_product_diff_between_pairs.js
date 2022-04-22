/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = function (nums) {
  // pair 1 --> highest 2 nums
  // pair 2 --> lowest 2 nums
  // sort array, take last and first 2 elements

  nums.sort((a, b) => a - b);

  const maxProduct = nums[nums.length - 1] * nums[nums.length - 2];
  const minProduct = nums[0] * nums[1];

  return maxProduct - minProduct;
};

console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
