import Board from '../../Components/Board';
import Cell from '../../Components/Cell';
import Panel from '../../Components/Panel';

import './next.scss';

const emptyBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export default function Next({ nextTetromino, show }) {
  const boardToShow = show ? nextTetromino : emptyBoard;

  return (
    <Panel
      sections={[
        {
          heading: 'Next',
          value: (
            <Board board={boardToShow} Cell={Cell} className="next-board" />
          ),
        },
      ]}
    />
  );
}
