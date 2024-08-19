/**
 * Base on example: https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript
 * Takes @gameBoard and @pos and does a Depth-first search returning an array of
 * {r: string, c: string} denoting all the adjacent cells next to each @pos that are value zero.
 *
 * @param {Number[][]} gameBoard
 * @param {{r: string, c: string}} pos
 * @return {{r: string, c: string}[]}
 */

import { getCellValue } from './getCellValue';
import { findNeighbourCells } from './findNeighbourCells';
import { isValueInSet } from './isValueInSet';

export const depthFirstSearch = (gameBoard, pos) => {
  const valueOfCell = getCellValue(gameBoard, pos);

  if (valueOfCell !== 0) return [pos];

  const stack = [pos];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();
    const valueOfCell = getCellValue(gameBoard, vertex);

    if (!isValueInSet(visited, vertex) && valueOfCell === 0) {
      visited.add(vertex);
      result.push(vertex);

      const neighbourCells = findNeighbourCells(gameBoard, vertex);
      neighbourCells.forEach((cell) => {
        stack.push(cell);
      });
    }
  }

  return result;
};
