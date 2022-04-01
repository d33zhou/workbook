/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  // loop through array of arrays --> paths
  // put each ending city destination into a new array
  // loop through full paths array again
  // remove each ending city from the new array if there is a corresponding starting city
  // last city left in the new array is the final destination

  const cities = [];

  for (let i = 0; i < paths.length; i++) {
    cities.push(paths[i][1]);
  }

  for (let j = 0; j < paths.length; j++) {
    if (cities.includes(paths[j][0])) {
      const toRemoveCity = cities.indexOf(paths[j][0]);
      cities.splice(toRemoveCity, 1);
      j--;
    }
  }

  return cities[0];
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
); // Sao Paulo
