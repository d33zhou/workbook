/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let output = "";
  let remaining = num;

  for (let i = 0; i < values.length; i++) {
    if (remaining >= values[i]) {
      output += romans[i];
      remaining -= values[i];
      i--;
    }
  }

  return output;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
