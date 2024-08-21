import { depthFirstSearch } from './depthFirstSearch';

const testBoard = [
  [0, 0, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 2, 9, 1, 0, 0, 1, 9],
  [0, 1, 9, 2, 1, 0, 1, 2, 2],
  [1, 2, 2, 1, 0, 1, 3, 9, 2],
  [1, 9, 1, 1, 1, 1, 9, 9, 2],
  [1, 2, 2, 1, 9, 2, 3, 3, 1],
  [1, 3, 9, 2, 1, 2, 9, 1, 0],
  [1, 9, 9, 3, 1, 2, 1, 1, 0],
  [1, 2, 2, 2, 9, 1, 0, 0, 0],
];

describe('depthFirstSearch tests', () => {
  it.each`
    pos                | length | output
    ${{ r: 11, c: 7 }} | ${1}   | ${[{ r: 11, c: 7 }]}
    ${{ r: -1, c: 7 }} | ${1}   | ${[{ r: -1, c: 7 }]}
    ${{ r: 7, c: -1 }} | ${1}   | ${[{ r: 7, c: -1 }]}
    ${{ r: 7, c: 11 }} | ${1}   | ${[{ r: 7, c: 11 }]}
    ${{ r: 0, c: 2 }}  | ${1}   | ${[{ r: 0, c: 2 }]}
    ${{ r: 1, c: 1 }}  | ${1}   | ${[{ r: 1, c: 1 }]}
    ${{ r: 0, c: 0 }}  | ${4}   | ${[{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 2, c: 0 }]}
    ${{ r: 0, c: 5 }}  | ${6}   | ${[{ r: 0, c: 5 }, { r: 0, c: 6 }, { r: 1, c: 5 }, { r: 1, c: 6 }, { r: 2, c: 5 }, { r: 3, c: 4 }]}
    ${{ r: 8, c: 8 }}  | ${5}   | ${[{ r: 8, c: 8 }, { r: 7, c: 8 }, { r: 6, c: 8 }, { r: 8, c: 7 }, { r: 8, c: 6 }]}
  `(
    'should return the positions of adjacent cells that are zero',
    ({ pos, length, output }) => {
      const neighbours = depthFirstSearch({ board: testBoard, pos });
      expect(neighbours.length).toBe(length);
      expect([...neighbours]).toEqual(expect.arrayContaining(output));
    }
  );
});
