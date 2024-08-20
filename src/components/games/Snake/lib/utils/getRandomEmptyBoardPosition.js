import { findEmptyCells } from './findEmptyCells';

export function getRandomEmptyBoardPosition({
  board,
  emptyCellValue = 0,
  delimiter = '-',
}) {
  const availableCells = findEmptyCells({
    board: board,
    emptyCellValue: emptyCellValue,
    delimiter: delimiter,
  });

  const randomPosition =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  const [row, col] = randomPosition.split(delimiter).map(Number);
  return { row, col };
}
