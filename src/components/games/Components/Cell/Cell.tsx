import { memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  return <span className='board-cell' data-value={props.value}></span>;
});

export default Cell;
