import { findNeighbourCells } from './findNeighbourCells';

const testBoard = [
  [1, 2, 1, 1, 0, 0, 0, 1, 9],
  [9, 3, 9, 3, 2, 1, 0, 1, 1],
  [9, 3, 2, 9, 9, 2, 2, 1, 1],
  [1, 1, 1, 2, 3, 9, 3, 9, 1],
  [1, 1, 1, 0, 1, 2, 9, 2, 1],
  [1, 9, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

describe('findNeighbourCells tests', () => {
  it('should return empty object when pos has NO zeros around', () => {
    expect(findNeighbourCells(testBoard, { r: 0, c: 0 }).length).toBe(0);
    expect(findNeighbourCells(testBoard, { r: 4, c: 5 }).length).toBe(0);
  });

  it.each`
    pos               | output
    ${{ r: 3, c: 3 }} | ${[{ r: 4, c: 3 }]}
    ${{ r: 3, c: 3 }} | ${[{ r: 4, c: 3 }]}
    ${{ r: 4, c: 4 }} | ${[{ r: 5, c: 4 }, { r: 4, c: 3 }]}
    ${{ r: 6, c: 0 }} | ${[{ r: 7, c: 0 }]}
    ${{ r: 6, c: 4 }} | ${[{ r: 5, c: 4 }, { r: 6, c: 3 }, { r: 6, c: 5 }, { r: 7, c: 4 }]}
    ${{ r: 8, c: 8 }} | ${[{ r: 7, c: 8 }, { r: 8, c: 7 }]}
  `('should return the positions of adjacent cells that are zero', ({ pos, output }) => {
    const neighbours = findNeighbourCells(testBoard, pos);
    expect([...neighbours]).toEqual(expect.arrayContaining(output));
  });
});
