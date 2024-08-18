import { findEmptyCells } from './findEmptyCells';

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

const pos1 = { r: -1, c: 1 };

describe('findEmptyCells tests', () => {
  it('should return an empty array if r position not exist on board', () => {
    expect(findEmptyCells(testBoard, '11|7').length).toBe(0);
    expect(findEmptyCells(testBoard, '-1|7').length).toBe(0);
  });

  it('should return an empty array if c position not exist on board', () => {
    expect(findEmptyCells(testBoard, '7|-1').length).toBe(0);
    expect(findEmptyCells(testBoard, '7|11').length).toBe(0);
  });

  it('should return an empty array value at position is NOT 0', () => {
    expect(findEmptyCells(testBoard, '0|1').length).toBe(0);
    expect(findEmptyCells(testBoard, '0|1').length).toBe(0);
  });

  it('should return an value of cell at pos', () => {
    expect(findEmptyCells(testBoard, '0|4')).toBe(0);
  });
});
