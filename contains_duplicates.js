/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const duplicates = [];

  for (let num of nums) {
    if (duplicates.includes(num)) {
      return true;
    }

    duplicates.push(num);
  }

  return false;
};
