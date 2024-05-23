import { deepClone } from '../../utils/deepClone';

export const updateDisplayBoard = (board, gameplayBoard, pos) => {
  const newBoard = deepClone(board);
  const posR = pos.split('-')[0];
  const posC = pos.split('-')[1];

  const gameplayCellValue = gameplayBoard[posR][posC];

  newBoard[posR][posC] = gameplayCellValue;
  return newBoard;
};
