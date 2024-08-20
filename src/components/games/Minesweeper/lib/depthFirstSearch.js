/**
 * Base on example: https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript
 * Takes @board and @pos and does a Depth-first search returning an array of
 * {r: string, c: string} denoting all the adjacent cells next to each @pos that are value zero.
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}} pos
 * @return {{r: string, c: string}[]}
 */

import { getCellValue } from './getCellValue';
import { findNeighbourCells } from './findNeighbourCells';
import { isObjectInSet } from './isObjectInSet';

export const depthFirstSearch = ({ board, pos }) => {
  const valueOfCell = getCellValue({ board, pos });

  if (valueOfCell !== 0) return [pos];

  const stack = [pos];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();
    const valueOfCell = getCellValue({ board, pos: vertex });

    if (!isObjectInSet({ set: visited, obj: vertex }) && valueOfCell === 0) {
      visited.add(vertex);
      result.push(vertex);

      const neighbourCells = findNeighbourCells({ board, pos: vertex });
      neighbourCells.forEach((cell) => {
        stack.push(cell);
      });
    }
  }

  return result;
};
