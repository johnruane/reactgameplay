import classNames from 'classnames';
import './board.scss';

export default function Board({
  board,
  Cell,
  className,
  onClickCellCallback,
  isGameOver,
}) {
  return (
    <div className={classNames('board', className)}>
      {board?.map((boardRow, i) => (
        <div key={`r-${i}`} className='board-row' data-animate='row'>
          {boardRow.map((cell, j) => (
            <Cell
              key={`c-${i}-${j}`}
              value={cell}
              pos={`${i}-${j}`}
              onClickCellCallback={onClickCellCallback}
              isGameOver={isGameOver}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
