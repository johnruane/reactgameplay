/**
 * Loops through all the sub arrays of @board and returns an array containing strings
 * representing the array positions of elements that are zero.
 *
 * example: ['0-1', '1|1']
 *
 * @param {Number[][]} board
 * @param {string} delimeter
 * @return {String[]} Array of strings
 */

export function findEmptyCells(board, delimiter = '-') {
  let emptyCellsArray = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === -1) {
        emptyCellsArray.push(`${i}${delimiter}${j}`);
      }
    });
  });
  return emptyCellsArray;
}
