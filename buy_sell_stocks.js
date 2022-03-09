/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // looking for the difference between each number in the array
  // can loop through each array element, and take the difference
  // only return positive values

  let max = 0;

  for (let b = 0; b < prices.length; b++) {
    for (let s = 0; s < prices.length; s++) {
      if (s > b && prices[s] - prices[b] > max) {
        max = prices[s] - prices[b];
      }
    }
  }

  return max;
};
