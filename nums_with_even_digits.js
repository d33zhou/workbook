/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  let evenNum = 0;

  for (const num of nums) {
    if (num.toString().length % 2 === 0) {
      evenNum++;
    }
  }

  return evenNum;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
