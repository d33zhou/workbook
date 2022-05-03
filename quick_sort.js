const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const smallerArray = [];
  const largerArray = [];

  // using first element as the pivot
  for (let i = 1; i < array.length; i++) {
    array[i] > array[0]
      ? largerArray.push(array[i])
      : smallerArray.push(array[i]);
  }

  return [...quickSort(smallerArray), array[0], ...quickSort(largerArray)];
};

const input = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];
const output = quickSort(input);
console.log(output);
