const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!Array.isArray(matrix))
    return 0;
  if (matrix.length === 0)
    return 0;

  let count = 0;

  matrix.forEach(row => {
    if (Array.isArray(row))
      if (row.length != 0)
        row.forEach(item => {
          if(item === '^^') count++;
        })
  });

  return count;
}

module.exports = {
  countCats
};
