/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  let newString = [];
  const stringArr = s.split("");

  for (let i = 0; i < indices.length; i++) {
    newString[indices[i]] = stringArr[i];
  }

  return newString.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // leetcode
