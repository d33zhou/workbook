/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  // trim leading and trailing spaces from s
  // find index of last space
  // slice the word starting from the index after the last space
  // return length of that word

  const trimmedS = s.trim();
  const lastSpaceIndex = trimmedS.lastIndexOf(" ");

  const lastWord = trimmedS.slice(lastSpaceIndex + 1);

  return lastWord.length; // should not include trailing spaces already
};
