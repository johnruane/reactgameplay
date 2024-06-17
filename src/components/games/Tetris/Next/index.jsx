import Board from '../../Components/Board';
import Cell from '../../Components/Cell';
import './next.scss';

const emptyBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

export default function Next({ nextTetromino, show }) {
  const boardToShow = show ? nextTetromino : emptyBoard;

  return (
    <div className='next-content'>
      <p className='next-title'>Next</p>
      <Board board={boardToShow} Cell={Cell} />
    </div>
  );
}
