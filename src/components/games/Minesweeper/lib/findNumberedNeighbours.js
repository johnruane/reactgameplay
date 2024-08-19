import { findNeighbourCells } from './findNeighbourCells';

/**
 * Takes @board and @emptyNeighbours array and iterates over each {r: string, c: string}. Each position
 * in @emptyNeighbours is passed to @findNeighbourCells with a @predicate to override the default. In this
 * case we're looking for cell values between 1-8 in order to extend the 'flood fill' feature.
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}[]} emptyNeighbours
 * @return {{r: string, c: string}[]}
 */

export const findNumberedNeighbours = (gameBoard, emptyNeighbours) => {
  const numberedNeighbours = new Set();

  emptyNeighbours.forEach((pos) => {
    const neighbours = findNeighbourCells(
      gameBoard,
      pos,
      (cellValue) => cellValue >= 1 && cellValue <= 8
    );

    neighbours.forEach((neighbour) => numberedNeighbours.add(neighbour));
  });
  return Array.from(numberedNeighbours);
};
