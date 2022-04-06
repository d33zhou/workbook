/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function (num) {
  const doubleReversed = toReverse(toReverse(num));

  if (num === doubleReversed) {
    return true;
  } else {
    return false;
  }
};

const toReverse = (num) => {
  const reversed = String(num).split("").reverse().join("");

  let leadingZeroes = 0;

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === "0") {
      leadingZeroes++;
    } else {
      return Number(reversed.slice(leadingZeroes));
    }
  }

  return Number(reversed);
};

console.log(isSameAfterReversals(526)); // true
console.log(isSameAfterReversals(1800)); // false
console.log(isSameAfterReversals(0)); // true
