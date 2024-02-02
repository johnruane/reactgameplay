/**
 * Loops through all the sub arrays of @board and returns an array containing strings
 * representing the array positions of elements that are zero.
 *
 * example: ['0-1', '1-1']
 *
 * @param {Number[][]} board
 * @return {String[]} Array of strings
 */

export function findEmptyCells(board) {
  let emptyCellsArray = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 0) {
        emptyCellsArray.push(`${i}-${j}`);
      }
    });
  });
  return emptyCellsArray;
}
