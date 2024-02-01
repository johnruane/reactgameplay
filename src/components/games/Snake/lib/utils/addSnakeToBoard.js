/**
 * Adds @snake to @board.
 * The @pos is the 'head' on the @snake. We loop through the @snake array and use the value of each element
 * as the direction to travel from the initial @pos. A local copy of @pos is required to be updated after every
 * move in order to know where the next @snake piece should be placed from.
 *
 * @param {Number[][]} board
 * @param {Number[]} snake
 * @param {{r: Number, c: Number}} r Row
 * @return {Number[][]} New board with @snake added
 */
export function addSnakeToBoard(board, snake, pos) {
  let localR = pos.r;
  let localC = pos.c;
  let localBoard = [...board];

  // Set head
  localBoard[localR][localC] = 1;
  snake.forEach((item) => {
    switch (item) {
      case 1:
        localR = localR + 1;
        break;
      case 2:
        localC = localC - 1;
        break;
      case 3:
        localR = localR - 1;
        break;
      case 4:
        localC = localC + 1;
        break;
    }
    localBoard[localR][localC] = 2;
  });
  return localBoard;
}
