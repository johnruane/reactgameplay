import { getCellValue } from './getCellValue';

/**
 * Takes @board and @p and optional @predicate using @p as a position on @board iterates over and array of
 * directions. If a cell value in one of the 'newDirections' is by default zero, OR matches a @redicate, this
 * cell position is added to an array and returned at the end.
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}} p
 * @param {function(cellValue: number): boolean} predicate
 * @return {{r: string, c: string}[]}
 */

export const findNeighbourCells = (
  board,
  p,
  predicate = (cellValue) => cellValue === 0
) => {
  const { r, c } = p || {};

  const newDirections = [
    { r: r - 1, c: c }, // top
    { r: r - 1, c: c - 1 }, // top left
    { r: r + 1, c: c }, // bottom
    { r: r + 1, c: c + 1 }, // bottom right
    { r: r + 1, c: c - 1 }, // bottom left
    { r: r, c: c - 1 }, // left
    { r: r - 1, c: c - 1 }, // top left
    { r: r, c: c + 1 }, // right
    { r: r - 1, c: c + 1 }, // top right
  ];

  let neighbours = [];

  newDirections.forEach((direction) => {
    if (predicate(getCellValue(board, direction))) {
      neighbours.push(direction);
    }
  });

  return neighbours;
};
