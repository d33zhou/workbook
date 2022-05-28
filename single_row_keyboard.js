/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function (keyboard, word) {
  let totalTime = 0;
  let pointer = 0;

  for (let i = 0; i < word.length; i++) {
    let target = keyboard.indexOf(word[i]);

    totalTime += Math.abs(target - pointer);
    pointer = target;
  }

  return totalTime;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")); // 4
