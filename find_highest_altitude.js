/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let currentAlt = 0;
  let maxAlt = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAlt += gain[i];

    if (currentAlt > maxAlt) {
      maxAlt = currentAlt;
    }
  }

  return maxAlt;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
