/**
 * Takes @board and @emptyCellValue and for each cell in @board compares it's value to @emptyCellValue and if it
 * is a match proceeds to count the number of mines (9) that cell is touching.
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}[]} emptyNeighbours
 * @return {{r: string, c: string}[]}
 */

export const generateCluesBoard = (board, emptyCellValue) => {
  board?.forEach((boardRow, i) => {
    boardRow?.forEach((cell, j) => {
      let count = 0;
      if (cell === emptyCellValue) {
        if (board[i - 1]?.[j - 1] === 9) {
          count += 1;
        }
        if (board[i - 1]?.[j] === 9) {
          count += 1;
        }
        if (board[i - 1]?.[j + 1] === 9) {
          count += 1;
        }
        if (board[i][j - 1] === 9) {
          count += 1;
        }
        if (board[i][j] === 9) {
          count += 1;
        }
        if (board[i][j + 1] === 9) {
          count += 1;
        }
        if (board[i + 1]?.[j - 1] === 9) {
          count += 1;
        }
        if (board[i + 1]?.[j] === 9) {
          count += 1;
        }
        if (board[i + 1]?.[j + 1] === 9) {
          count += 1;
        }
        board[i][j] = count;
      }
    });
  });
  return board;
};
