import { memo, useEffect, useRef } from 'react';

import './Cell.scss';

const Cell = memo(function Cell(props) {
  const hiddenValues = [-1, 0, 9];
  const cellRef = useRef(null);
  const {
    value = 0,
    pos = { r: 0, c: 0 },
    onClickCellCallback = () => {},
  }: {
    value?: number;
    pos?: CellPosition;
    onClickCellCallback?: (e: Event) => void;
  } = props ?? {};

  function onClick(e) {
    onClickCellCallback(e);
  }

  useEffect(() => {
    const currentRef = cellRef.current;

    (currentRef as unknown as HTMLElement)?.addEventListener('click', onClick);

    return () => {
      (currentRef as unknown as HTMLElement)?.removeEventListener(
        'click',
        onClick,
      );
    };
  }, []);

  return (
    <div
      ref={cellRef}
      className="board-cell mine-cell"
      data-reveal={false}
      data-value={value}
      data-pos={pos}
    >
      {!hiddenValues.includes(value) && value}
    </div>
  );
});

export default Cell;
