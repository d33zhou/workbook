/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
  const singles = [];
  const multiples = [];

  for (const num of nums) {
    if (!multiples.includes(num)) {
      if (!singles.includes(num)) {
        singles.push(num);
      } else {
        const toRemoveIndex = singles.indexOf(num);
        singles.splice(toRemoveIndex, 1);
        multiples.push(num);
      }
    }
  }

  const sum = singles.reduce((a, b) => a + b, 0);

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1])); // 0
