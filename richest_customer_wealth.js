/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let maxAmount = 0;

  for (let m = 0; m < accounts.length; m++) {
    let currentWealth = accounts[m].reduce((a, b) => a + b);

    if (currentWealth > maxAmount) {
      maxAmount = currentWealth;
    }
  }

  return maxAmount;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6
