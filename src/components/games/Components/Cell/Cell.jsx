import { memo } from 'react';
import './Cell.scss';

const Cell = memo(function Cell(props) {
  return <div className='board-cell' data-value={props.value}></div>;
});

export default Cell;
