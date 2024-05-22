import { getRandomEmptyBoardPosition } from '../../Snake/lib/utils/getRandomEmptyBoardPosition';

export const generateMineBoard = (board, mineCount) => {
  let mineBoard = board;

  for (let i = 0; i <= mineCount; i += 1) {
    const { row, col } = getRandomEmptyBoardPosition(mineBoard);
    mineBoard[row][col] = 9;
  }
  return mineBoard;
};
