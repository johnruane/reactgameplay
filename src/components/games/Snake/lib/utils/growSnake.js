/**
 * Function very specific to growing the snake in length. For given array, takes the 2nd element
 * and pushes to beginning. Done this way to prevent unexpected behaviour seen when adding to the
 * end of the array.
 *
 * example: ['0-1', '1-1']
 *
 * @param {Number[]} snake
 * @return {Number[]}
 */

export function growSnake(snake) {
  let selectedElement = snake[2];
  const copySnakeBody = [...snake];
  copySnakeBody.push(selectedElement);
  return copySnakeBody;
}
