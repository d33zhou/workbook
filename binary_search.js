const binarySearch = (array, target, path = []) => {
  const middleIndex = Math.floor(array.length / 2);

  path.push(array[middleIndex]);

  if (array[middleIndex] === target) {
    return path;
  } else {
    if (array.length <= 1) {
      return "Value Not Found";
    }

    if (array[middleIndex] > target) {
      return binarySearch(array.slice(0, middleIndex), target, path);
    } else {
      return binarySearch(array.slice(middleIndex + 1), target, path);
    }
  }
};

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];
const target = 2;
console.log(binarySearch(testArray, target));
