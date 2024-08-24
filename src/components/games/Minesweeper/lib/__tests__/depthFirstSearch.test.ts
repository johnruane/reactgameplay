import { depthFirstSearch } from '../depthFirstSearch';

describe('depthFirstSearch', () => {
  it('should return the initial position if the cell value is not 0', () => {
    const board = [
      [0, 1, 2],
      [0, 0, 4],
      [5, 0, 7],
    ];
    const pos = { r: 0, c: 1 };

    const result = depthFirstSearch({
      board,
      pos,
    });

    expect(result).toEqual([pos]);
  });

  it('should visit all connected cells with value 0', () => {
    const board = [
      [0, 1, 2],
      [0, 0, 4],
      [5, 0, 7],
    ];
    const pos = { r: 1, c: 1 };

    const result = depthFirstSearch({
      board,
      pos,
    });

    expect([...result]).toEqual(
      expect.arrayContaining([
        { r: 0, c: 0 },
        { r: 1, c: 0 },
        { r: 1, c: 1 },
        { r: 2, c: 1 },
      ])
    );
  });

  it('should handle isolated cells with value 0', () => {
    const board = [
      [1, 1, 2],
      [2, 0, 4],
      [5, 3, 7],
    ];
    const pos = { r: 0, c: 0 };

    const result = depthFirstSearch({
      board,
      pos,
    });

    expect(result).toEqual([{ r: 0, c: 0 }]);
  });

  it('should visit diagonal cells with value 0', () => {
    const board = [
      [1, 1, 0],
      [2, 0, 4],
      [0, 3, 7],
    ];
    const pos = { r: 0, c: 2 };

    const result = depthFirstSearch({
      board,
      pos,
    });

    expect(result).toEqual([
      { r: 0, c: 2 },
      { r: 1, c: 1 },
      { r: 2, c: 0 },
    ]);
  });
});
