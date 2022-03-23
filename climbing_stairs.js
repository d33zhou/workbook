/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
      return cache[n];
    }
  }
};

const cache = {};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(10)); // 89
console.log(climbStairs(20)); // 10946
