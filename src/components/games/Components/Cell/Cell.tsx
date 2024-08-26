import { memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  const {
    id = '',
    value = 0,
    pos = '',
  }: {
    id?: string;
    value?: number;
    pos?: string;
  } = props ?? {};

  return <span id={id} data-pos={pos} className='board-cell' data-value={value} />;
});

export default Cell;
