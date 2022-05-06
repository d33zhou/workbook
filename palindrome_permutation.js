/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
  const map = {};

  for (const char of s) {
    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  const oddResults = Object.values(map).filter((num) => num % 2 !== 0);
  return oddResults.length > 1 ? false : true;
};

console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("carerac")); // true
