/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
  let currentPosition = points[0]; // [x, y]
  let time = 0;

  if (points.length === 1) {
    return time;
  }

  for (let i = 1; i < points.length; i++) {
    while (
      points[i][0] - currentPosition[0] !== 0 ||
      points[i][1] - currentPosition[1] !== 0
    ) {
      let xDifference = points[i][0] - currentPosition[0];
      let yDifference = points[i][1] - currentPosition[1];

      let xMovement = 0;
      let yMovement = 0;

      if (xDifference > 0) {
        xMovement = 1;
      } else if (xDifference < 0) {
        xMovement = -1;
      }

      if (yDifference > 0) {
        yMovement = 1;
      } else if (yDifference < 0) {
        yMovement = -1;
      }

      currentPosition[0] += xMovement;
      currentPosition[1] += yMovement;
      time++;
    }
  }

  return time;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
); // 7
