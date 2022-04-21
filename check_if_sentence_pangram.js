/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  // assuming sentence will only contain lowercase alphabet letters (also no spaces)
  // loop through each letter and add letter to array if not already included
  // once array reaches length of 26 then return true, otherwise false

  const letters = [];

  for (let i = 0; i < sentence.length; i++) {
    if (!letters.includes(sentence[i])) {
      letters.push(sentence[i]);
    }

    if (letters.length === 26) {
      return true;
    }
  }

  return false;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("somethingelse")); // false
