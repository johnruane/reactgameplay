import { deepClone } from '../../utils/deepClone';
import { convertRowColStringToObject } from './convertRowColStringToObject';
import { returnRowColValue } from './returnRowColValue';

export const updateDisplayBoard = (board, gameplayBoard, pos) => {
  const newBoard = deepClone(board);
  const { r, c } = convertRowColStringToObject(pos) || {};
  newBoard[r][c] = returnRowColValue(gameplayBoard, pos);
  return newBoard;
};
