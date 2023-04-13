const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let oldChar = str[0];
  let countChar = 1;
  const result = [];
  str += '*';

  for (let i = 1; i < str.length; i++) {
    if(oldChar === str[i]) {
      countChar++;
    } else {
      if(countChar > 1) {
        result.push(countChar, oldChar);
      } else {
        result.push(oldChar);
      }
      countChar = 1;
      oldChar = str[i];
    }
  }

  return result.join('');
}

console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
