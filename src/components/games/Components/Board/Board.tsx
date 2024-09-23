import classNames from 'classnames';
import { forwardRef } from 'react';

import './board.scss';

const Board = forwardRef<
  HTMLDivElement,
  {
    board: number[][];
    Cell: React.NamedExoticComponent;
    className?: string;
    onClickCellCallback?: () => void;
  }
>(({ board, Cell, className, onClickCellCallback }, ref) => {
  return (
    <div ref={ref} className={classNames('board', className)}>
      {board?.map((boardRow, i) => (
        <div key={`r-${i}`} className="board-row" data-animate="row">
          {boardRow.map((cell, j) => (
            <Cell
              key={`c-${i}-${j}`}
              // @ts-expect-error will never be null
              value={cell}
              pos={`{"r":${i},"c":${j}}`}
              onClickCellCallback={onClickCellCallback}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

export default Board;
