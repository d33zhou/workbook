/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");

  // or loop through each char in string, if "." then replace with "[.]"
  // append each char (or the replacement chars) in a new string --> to return
};

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
