/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  // brute force --> for each element, loop array and count smaller j's
  // O(n^2)

  const smallerArray = [];

  for (let i = 0; i < nums.length; i++) {
    smallerArray.push(nums.filter((num) => num < nums[i]).length);
  }

  return smallerArray;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
