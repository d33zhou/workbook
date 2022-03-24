/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  s.reverse();
};

const input = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(input); // reversed
