/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
  const unsorted = s.split(" ");
  const sorted = [];

  for (let i = 0; i < unsorted.length; i++) {
    let position = unsorted[i][unsorted[i].length - 1];

    sorted[position - 1] = unsorted[i].slice(0, unsorted[i].length - 1);
  }

  return sorted.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3")); // This is a sentence
