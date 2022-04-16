/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
  // each char in jewels is unique --> break each char into array element
  // stones can be jewels --> loop and check if element is in jewel array
  // return # of jewels in stone collection --> increment counter

  let counter = 0;
  const jewelsArray = jewels.split("");

  for (const stone of stones) {
    if (jewelsArray.includes(stone)) {
      counter++;
    }
  }

  return counter;
};

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
