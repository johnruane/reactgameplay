import { memo } from 'react';
import PropTypes from 'prop-types';
import './board.scss';

const Cell = memo(function Cell(props) {
  const { value } = props;
  return <div className='board-cell' data-value={value}></div>;
});

export default function Board({ board }) {
  return (
    <div className='board'>
      {board?.map((boardRow, i) => (
        <div key={`r-${i}`} className='board-row' data-animate='row'>
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
