import { TetrisCell } from '../TetrisCell';

import style from './style.module.css';

const TetrisRow = ({
  boardRow,
  rowIndex,
  additionalCellClasses,
  animatingRows,
}: {
  boardRow: number[];
  rowIndex: number;
  additionalCellClasses: string | undefined;
  animatingRows: Set<number> | undefined;
}) => {
  const isAnimating = animatingRows?.has(rowIndex);

  return (
    <div
      key={`r-${rowIndex}`}
      className={style['board-row']}
      data-animate="row"
    >
      {boardRow.map((cell, j) => (
        <TetrisCell
          key={`${rowIndex}-${j}`}
          id={`${rowIndex}`}
          value={cell}
          pos={`{"r":${rowIndex},"c":${j}}`}
          additionalClasses={additionalCellClasses}
          isAnimating={isAnimating}
        />
      ))}
    </div>
  );
};

export default TetrisRow;
