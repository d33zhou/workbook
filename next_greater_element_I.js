/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const output = [];

  for (let i = 0; i < nums1.length; i++) {
    let startingIndex = nums2.indexOf(nums1[i]);
    let found = false;

    for (let j = startingIndex + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        output.push(nums2[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      output.push(-1);
    }
  }

  return output;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
