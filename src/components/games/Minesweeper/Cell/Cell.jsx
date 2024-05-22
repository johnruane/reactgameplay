import { useEffect, useState, useRef, memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  const cellRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  function handleCellClick() {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  }

  useEffect(() => {
    const currentRef = cellRef.current;
    cellRef.current.addEventListener('click', handleCellClick);

    return () => {
      currentRef.removeEventListener('click', handleCellClick);
    };
  });

  return (
    <div
      ref={cellRef}
      className='board-cell'
      data-value={props.value}
      data-reveal={isRevealed}
    ></div>
  );
});

export default Cell;
