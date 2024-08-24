import { findNeighbourCells } from './findNeighbourCells';
import { isObjectInSet } from '../../utils/isObjectInSet';
import { isObjectInArray } from '../../utils/isObjectInArray';

/**
 * Takes @board and @cellsToSearch array and iterates over each {r: string, c: string}. Each position
 * in @cellsToSearch is passed to @findNeighbourCells with a @predicate to override the default. In this
 * case we're looking for cell values between 1-8 in order to extend the 'flood fill' feature.
 */

export const findNumberedNeighbours = ({
  board,
  cellsToSearch,
}: {
  board: number[][];
  cellsToSearch: { r: number; c: number }[];
}): { r: number; c: number }[] => {
  const numberedNeighbours = new Set<{ r: number; c: number }>();

  cellsToSearch.forEach((pos) => {
    const neighbours = findNeighbourCells({
      board,
      pos,
      predicate: (cellValue) => cellValue >= 1 && cellValue <= 8,
    });

    /**
     * When looping over each neighbours we don't want to add positions that exist in cellsToSearch as these are irrelevant
     * add will add unnecessary extra searching.
     */

    neighbours.forEach((neighbour) => {
      if (
        !isObjectInSet({ set: numberedNeighbours, obj: neighbour }) &&
        !isObjectInArray({ array: cellsToSearch, obj: neighbour })
      ) {
        numberedNeighbours.add(neighbour);
      }
    });
  });

  return Array.from(numberedNeighbours);
};
