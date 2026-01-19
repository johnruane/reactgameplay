import { forwardRef, ElementType } from 'react';

import { Cell } from '..';
import classNames from 'classnames';

import style from './style.module.css';

type CellComponentProps = {
  id?: string;
  value?: number;
  pos?: string;
  additionalClasses?: string;
  onClickCellCallback?: (pos: string) => void;
};

type BoardProps = {
  board: number[][];
  CellComponent?: ElementType<CellComponentProps>;
  additionalBoardClasses?: string;
  additionalCellClasses?: string;
  onClickCellCallback?: (pos: string) => void;
};

const Board = forwardRef<HTMLDivElement, BoardProps>(
  (
    {
      board,
      CellComponent = Cell as ElementType<CellComponentProps>,
      additionalBoardClasses,
      additionalCellClasses,
      onClickCellCallback,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(style['board'], additionalBoardClasses)}
      >
        {board?.map((boardRow, i) => (
          <div key={`r-${i}`} className={style['board-row']} data-animate="row">
            {boardRow.map((cell, j) => (
              <CellComponent
                key={`c-${i}-${j}`}
                value={cell}
                pos={`{"r":${i},"c":${j}}`}
                additionalClasses={additionalCellClasses}
                onClickCellCallback={onClickCellCallback}
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
);

export default Board;
