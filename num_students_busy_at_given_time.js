/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function (startTime, endTime, queryTime) {
  let busy = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      busy++;
    }
  }

  return busy;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); // 1
