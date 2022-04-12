/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  const stringNum = num.toString();

  const maxNum = stringNum.replace("6", "9");

  return Number(maxNum);
};

console.log(maximum69Number("9669")); // 9969
console.log(maximum69Number("9999")); // 9999
