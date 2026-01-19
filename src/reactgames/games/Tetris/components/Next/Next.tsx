import { Board, Cell } from '../../shared/components';

import { TetrisPanel } from '../TetrisPanel';
import styles from './style.module.css';

const emptyBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export default function Next({ nextTetromino, show }) {
  const boardToShow = show ? nextTetromino : emptyBoard;

  return (
    <TetrisPanel heading='Next'>
      <Board
        board={boardToShow}
        CellComponent={Cell}
        additionalBoardClasses={styles['next-board']}
        additionalCellClasses={styles['cell']}
      />
    </TetrisPanel>
  );
}
