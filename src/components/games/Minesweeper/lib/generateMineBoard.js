import { getRandomEmptyBoardPosition } from '../../Snake/lib/utils/getRandomEmptyBoardPosition';

export const generateMineBoard = ({ board, numberOfMines }) => {
  let mineBoard = board;

  for (let i = 0; i <= numberOfMines; i += 1) {
    const { row, col } = getRandomEmptyBoardPosition({
      board: mineBoard,
      emptyCellValue: -1,
      delimiter: '|',
    });
    mineBoard[row][col] = 9;
  }
  return mineBoard;
};
