import Board from '../Board';
import PropTypes from 'prop-types';
import style from './next.module.css';
import classNames from 'classnames';

export default function Next({ nextTetromino, gameOver }) {
  return (
    <div className={style.next}>
      {gameOver ? (
        <p className={style.notification}>Game Over</p>
      ) : (
        <div className='data-wrapper'>
          <p className={classNames(style.nextLabel, 'data-title')}>Next</p>
          <div className={style.tetrominoBoard}>
            <Board board={nextTetromino} cellStyle={style.cell} />
          </div>
        </div>
      )}
    </div>
  );
}

Next.propTypes = {
  nextTetromino: PropTypes.array,
  gameOver: PropTypes.bool,
};
