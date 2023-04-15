const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  
  const repeat = (arr, n) => Array(n).fill(arr).flat();

  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1; 
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  str = typeof str === 'string' ? str : String(str);

  let addition = typeof options.addition === 'string' ? options.addition : String(options.addition);
  addition = addition === 'undefined' ? '' : addition;

  return repeat(str + repeat(addition, additionRepeatTimes).join(additionSeparator), repeatTimes).join(separator);

}

module.exports = {
  repeater
};
