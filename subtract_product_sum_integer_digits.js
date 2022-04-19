/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  // split digits into array
  // use 2 reducer funcs to calc sum and product
  // return diff

  const digitsString = n.toString().split("");
  const digits = digitsString.map((num) => Number(num));

  const product = digits.reduce((a, b) => a * b);
  const sum = digits.reduce((a, b) => a + b);

  return product - sum;
};

console.log(subtractProductAndSum(234)); // 15
