import { deepClone } from '../../utils/deepClone';
import { getCellValue } from './getCellValue';

/**
 * Takes @displayBoard @gameplayBoard and @pos and for each position in either a single {r, c} } object or Array of
 * {r, c}} objects, will update the @displayBoard value to that of the @gameplayBoard value.
 *
 * This is how we update the game to reveal the cells clicked on. The reason @pos could be an array is so we can perform a
 * 'flood fill'.
 *
 * @param {Number[][]} displayBoard
 * @param {Number[][]} gameplayBoard
 * @param {{r: string, c: string} | {r: string, c: string}[]} pos
 * @return {Number[][]}
 */

export const updateDisplayBoard = (displayBoard, gameplayBoard, pos) => {
  const newBoard = deepClone(displayBoard);

  if (pos?.length) {
    pos.forEach((p) => {
      newBoard[p.r][p.c] = getCellValue(gameplayBoard, p);
    });
  } else {
    newBoard[pos.r][pos.c] = getCellValue(gameplayBoard, pos);
  }
  return newBoard;
};
