import { findNumberedNeighbours } from './findNumberedNeighbours';

const testBoard = [
  [1, 2, 1, 1, 0, 0, 0, 1, 9],
  [9, 3, 9, 3, 9, 1, 0, 1, 1],
  [9, 3, 2, 9, 9, 2, 2, 1, 1],
  [1, 1, 1, 2, 3, 9, 3, 9, 1],
  [1, 1, 1, 0, 1, 2, 9, 2, 1],
  [1, 9, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

describe('findNumberedNeighbours tests', () => {
  it.each`
    searchCells                         | length | output
    ${[{ r: 0, c: 4 }]}                 | ${3}   | ${[{ r: 0, c: 3 }, { r: 1, c: 3 }, { r: 1, c: 5 }]}
    ${[{ r: 3, c: 4 }]}                 | ${4}   | ${[{ r: 2, c: 5 }, { r: 3, c: 3 }, { r: 4, c: 4 }, { r: 4, c: 5 }]}
    ${[{ r: 8, c: 0 }, { r: 8, c: 1 }]} | ${0}   | ${[]}
    ${[{ r: 1, c: 8 }, { r: 2, c: 8 }]} | ${4}   | ${[{ r: 0, c: 7 }, { r: 1, c: 7 }, { r: 2, c: 7 }, { r: 3, c: 8 }]}
  `(
    'should return the positions of adjacent cells that are 1-8',
    ({ searchCells, length, output }) => {
      const numberedNeighbours = findNumberedNeighbours({
        board: testBoard,
        cellsToSearch: searchCells,
      });
      expect(numberedNeighbours.length).toBe(length);
      expect([...numberedNeighbours]).toEqual(expect.arrayContaining(output));
    }
  );
});
