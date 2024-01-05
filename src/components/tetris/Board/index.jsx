import PropTypes from 'prop-types';
import style from './board.module.css';
import classNames from 'classnames';

export default function Board({ board, cellStyle }) {
  return (
    <>
      {board?.map((boardRow, i) => (
        <div key={`r-${i}`} className={style.row} data-animate='row'>
          {boardRow.map((cell, j) => (
            <div
              key={`c-${i}${j}`}
              className={classNames(style.cell, cellStyle)}
              data-value={cell}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
}

Board.propTypes = {
  board: PropTypes.array,
  cellStyle: PropTypes.string,
};
