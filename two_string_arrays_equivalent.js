/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  if (word1.join("") === word2.join("")) {
    return true;
  }

  return false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2)); // true
