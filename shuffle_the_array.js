/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const arr1 = nums.slice(0, n);
  const arr2 = nums.slice(n);
  const shuffled = [];

  for (let i = 0; i < n; i++) {
    shuffled.push(arr1[i]);
    shuffled.push(arr2[i]);
  }

  return shuffled;
};
