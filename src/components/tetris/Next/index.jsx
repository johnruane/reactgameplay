import Board from '../Board';
import PropTypes from 'prop-types';
import style from './next.module.css';

export default function Next({ nextTetromino }) {
  return (
    <div className={style.content}>
      <p className={style.title}>Next</p>
      <Board board={nextTetromino} />
    </div>
  );
}

Next.propTypes = {
  nextTetromino: PropTypes.array,
};
