import { useEffect, useState, useRef, memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  // const [isRevealed, setIsRevealed] = useState(false);

  const hiddenValues = [-1, 0, 9];
  const cellRef = useRef(null);
  const { value, pos, onClickCellCallback, isGameOver } = props;

  function onClick(e) {
    if (isGameOver) return;

    onClickCellCallback(e);
    // setIsRevealed(true);
  }

  useEffect(() => {
    const currentRef = cellRef.current;
    cellRef.current.addEventListener('click', onClick);

    return () => {
      currentRef.removeEventListener('click', onClick);
    };
  });

  return (
    <div
      ref={cellRef}
      className='board-cell mine-cell'
      data-reveal={false}
      data-value={value}
      data-pos={pos}
    >
      {!hiddenValues.includes(value) && value}
    </div>
  );
});

export default Cell;
