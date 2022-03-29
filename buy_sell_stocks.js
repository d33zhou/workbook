/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // looking for the difference between each number in the array
  // can loop through each array element, and take the difference
  // only return positive values

  // find the largest and smallest numbers, and check if smallest is before largest
  // if YES, then return that as the max profit
  // if NO, then check largest against second smallest, AND smallest against second largest
  // if both are valid (i.e. smallest is before largest), then return the higher of the profits
  // if only one is valid, return that as the max profit
  // if neither is valid, then check the third set etc.

  // keep in mind, only need to return the highest profit, NOT the index or actual amounts << key point

  // for (let i = 0; i < prices.length; i++) {}

  // for (let b = 0; b < prices.length; b++) {
  //   for (let s = 0; s < prices.length; s++) {
  //     if (s > b && prices[s] - prices[b] > max) {
  //       max = prices[s] - prices[b];
  //     }
  //   }
  // }

  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let max = Math.max(...prices);
    let min = Math.min(...prices);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
