/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  arr.sort((a, b) => a - b);

  const numOccurrences = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      counter++;
    } else {
      if (numOccurrences.includes(counter)) {
        return false;
      } else {
        numOccurrences.push(counter);
        counter = 0;
      }
    }
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
