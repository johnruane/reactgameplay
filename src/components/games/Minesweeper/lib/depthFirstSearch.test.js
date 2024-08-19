import { depthFirstSearch } from './depthFirstSearch';

const testBoard = [
  [1, 2, 1, 1, 0, 0, 0, 1, 9],
  [9, 3, 9, 3, 2, 1, 0, 1, 1],
  [9, 3, 2, 9, 9, 2, 2, 1, 1],
  [1, 1, 1, 2, 3, 9, 3, 9, 1],
  [1, 1, 1, 0, 1, 2, 9, 2, 1],
  [1, 9, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0],
];

describe('depthFirstSearch tests', () => {
  it.each`
    pos                | length | output
    ${{ r: 11, c: 7 }} | ${1}   | ${[{ r: 11, c: 7 }]}
    ${{ r: -1, c: 7 }} | ${1}   | ${[{ r: -1, c: 7 }]}
    ${{ r: 7, c: -1 }} | ${1}   | ${[{ r: 7, c: -1 }]}
    ${{ r: 7, c: 11 }} | ${1}   | ${[{ r: 7, c: 11 }]}
    ${{ r: 0, c: 1 }}  | ${1}   | ${[{ r: 0, c: 1 }]}
    ${{ r: 1, c: 1 }}  | ${1}   | ${[{ r: 1, c: 1 }]}
    ${{ r: 0, c: 4 }}  | ${4}   | ${[{ r: 0, c: 4 }, { r: 0, c: 5 }, { r: 0, c: 6 }, { r: 1, c: 6 }]}
    ${{ r: 5, c: 3 }}  | ${5}   | ${[{ r: 4, c: 3 }, { r: 5, c: 3 }, { r: 5, c: 4 }, { r: 6, c: 3 }, { r: 6, c: 2 }]}
    ${{ r: 8, c: 1 }}  | ${5}   | ${[{ r: 7, c: 0 }, { r: 8, c: 0 }, { r: 7, c: 1 }, { r: 8, c: 1 }, { r: 8, c: 2 }]}
  `(
    'should return the positions of adjacent cells that are zero',
    ({ pos, length, output }) => {
      const neighbours = depthFirstSearch(testBoard, pos);
      expect(neighbours.length).toBe(length);
      expect([...neighbours]).toEqual(expect.arrayContaining(output));
    }
  );
});
