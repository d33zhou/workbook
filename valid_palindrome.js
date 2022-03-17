const isPalindrome = function (s) {
  if (s === " ") {
    return true;
  }

  let converted = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      converted += s[i];
    } else if (charCode >= 65 && charCode <= 90) {
      converted += s[i].toLowerCase();
    }
  }

  for (let x = 0; x < converted.length / 2; x++) {
    if (converted[x] !== converted[converted.length - 1 - x]) {
      return false;
    }
  }

  return true;
};

console.log("-----TRUE CASES-----");
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("raceca !r")); // true
console.log(isPalindrome(" ")); // true

console.log("-----FALSE CASES-----");
console.log(isPalindrome("bobsled")); // false
console.log(isPalindrome("race a car")); // false
