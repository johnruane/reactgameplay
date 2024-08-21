import { findNeighbourCells } from './findNeighbourCells';

const testBoard = [
  [0, 0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 2, 9, 1, 0, 0, 1, 9],
  [0, 1, 9, 2, 1, 1, 1, 2, 2],
  [1, 2, 2, 1, 0, 1, 3, 0, 2],
  [1, 9, 1, 1, 1, 0, 9, 9, 2],
  [1, 2, 0, 1, 9, 2, 3, 3, 1],
  [1, 3, 9, 0, 1, 2, 9, 1, 0],
  [1, 0, 9, 0, 1, 2, 1, 1, 0],
  [1, 2, 2, 2, 9, 1, 0, 0, 0],
];

describe('findNeighbourCells tests', () => {
  it('should return empty object when pos has NO zeros around', () => {
    expect(findNeighbourCells({ board: testBoard, pos: { r: 0, c: 3 } }).length).toBe(0);
    expect(findNeighbourCells({ board: testBoard, pos: { r: 6, c: 6 } }).length).toBe(0);
  });

  it('should return empty object when current cell is zeros', () => {
    expect(findNeighbourCells({ board: testBoard, pos: { r: 3, c: 7 } }).length).toBe(0);
  });

  it.each`
    pos               | length | output
    ${{ r: 3, c: 4 }} | ${1}   | ${[{ r: 4, c: 5 }]}
    ${{ r: 1, c: 0 }} | ${3}   | ${[{ r: 0, c: 0 }, { r: 2, c: 0 }, { r: 0, c: 1 }]}
    ${{ r: 6, c: 2 }} | ${4}   | ${[{ r: 5, c: 2 }, { r: 6, c: 3 }, { r: 7, c: 3 }, { r: 7, c: 1 }]}
  `(
    'should return the positions of all adjacent cells that are zero, without the current cell',
    ({ pos, length, output }) => {
      const neighbours = findNeighbourCells({ board: testBoard, pos });
      expect(neighbours.length).toBe(length);
      expect([...neighbours]).toEqual(expect.arrayContaining(output));
    }
  );
});
