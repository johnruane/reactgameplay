/**
 * Takes @board and for each index in @indexes removes the row and adds a new one at the top of the @board
 *
 * @param {Number[][]} board
 * @return {Number[]} indexes of complete rows
 */

import { deepClone } from '../../../utils/deepClone';

export const removeRowsFromBoard = (board, indexes) => {
  if (!indexes || !board) return board;

  const cloneBoard = deepClone(board);
  // Create an array of zeros to the length of the number of elements in a row.
  const row = Array(board?.[0]?.length).fill(0);

  indexes?.forEach((index) => {
    cloneBoard.splice(`${index}`, 1);
    cloneBoard.unshift(row);
  });
  return cloneBoard;
};
