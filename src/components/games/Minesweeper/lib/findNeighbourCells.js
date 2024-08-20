import { getCellValue } from './getCellValue';

/**
 * Takes @board and @pos and optional @predicate using @pos as a position on @board iterates over and array of
 * directions. If a cell value in one of the 'newDirections' is by default zero, OR matches a @redicate, this
 * cell position is added to an array and returned at the end.
 *
 * Does not return @pos if this cell value is zero.
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}} pos
 * @param {function(cellValue: number): boolean} predicate
 * @return {{r: string, c: string}[]}
 */

export const findNeighbourCells = ({
  board,
  pos,
  predicate = (cellValue) => cellValue === 0,
}) => {
  const { r, c } = pos || {};

  /**
   * Based on real game observations the 'flood fill' feature will look for empty cells in all 8 directions. 'Flood
   * fill' will traverse between two empty areas if they are joined by empty cells at a diagonal point.
   *
   */
  const newDirections = [
    { r: r - 1, c: c }, // top
    { r: r + 1, c: c }, // bottom
    { r: r, c: c - 1 }, // left
    { r: r, c: c + 1 }, // right
    { r: r - 1, c: c - 1 }, // top left
    { r: r - 1, c: c + 1 }, // top right
    { r: r + 1, c: c + 1 }, // bottom right
    { r: r + 1, c: c - 1 }, // bottom left
  ];

  let neighbours = [];

  newDirections.forEach((direction) => {
    if (predicate(getCellValue({ board, pos: direction }))) {
      neighbours.push(direction);
    }
  });

  return neighbours;
};
