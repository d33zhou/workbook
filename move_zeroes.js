/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      i--;
    }
  }

  for (let k = 0; k < zeroCount; k++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12, 0, 0, 0, 1, 1, 0, 0, 2, 0])); // [1,3,12,1,1,2,0,0,0,0,0,0,0,0]
