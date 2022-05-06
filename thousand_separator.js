/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
  let s = n.toString().split("").reverse().join("");
  let output = "";

  for (let i = 0; i < s.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      output = "." + output;
    }

    output = s[i] + output;
  }

  return output;
};

console.log(thousandSeparator(987)); // "987"
console.log(thousandSeparator(1234)); // "1.234"
