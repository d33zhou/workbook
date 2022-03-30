/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  const words = s.split(" ");
  const output = words.slice(0, k);

  return output.join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4)); // "Hello how are you"
