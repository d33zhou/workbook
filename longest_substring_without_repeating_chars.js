/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let current = 0;
  const map = {};
  let leftPointer = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      leftPointer = Math.max(map[s[i]] + 1, leftPointer);
    }

    current = i - leftPointer + 1;
    map[s[i]] = i;
    longest = Math.max(longest, current);
  }

  return longest;
};
