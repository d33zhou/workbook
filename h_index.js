// determine h such that h or higher occurs at least h times
// input --> array of int 0..n
// output --> int
const hIndex = (cites) => {
  // sort array, count from highest down

  cites.sort((a, b) => b - a);

  const uniqueIndex = [];

  // unique array of only each valid index
  for (let i = 0; i < cites.length; i++) {
    !uniqueIndex.includes(cites[i]) ? uniqueIndex.push(cites[i]) : "";
  }

  // evaluate array from largest to smallest index
  for (let i = 0; i < uniqueIndex.length; i++) {
    let counter = 0;

    for (const cite of cites) {
      if (cite < uniqueIndex[i]) {
        break;
      }

      counter++;
    }

    if (counter >= uniqueIndex[i]) {
      return uniqueIndex[i];
    }
  }

  return 0;
};

console.log(hIndex([1, 4, 1, 4, 2, 1, 3, 5, 6])); // 4
