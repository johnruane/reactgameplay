import { useState } from 'react';

/* Utils */
import { create2dArray } from '../utils/create2dArray';
import { deepClone } from '../utils/deepClone';

/* Components */
import Board from '../Components/Board';

const Minesweeper = () => {
  const emptyBoard = create2dArray(9, 9);

  const [displayBoard, setDisplayBoard] = useState(deepClone(emptyBoard));
  return <Board board={displayBoard} />;
};

export default Minesweeper;
