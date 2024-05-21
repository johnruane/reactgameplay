import { memo } from 'react';
import './board.scss';
import classNames from 'classnames';

const Cell = memo(function Cell(props) {
  const { value } = props;
  return <div className='board-cell' data-value={value}></div>;
});

export default function Board({ board, className }) {
  return (
    <div className={classNames('board', className)}>
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
