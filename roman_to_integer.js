/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  // read characters from left to right (high to low)
  // add to a counter the value based on the letter
  // return the sum of the counter
  
  // for subtractions: if following letter is > current, then subtract current
  // otherwise add the current to the counter
  
  // ASSUMPTIONS:
  // string will be a valid string
  // string is not null
  
  let total = 0;
  
  const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };
  
  for (let i = 0; i < s.length; i++) {
      
      if (i === s.length - 1 || romanValues[s[i]] >= romanValues[s[i + 1]]) {
          total += romanValues[s[i]];
      } else {
          total -= romanValues[s[i]];
      }
      
  }
  
  return total;
};