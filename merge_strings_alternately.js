/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let mergedWord = "";
  let maxLength = 0;

  word1.length >= word2.length
    ? (maxLength = word1.length)
    : (maxLength = word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) {
      mergedWord += word1[i];
    }

    if (word2[i]) {
      mergedWord += word2[i];
    }
  }

  return mergedWord;
};

console.log(mergeAlternately("abc", "pqrs")); // "apbqcrs"
