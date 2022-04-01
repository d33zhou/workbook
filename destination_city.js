/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  // loop through array of arrays (path)
  // put each starter city into an array
  // loop through arrays again
  // remove each ending city from the array
  // last item is the destination

  const cities = [];

  for (let i = 0; i < paths.length; i++) {
    cities.push(paths[i][1]);
  }

  for (let j = 0; j < paths.length; j++) {}

  return cities[0];
};
