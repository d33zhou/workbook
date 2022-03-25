/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  let base = s.split("");

  for (let i = 0; i < t.length; i++) {
    const toRemoveIndex = base.indexOf(t[i]);

    if (toRemoveIndex === -1) {
      return t[i];
    } else {
      base.splice(toRemoveIndex, 1);
    }
  }
};

console.log(findTheDifference("a", "aa")); // a
