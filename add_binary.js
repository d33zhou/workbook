/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  // for each input --> convert binary to value, add both values, convert value to binary

  // let total = convertToValue(a) + convertToValue(b);

  // return convertToBinary(total);

  // ------------------------------------------------------------
  // ATTEMPT WITHOUT CONVERSION (to avoid issues with big ints)

  let outputBinary = "";
  let carryOver = 0;

  const maxLength = Math.max(a.length, b.length);

  for (let i = 1; i <= maxLength; i++) {
    valueA = Number(a[a.length - i]) || 0;
    valueB = Number(b[b.length - i]) || 0;

    let sum = valueA + valueB + carryOver;

    if (sum < 2) {
      outputBinary = String(sum) + outputBinary; // should be only 0 or 1
      carryOver = 0;
    } else {
      // either 2 or 3
      outputBinary = String(sum - 2) + outputBinary;
      carryOver = 1;
    }
  }

  if (carryOver > 0) {
    outputBinary = "1" + outputBinary;
  }

  return outputBinary;
};

// const convertToValue = function (binary) {
//   // value of digit is based on the character position
//   // 1 === 1 -- 2^0
//   // 2 === 2 -- 2^1
//   // 3 === 4 -- 2^2
//   // 2 ^ (binary.length - 1)
//   // and then can chop the digit off the string and repeat check for the next digit

//   let power = binary.length - 1;
//   let sum = 0;

//   for (let digit = 0; digit < binary.length; digit++) {
//     sum += 2 ** power * Number(binary[digit]);
//     power--;
//   }

//   return sum;
// };

// const convertToBinary = function (value) {
//   // keep adding on to string until value is achieved
//   // have to start assigning from the left side first

//   // compare the value to incrementing powers of 2 until power is greater, then use 1 less as starting

//   let power = 0;

//   while (value >= 2 ** (power + 1)) {
//     power++;
//   }

//   let binary = "";
//   let remainingValue = value;
//   const digits = power + 1;

//   for (let i = 0; i < digits; i++) {
//     if (remainingValue >= 2 ** power) {
//       binary += "1";
//       remainingValue -= 2 ** power;
//     } else {
//       binary += "0";
//     }

//     power--;
//   }

//   return binary;
// };

console.log(addBinary("11", "1")); // should be 100
console.log(addBinary("1010", "1011")); // should be 10101
console.log(addBinary("1111", "1111")); // should be 11110
