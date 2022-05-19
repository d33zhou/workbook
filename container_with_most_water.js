/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let pointer1 = 0;
  let pointer2 = height.length - 1;

  let area = 0;
  let highestArea = 0;

  while (pointer1 < pointer2) {
    area = Math.min(height[pointer1], height[pointer2]) * (pointer2 - pointer1);
    highestArea = Math.max(area, highestArea);

    if (height[pointer1] <= height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }

  return highestArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
