import Board from '../../Components/Board';
import Cell from '../../Components/Cell';
import './next.scss';

export default function Next({ nextTetromino }) {
  return (
    <div className='next-content'>
      <p className='next-title'>Next</p>
      <Board board={nextTetromino} Cell={Cell} />
    </div>
  );
}
