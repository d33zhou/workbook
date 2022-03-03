/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
  // loop through each string in the array
  // compare each string by letter to check if all match
  // aggregate the matching letters in a variable
  // return the aggregation when a letter doesn't match
  
  let prefix = "";
  let compareFirst = strs[0];
  
  // check empty word
  if (compareFirst.length < 1) {
      return prefix;
  }
  
  for (let x = 0; x < compareFirst.length; x++) {
      for (let y = 1; y < strs.length; y++) {
          if (strs[y][x] !== compareFirst[x]) {
              return prefix;
          }
      }
      
      prefix += compareFirst[x];
  }
  
  return prefix;
};