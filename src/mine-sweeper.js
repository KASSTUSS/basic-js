const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowsCount = matrix.length;
  const colsCount = matrix[0].length;

  const result = [];

  // initialize result matrix with zeroes
  for (let i = 0; i < rowsCount; i++) {
    result.push(Array(colsCount).fill(0));
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      // check top cell
      if (row != 0) {
        if (matrix[row - 1][col]) {
          result[row][col]++;
        }
        if (col != colsCount - 1) {
          if (matrix[row - 1][col + 1]) {
            result[row][col]++;
          }
        }
        if (col != 0) {
          if (matrix[row - 1][col - 1]) {
            result[row][col]++;
          }
        }
      }
      
      // check bottom cell
      if (row != rowsCount - 1) {
        if (matrix[row + 1][col]) {
          result[row][col]++;
        }
        if (col != colsCount - 1) {
          if (matrix[row + 1][col + 1]) {
            result[row][col]++;
          }
        }
        if (col != 0) {
          if (matrix[row + 1][col - 1]) {
            result[row][col]++;
          }
        }
      }
      
      // check right cell
      if (col != colsCount - 1) {
        if (matrix[row][col + 1]) {
          result[row][col]++;
        }
      }
      
      // check left cell
      if (col != 0) {
        if (matrix[row][col - 1]) {
          result[row][col]++;
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
