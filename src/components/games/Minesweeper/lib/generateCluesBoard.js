export const generateCluesBoard = (board) => {
  board?.forEach((boardRow, i) => {
    boardRow?.forEach((cell, j) => {
      let count = 0;
      if (cell === 0) {
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
