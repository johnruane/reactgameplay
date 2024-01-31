import { addSnakeToBoard } from './addSnakeToBoard';

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const output = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

describe('addSnakeToBoard Test Suite', () => {
  it.each`
    board         | snake  | pos               | output
    ${[...board]} | ${[1]} | ${{ r: 2, c: 2 }} | ${output}
  `('should add snake to board starting at pos', ({ board, snake, pos, output }) => {
    expect(JSON.stringify(addSnakeToBoard(board, snake, pos))).toEqual(
      JSON.stringify(output)
    );
  });
});
