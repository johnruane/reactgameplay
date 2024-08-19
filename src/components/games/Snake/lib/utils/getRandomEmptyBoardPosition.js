import { findEmptyCells } from './findEmptyCells';

export function getRandomEmptyBoardPosition(board, delimiter = '-') {
  const availableCells = findEmptyCells(board, delimiter);

  const randomPosition =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  const [row, col] = randomPosition.split(delimiter).map(Number);
  return { row, col };
}
