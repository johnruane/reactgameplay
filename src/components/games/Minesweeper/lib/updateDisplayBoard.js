import { deepClone } from '../../utils/deepClone';
import { getCellValue } from './getCellValue';

/**
 * Takes @displayBoard @gameplayBoard and @cellsToUpdate and for each position in either a single {r, c} } object or Array of
 * {r, c}} objects, will update the @displayBoard value to that of the @gameplayBoard value.
 *
 * This is how we update the game to reveal the cells clicked on. The reason @cellsToUpdate could be an array is so we can perform a
 * 'flood fill'.
 *
 * @param {Number[][]} displayBoard
 * @param {Number[][]} gameplayBoard
 * @param {{r: string, c: string} | {r: string, c: string}[]} cellsToUpdate
 * @return {Number[][]}
 */

export const updateDisplayBoard = ({ displayBoard, gameplayBoard, cellsToUpdate }) => {
  const newBoard = deepClone(displayBoard);

  cellsToUpdate.forEach((p) => {
    const { r, c } = p || {};
    newBoard[r][c] = getCellValue({ board: gameplayBoard, pos: p });
  });

  return newBoard;
};
