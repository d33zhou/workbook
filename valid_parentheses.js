/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // LIFO approach -- last opened first closed
  // push all the 'openers' to an array
  // on each 'closer', check the most recent 'opener' matches
  // if matches, then remove closer and opener from array
  // if does not match, return false
  // once the array is empty from all matching, return true

  const brackets = s.split("");
  const copy = brackets.slice();
  let transpose = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === ")") {
      if (copy[i - 1 - transpose] === "(") {
        copy.splice(i - 1 - transpose, 2);
        transpose += 2;
      } else {
        return false;
      }
    }

    if (brackets[i] === "]") {
      if (copy[i - 1 - transpose] === "[") {
        copy.splice(i - 1 - transpose, 2);
        transpose += 2;
      } else {
        return false;
      }
    }

    if (brackets[i] === "}") {
      if (copy[i - 1 - transpose] === "{") {
        copy.splice(i - 1 - transpose, 2);
        transpose += 2;
      } else {
        return false;
      }
    }
  }

  return copy.length === 0 ? true : false;
};

console.log(isValid("([{}])()"));
