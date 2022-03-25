/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    let input = "";

    if (i % 3 === 0) {
      input += "Fizz";
    }

    if (i % 5 === 0) {
      input += "Buzz";
    }

    if (input === "") {
      input = String(i);
    }

    output.push(input);
  }

  return output;
};

console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
