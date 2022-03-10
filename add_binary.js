/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  // for each input --> convert binary to value, add both values, convert value to binary

  let total = convertToValue(a) + convertToValue(b);

  // return convertToBinary(total);
};

const convertToValue = function (binary) {
  // value of digit is based on the character position
  // 1 === 1 -- 2^0
  // 2 === 2 -- 2^1
  // 3 === 4 -- 2^2
  // 2 ^ (binary.length - 1)
  // and then can chop the digit off the string and repeat check for the next digit

  let power = binary.length - 1;
  let sum = 0;

  for (let digit = 0; digit < binary.length; digit++) {
    sum += 2 ** power * Number(binary[digit]);
    power--;
  }

  return sum;
};

const convertToBinary = function (value) {
  // keep adding on to string until value is achieved
  // have to start assigning from the left side first

  // compare the value to incrementing powers of 2 until power is greater, then use 1 less as starting

  let power = 0;

  while (value >= 2 ** (power + 1)) {
    power++;
  }

  let binary = "";
  let remainingValue = value;

  while (remainingValue > 0 && power >= 0) {
    console.log(remainingValue);
    if (remainingValue >= 2 ** power) {
      binary += "1";
      remainingValue -= 2 ** power;
    } else {
      binary += "0";
    }

    power--;
  }

  return binary;
};

// console.log(addBinary("11", "1"));
// console.log(convertToValue("11") + convertToValue("1"));
console.log(convertToBinary(16));
// console.log(convertToBinary(8));
// console.log(convertToBinary(5));
// console.log(convertToBinary(4));
// console.log(convertToBinary(0));
