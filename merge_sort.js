// recursively split arrays down to 1 element
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const split = Math.floor(array.length / 2);

  const leftArray = array.slice(0, split);
  const rightArray = array.slice(split);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// inputs --> two sorted arrays
const merge = (array1, array2) => {
  const output = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (array1[pointer1] && array2[pointer2]) {
    if (array1[pointer1] <= array2[pointer2]) {
      output.push(array1[pointer1]);
      pointer1++;
    } else {
      output.push(array2[pointer2]);
      pointer2++;
    }
  }

  return [...output, ...array1.slice(pointer1), ...array2.slice(pointer2)];
};

const input = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];
const output = mergeSort(input);
console.log(output);
