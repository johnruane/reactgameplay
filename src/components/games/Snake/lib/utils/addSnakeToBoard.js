/**
 * Adds @tetromino to @board at specified @r & @c
 * @r & @c refer to the top left corner of the @tetromino
 * @tetromino cells that are positioned outside the bounds of @board are ignored
 * Only positive @tetromino values are added to @board, zeros are ignored
 *
 * @param {Number[][]} board
 * @param {Number[][]} tetromino
 * @param {Number} r Row
 * @param {Number} c Column
 * @return {Number[][]} New board with @tetromino added
 */
export function addSnakeToBoard(board, snake, r, c) {
  board[r][c] = snake[0];

  return board;
}
