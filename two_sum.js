/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function (nums, target) {
//   for (let x = 0; x < nums.length; x++) {
//     for (let y = 1; y < nums.length; y++) {
//       if (x !== y && nums[x] + nums[y] === target) {
//         return [x, y];
//       }
//     }
//   }
// };

// Refactored from O(n^2) to O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (map[difference] !== undefined) {
      return [i, map[difference]];
    }

    map[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
