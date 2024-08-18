import { returnRowColValue } from './returnRowColValue';

export const findEmptyCells = (gameBoard, pos) => {
  const valueOfCell = returnRowColValue(gameBoard, pos);

  if (typeof returnRowColValue(gameBoard, pos) !== 'number') return [];
  if (valueOfCell !== 0) return [];

  const stack = [];
  const visited = new Set();

  while (stack.length) {}

  return returnRowColValue(gameBoard, pos);
};
