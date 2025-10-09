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
  additionalCellClasses: string;
  animatingRows: any;
}) => {
  const isAnimating = animatingRows?.has(rowIndex);
  const onAnimationComplete = () => {
    animatingRows?.delete(rowIndex);
  };

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
          onAnimationComplete={onAnimationComplete}
        />
      ))}
    </div>
  );
};

export default TetrisRow;
