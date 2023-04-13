const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let maxNum = parseInt(n.slice(1));

  for(let i = 1; i < n.length; i++) {
    const testNum = (n.slice(0, i) + n.slice(i + 1));
    maxNum = maxNum < testNum ? testNum : maxNum;
  }

  return parseInt(maxNum);
}

module.exports = {
  deleteDigit
};
