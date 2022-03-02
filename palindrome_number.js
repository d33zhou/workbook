const isPalindrome = function(x) {

  const num = x.toString();

  if (x < 0) {
      return false;
  }
  
  for (let i = 0; i <= Math.floor(num.length / 2); i++) {
      if (num[i] !== num[(num.length - 1) - i]) {
        return false;
      }
  }
  
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));