import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './board.module.css';

const Cell = memo(function Cell(props) {
  const { value } = props;
  return <div className={classNames(style.cell)} data-value={value}></div>;
});

export default function Board({ board }) {
  return (
    <div className={style.board}>
      {board?.map((boardRow, i) => (
        <div key={`r-${i}`} className={style.row} data-animate='row'>
          {boardRow.map((cell, j) => (
            <Cell key={`c-${i}-${j}`} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.array,
};

Cell.propTypes = {
  value: PropTypes.number,
};
