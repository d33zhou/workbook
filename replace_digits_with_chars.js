/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function (s) {
  let output = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      output += s[i];
    } else {
      output += String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i]));
    }
  }

  return output;
};

console.log(replaceDigits("a1c1e1")); // abcdef
