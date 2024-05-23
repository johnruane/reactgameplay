import { useEffect, useState, useRef, memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  const [isRevealed, setIsRevealed] = useState(false);

  const cellRef = useRef(null);
  const { value, pos, onClickCellCallback } = props;

  function onClick(e) {
    onClickCellCallback(e);
    setIsRevealed(true);
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
      data-reveal={isRevealed}
      data-value={value}
      data-pos={pos}
    >
      {value !== 0 && value !== 9 && value}
    </div>
  );
});

export default Cell;
