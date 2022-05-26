/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
  const map = {};
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      output += map[nums[i]].length;
      map[nums[i]].push(i);
    } else {
      map[nums[i]] = [i];
    }
  }

  return output;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
