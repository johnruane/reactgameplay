import { forwardRef } from 'react';

import { TetrisCell } from '../TetrisCell';
import TetrisRow from '../TetrisRow/TetrisRow';
import classNames from 'classnames';

import style from './style.module.css';

const TetrisBoard = forwardRef<
  HTMLDivElement,
  {
    board: number[][];
    additionalBoardClasses?: string;
    additionalCellClasses?: string;
    animatingRows?: any;
    rowIndex?: string;
  }
>(
  (
    { board, additionalBoardClasses, additionalCellClasses, animatingRows },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(style['board'], additionalBoardClasses)}
      >
        {board?.map((boardRow, i) => (
          <TetrisRow
            boardRow={boardRow}
            rowIndex={i}
            additionalCellClasses={additionalCellClasses}
            animatingRows={animatingRows}
          />
        ))}
      </div>
    );
  },
);

export default TetrisBoard;
