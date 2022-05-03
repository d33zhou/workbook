const insertionSort = (array) => {
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let current = i;

    while (arr[current] < arr[current - 1]) {
      [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
      current--;
    }
  }

  return arr;
};

const input = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];
const output = insertionSort(input);
console.log(output);
